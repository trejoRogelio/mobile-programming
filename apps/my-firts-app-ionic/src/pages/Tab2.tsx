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
  IonIcon,
  IonActionSheet,
  IonModal,
  IonButton,
} from '@ionic/react';
import { close, camera } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';

interface Tab2Props {
  deletePhoto: (photo: UserPhoto) => Promise<void>;
  photos: UserPhoto[];
  takePhoto: () => Promise<void>;
}

const Tab2: React.FC<Tab2Props> = ({ deletePhoto, photos, takePhoto }) => {
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto | undefined>(undefined);
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<UserPhoto | null>(null);

  const openModal = (photo: UserPhoto) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPhoto(null);
  };

  const handleDeletePhoto = async () => {
    if (photoToDelete) {
      await deletePhoto(photoToDelete);
      setPhotoToDelete(undefined);
    }
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
          style={{
            width: '100%',
            height: '100%',
            border: '1rem solid black'
          }}
        />
        <IonIcon
          icon={close}
          onClick={() => setPhotoToDelete(photo)}
          style={{
            position: 'absolute',
            top: '5px',
            right: '5px',
            color: selectedPhoto === photo ? 'dark' : 'red',
            cursor: 'pointer',
            fontSize: '3rem',
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
              icon: close,
              handler: handleDeletePhoto,
            },
            {
              text: 'Cancel',
              icon: close,
              role: 'cancel',
              handler: () => setPhotoToDelete(undefined),
            },
          ]}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        />

<IonModal isOpen={showModal} onDidDismiss={closeModal}>
  <IonButton
    fill="clear"
    color="dark"
    onClick={closeModal}
    style={{
      position: 'absolute',
      top: '5px',
      left: '5px',
      zIndex: 1,
    }}
  >
    <IonIcon icon={close} />
  </IonButton>
  <IonImg
    src={selectedPhoto?.webviewPath}
    style={{ width: '100%', height: '100%' }}
  />
  <IonButton onClick={closeModal} color="danger">
    Eliminar imagen
  </IonButton>
  <IonButton
    onClick={async () => {
      try {
        await takePhoto();
        await handleDeletePhoto();
        closeModal();
      } catch (error) {
        console.error('Error while changing photo:', error);
      }
    }}
  >
    Tomar de nuevo la foto <IonIcon icon={camera} />
  </IonButton>
</IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
