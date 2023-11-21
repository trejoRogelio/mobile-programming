import React, { useState, useEffect, useCallback } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonModal,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import './Tab3.css';
import { trashBin, arrowBack, reloadCircle } from 'ionicons/icons';

const Tab3: React.FC = () => {
  // Obtenemos funciones y datos relacionados con la galería de fotos mediante un custom hook
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();

  // Estado local para almacenar las fotos de la galería que se mostrarán en la interfaz
  const [galleryPhotos, setGalleryPhotos] = useState<UserPhoto[]>([]);

  // Estado local para la foto seleccionada en la modal
  const [selectedPhoto, setSelectedPhoto] = useState<UserPhoto | null>(null);

  // Estado local para controlar si se está capturando una nueva foto
  const [isTakingPhoto, setIsTakingPhoto] = useState(false);

  // Efecto para actualizar el estado local cuando cambian las fotos disponibles
  useEffect(() => {
    // Seteamos las fotos iniciales cuando el componente se monta
    setGalleryPhotos(photos);
  }, [photos]);

  // Función para manejar una nueva foto y actualizar el estado local
  const handleNewPhoto = (newPhoto: UserPhoto) => {
    // Actualizamos el estado con la nueva foto
    setGalleryPhotos((prevPhotos) => [...prevPhotos, newPhoto]);
  };

  // Función para abrir la modal y mostrar una foto específica
  const openPhotoModal = useCallback((photo: UserPhoto) => {
    setSelectedPhoto(photo);
  }, []);

  // Función para cerrar la modal y limpiar la foto seleccionada
  const closePhotoModal = useCallback(() => {
    setSelectedPhoto(null);
  }, []);

  // Función para manejar la eliminación de una foto
  const handleDeletePhoto = useCallback(() => {
    if (selectedPhoto) {
      // Eliminamos la foto de la galería
      deletePhoto(selectedPhoto);
      // Actualizamos el estado sin la foto eliminada
      setGalleryPhotos((prevPhotos) => prevPhotos.filter((p) => p !== selectedPhoto));
      // Cerramos la modal
      closePhotoModal();
    }
  }, [deletePhoto, selectedPhoto, closePhotoModal]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Galeria</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="grid-container">
          {galleryPhotos.map((photo, index) => (
            // Mostramos las fotos de la galería en la interfaz
            <IonImg key={index} src={photo.webviewPath} onClick={() => openPhotoModal(photo)} />
          ))}
        </div>

        {/* Modal para mostrar una foto seleccionada */}
        <IonModal isOpen={!!selectedPhoto} onDidDismiss={closePhotoModal}>
          <IonContent fullscreen className="boton-content">

            {/* Mostramos la foto seleccionada en la modal */}
            <IonImg src={selectedPhoto?.webviewPath} />
            
            {/* Botones en la modal */}
            <IonButton onClick={handleDeletePhoto}>
              <IonIcon aria-hidden="true" icon={trashBin} />
            </IonButton>
            <IonButton onClick={closePhotoModal}>
              <IonIcon aria-hidden="true" icon={arrowBack} />
            </IonButton>
            <IonButton onClick={() => {
              // Capturamos una nueva foto y la eliminamos
              takePhoto();
              handleDeletePhoto();
            }}>
              <IonIcon aria-hidden="true" icon={reloadCircle} />
            </IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
