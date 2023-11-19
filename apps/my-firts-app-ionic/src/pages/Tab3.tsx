import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
} from '@ionic/react';
import { trash, eye, informationCircle } from 'ionicons/icons';
import PhotoModal from '../components/PhotoModal';
import DeleteConfirmationModal from '../components/DeleteConfirmationModal';
import PhotoDetails from '../components/PhotoDetails';
import { usePhotoContext, UserPhoto } from '../hooks/PhotoContext';
import './Tab3.css';

const Tab3: React.FC = () => {
  const { photos, deletePhoto } = usePhotoContext();
  const [selectedPhoto, setSelectedPhoto] = useState<UserPhoto | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const handleViewPhoto = (photo: UserPhoto) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const handleDeletePhoto = (photo: UserPhoto) => {
    setSelectedPhoto(photo);
    setIsDeleteConfirmationModalOpen(true);
  };

  const handleShowDetails = (photo: UserPhoto) => {
    setSelectedPhoto(photo);
    setIsDetailsModalOpen(true);
  };

  const confirmDelete = async () => {
    if (selectedPhoto) {
      try {
        await deletePhoto(selectedPhoto);
      } catch (error) {
        console.error('Error al eliminar la foto:', error);
      } finally {
        setSelectedPhoto(undefined);
        setIsDeleteConfirmationModalOpen(false);
        setIsModalOpen(false);
      }
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="tab3-container">
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg
                  src={photo.webviewPath}
                  onClick={() => handleViewPhoto(photo)}
                  className="tab3-image"
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        <IonActionSheet
          isOpen={!!selectedPhoto}
          buttons={[
            {
              text: 'View Photo',
              role: 'destructive',
              icon: eye,
              handler: () => {
                setIsModalOpen(true);
              },
            },
            {
              text: 'Delete',
              role: 'destructive',
              icon: trash,
              handler: () => {
                if (selectedPhoto) {
                  handleDeletePhoto(selectedPhoto);
                }
              },
            },
            {
              text: 'Details',
              icon: informationCircle,
              handler: () => {
                if (selectedPhoto) {
                  handleShowDetails(selectedPhoto);
                }
              },
            },
            {
              text: 'Cancel',
              role: 'cancel',
            },
          ]}
          onDidDismiss={() => setSelectedPhoto(undefined)}
        />

        <PhotoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          photoUrl={selectedPhoto?.webviewPath}
        />

        <DeleteConfirmationModal
          isOpen={isDeleteConfirmationModalOpen}
          onClose={() => setIsDeleteConfirmationModalOpen(false)}
          onConfirm={confirmDelete}
        />

        <PhotoDetails
          isOpen={isDetailsModalOpen}
          onClose={() => setIsDetailsModalOpen(false)}
          photoDetails={{
            date: selectedPhoto?.date || '',
          }}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
