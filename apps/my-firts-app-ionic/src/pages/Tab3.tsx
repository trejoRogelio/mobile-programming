
import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonModal,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonImg,
  IonIcon,
} from '@ionic/react';
import { camera, close, cameraReverse } from 'ionicons/icons';
import GalleryComponent from '../components/GalleryComponent';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import { Preferences } from '@capacitor/preferences';
import './Tab3.css';

const PHOTO_STORAGE = 'photos';

const Tab3: React.FC = () => {
  const { photos, deletePhoto, takePhoto } = usePhotoGallery();
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<UserPhoto | undefined>(undefined);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRetakePhoto = async (id: string) => {
    handleCloseModal();
    
    const selected = photos.find((photo) => photo.id === id);

    if (!selected) {
      return;
    }

    deletePhoto(selected);

    const newPhoto: UserPhoto = await takePhoto();

    const updatedPhotos = [...photos, newPhoto];
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(updatedPhotos) });

    setSelectedPhoto(newPhoto);
    setShowModal(true);
  };

  const handleOpenCamera = async () => {
    const newPhoto: UserPhoto = await takePhoto();
    const updatedPhotos = [...photos, newPhoto];
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(updatedPhotos) });
    setSelectedPhoto(newPhoto);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <GalleryComponent
          photos={photos}
          onDelete={deletePhoto}
          onRetake={handleRetakePhoto}
          onPhotoClick={(photo: UserPhoto) => {
            setSelectedPhoto(photo);
            setShowModal(true);
          }}
        />

        <IonModal isOpen={showModal} onDidDismiss={handleCloseModal}>
          <IonGrid>
            <IonRow>
              <IonCol>
                {selectedPhoto && (
                  <>
                    <IonImg src={selectedPhoto.webviewPath} />
                    <IonButton onClick={() => handleRetakePhoto(selectedPhoto.id)}>
                      <IonIcon icon={cameraReverse} />
                      Volver a tomar foto
                    </IonButton>
                    <IonButton onClick={handleCloseModal}>
                      <IonIcon icon={close} />
                      Cerrar
                    </IonButton>
                  </>
                )}
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
