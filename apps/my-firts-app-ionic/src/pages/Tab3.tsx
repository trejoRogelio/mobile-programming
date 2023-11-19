// Tab3.tsx
import React, { useState, useEffect, useCallback } from 'react';
import {
  IonContent,
  IonPage,
  IonImg,
  IonButton,
  IonIcon,
  IonButtons,
  IonBackButton,
} from '@ionic/react';
import { useLocation } from 'react-router-dom';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import { camera, trash } from 'ionicons/icons';

const Tab3: React.FC = () => {
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();
  const [galleryPhotos, setGalleryPhotos] = useState<UserPhoto[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<UserPhoto | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Setear las fotos iniciales cuando el componente monta
    setGalleryPhotos(photos);

    // Si hay una nueva foto desde Tab2, agrégala a la galería
    const newPhotoFromTab2 = (location.state as any)?.newPhoto as UserPhoto;
    if (newPhotoFromTab2) {
      setGalleryPhotos((prevPhotos) => [...prevPhotos, newPhotoFromTab2]);
    }
  }, [photos, location.state]);

  const openPhotoModal = useCallback((photo: UserPhoto) => {
    setSelectedPhoto(photo);
  }, []);

  const closePhotoModal = useCallback(() => {
    setSelectedPhoto(null);
  }, []);

  const handleDeletePhoto = useCallback(
    (photoToDelete: UserPhoto) => {
      deletePhoto(photoToDelete);
      setGalleryPhotos((prevPhotos) =>
        prevPhotos.filter((p) => p !== photoToDelete)
      );
      closePhotoModal();
    },
    [deletePhoto, closePhotoModal]
  );

  const handleTakeNewPhoto = useCallback(async () => {
    const newPhoto = await takePhoto();
    if (newPhoto !== undefined) {
      setGalleryPhotos((prevPhotos) => [...prevPhotos, newPhoto]);
      closePhotoModal();
    }
  }, [takePhoto, setGalleryPhotos, closePhotoModal]);

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <h2>Galeria de fotos</h2>
        <div className="ion-margin-top">
          <div className="ion-grid">
            {galleryPhotos.map((photo, index) => (
              <div key={index} className="ion-col">
                <IonImg
                  src={photo.webviewPath}
                  onClick={() => openPhotoModal(photo)}
                />
                <IonButton
                  onClick={() => handleDeletePhoto(photo)}
                  color="danger"
                  fill="clear"
                >
                  <IonIcon icon={trash} />
                </IonButton>
              </div>
            ))}
          </div>
        </div>
        <IonButton expand="full" onClick={handleTakeNewPhoto}>
          <IonIcon icon={camera} slot="start" />
          Agregar nueva fotografía
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
