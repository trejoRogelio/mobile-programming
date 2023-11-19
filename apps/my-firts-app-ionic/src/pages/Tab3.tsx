import React, { useState, useEffect, useCallback } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonImg,
  IonActionSheet,
  IonModal,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { trash, close, camera } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import './Tab3.css'; // Asegúrate de importar el archivo de estilos

const Tab3: React.FC = () => {
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();
  const [galleryPhotos, setGalleryPhotos] = useState<UserPhoto[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<UserPhoto | null>(null);
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto | null>(null);

  useEffect(() => {
    // Set the initial photos when the component mounts
    setGalleryPhotos(photos);
  }, [photos]);

  const openPhotoModal = useCallback((photo: UserPhoto) => {
    setSelectedPhoto(photo);
  }, []);

  const closePhotoModal = useCallback(() => {
    setSelectedPhoto(null);
  }, []);

  const handleDeletePhoto = useCallback(() => {
    if (selectedPhoto) {
      // Delete the selected photo from the gallery
      deletePhoto(selectedPhoto);
      // Update the state without the deleted photo
      setGalleryPhotos((prevPhotos) => prevPhotos.filter((p) => p !== selectedPhoto));
      // Close the modal
      closePhotoModal();
    }
  }, [deletePhoto, selectedPhoto, closePhotoModal]);

  const handleTakeNewPhoto = useCallback(async () => {
    // Take a new photo
    const newPhoto = await takePhoto();

    // If a new photo is obtained
    if (newPhoto) {
      // Delete the previous selected photo from the gallery only if there is a selected photo
      if (selectedPhoto) {
        deletePhoto(selectedPhoto);
      }

      // Update the state with the new photo
      setGalleryPhotos((prevPhotos) => [...prevPhotos, newPhoto]);

      // Close the modal
      closePhotoModal();
    }
  }, [takePhoto, selectedPhoto, deletePhoto, closePhotoModal]);

  const handlePhotoToDelete = useCallback((photo: UserPhoto) => {
    setPhotoToDelete(photo);
  }, []);

  const handleCancelDelete = useCallback(() => {
    setPhotoToDelete(null);
  }, []);

  const handleConfirmDelete = useCallback(() => {
    if (photoToDelete) {
      deletePhoto(photoToDelete);
      setPhotoToDelete(null);
    }
  }, [deletePhoto, photoToDelete]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="grid-container">
          {galleryPhotos.map((photo, index) => (
            <IonImg
              key={index}
              src={photo.webviewPath}
              onClick={() => openPhotoModal(photo)}
              className="gallery-image"
            />
          ))}
        </div>

        <IonActionSheet
          isOpen={!!photoToDelete}
          buttons={[
            {
              text: 'Delete',
              role: 'destructive',
              icon: trash,
              handler: handleConfirmDelete,
            },
            {
              text: 'Cancel',
              icon: close,
              role: 'cancel',
              handler: handleCancelDelete,
            },
          ]}
          onDidDismiss={handleCancelDelete}
        />

        <IonModal isOpen={!!selectedPhoto} onDidDismiss={closePhotoModal}>
          <IonContent>
            {selectedPhoto && <IonImg src={selectedPhoto.webviewPath} className="modal-image" />}
            <IonButton expand="full" color="danger" onClick={handleDeletePhoto}>
              <IonIcon icon={trash} slot="start" />
              Delete Photo
            </IonButton>
            <IonButton expand="full" color="primary" onClick={handleTakeNewPhoto}>
              <IonIcon icon={camera} slot="start" />
              Take New Photo
            </IonButton>
            <IonButton expand="full" onClick={closePhotoModal}>
              <IonIcon icon={close} slot="start" />
              Close
            </IonButton>
          </IonContent>
        </IonModal>

        <IonButton expand="full" color="primary" onClick={handleTakeNewPhoto}>
          <IonIcon icon={camera} slot="start" />
          Take Photo
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;