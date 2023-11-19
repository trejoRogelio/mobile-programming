import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
  IonModal,
  IonButton,
} from '@ionic/react';
import { camera, trash, close } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';

interface Tab2Props {
  deletePhoto: (photo: UserPhoto) => Promise<void>;
  photos: UserPhoto[];
  takePhoto: () => Promise<void>;
}

const Tab2: React.FC<Tab2Props> = ({ deletePhoto, photos, takePhoto }) => {
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto | undefined>();
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<UserPhoto | null>(null);

  const openModal = (photo: UserPhoto) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Photo Gallery</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg
                  src={photo.webviewPath}
                  onClick={() => openModal(photo)}
                  style={{ cursor: 'pointer' }}
                />
                <IonIcon
                  icon={trash}
                  onClick={() => setPhotoToDelete(photo)}
                  style={{
                    position: 'absolute',
                    top: '5px',
                    right: '5px',
                    color: 'red',
                    cursor: 'pointer',
                  }}
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>



        <IonActionSheet
          isOpen={!!photoToDelete}
          buttons={[
            {
              text: 'Delete',
              role: 'destructive',
              icon: trash,
              handler: () => {
                if (photoToDelete) {
                  deletePhoto(photoToDelete);
                  setPhotoToDelete(undefined);
                }
              },
            },
            {
              text: 'Cancel',
              icon: close,
              role: 'cancel',
            },
          ]}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        />

        {/* Modal para mostrar la imagen a pantalla completa */}
        <IonModal isOpen={showModal} onDidDismiss={closeModal}>
          <IonImg
            src={selectedPhoto?.webviewPath}
            style={{ width: '100%', height: '100%' }}
          />
          <IonButton onClick={closeModal} color="danger">Close</IonButton>
          <IonButton onClick={async () => {
            try {
              console.log('Before takePhoto', photos);
              await takePhoto();
              console.log('After takePhoto, newPhoto:', photos);

              if (selectedPhoto) {
                console.log('Before deletePhoto', photos);
                await deletePhoto(selectedPhoto);
                console.log('After deletePhoto', photos);
              }
              
              console.log('Before closeModal and setSelectedPhoto', photos);
              closeModal();
              setSelectedPhoto(null);
              console.log('After closeModal and setSelectedPhoto', photos);
            } catch (error) {
              console.error('Error while changing photo:', error);
            }
          }}>
            Change <IonIcon icon={camera} />
          </IonButton>
        </IonModal>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;