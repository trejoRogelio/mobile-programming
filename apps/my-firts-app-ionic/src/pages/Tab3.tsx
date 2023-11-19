// Tab3.tsx
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
import { camera, close, cameraReverse } from 'ionicons/icons'; // Importa los iconos necesarios
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
    // Close the modal
    handleCloseModal();

    // Find the selected photo by id
    const selected = photos.find((photo) => photo.id === id);

    if (!selected) {
      return;
    }

    // Take a new photo
    const newPhoto: UserPhoto = await takePhoto();

    // Update the existing photo with the new photo using the same id
    const updatedPhotos = photos.map((photo) =>
      photo.id === id ? { ...newPhoto, id } : photo
    );

    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(updatedPhotos) });

    setSelectedPhoto(newPhoto);
    setShowModal(true);
  };

  const handleOpenCamera = async () => {
    // Take a new photo
    const newPhoto: UserPhoto = await takePhoto();

    // Add the new photo to the gallery
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
