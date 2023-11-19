// GalleryComponent.tsx
import React, { useState } from 'react';
import { IonCol, IonImg, IonButton, IonIcon, IonAlert } from '@ionic/react';
import { trash, refresh } from 'ionicons/icons';
import { UserPhoto } from '../hooks/usePhotoGallery';

interface GalleryComponentProps {
  photos: UserPhoto[];
  onDelete: (photo: UserPhoto) => void;
  onRetake: (photo: UserPhoto) => void;
  onRestore: (photo: UserPhoto) => void;
  onPhotoClick: (photo: UserPhoto) => void;
}

const GalleryComponent: React.FC<GalleryComponentProps> = ({
  photos,
  onDelete,
  onRetake,
  onRestore,
  onPhotoClick,
}) => {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedPhotoToDelete, setSelectedPhotoToDelete] = useState<UserPhoto | null>(null);

  const handleDelete = (photo: UserPhoto) => {
    setSelectedPhotoToDelete(photo);
    setShowDeleteAlert(true);
  };

  const handleDeleteConfirmed = () => {
    if (selectedPhotoToDelete) {
      onDelete(selectedPhotoToDelete);
    }
    setShowDeleteAlert(false);
  };

  const handleDeleteCancelled = () => {
    setSelectedPhotoToDelete(null);
    setShowDeleteAlert(false);
  };

  return (
    <IonCol>
      {photos.map((photo) => (
        <IonCol key={photo.id}>
          <IonImg src={photo.webviewPath} onClick={() => onPhotoClick(photo)} />

 

          <IonButton onClick={() => handleDelete(photo)}>
            <IonIcon icon={trash} />
            Eliminar
          </IonButton>

          <IonAlert
            isOpen={showDeleteAlert}
            onDidDismiss={handleDeleteCancelled}
            header={'Eliminar Foto'}
            message={'¿Estás seguro de que quieres eliminar esta foto?'}
            buttons={[
              {
                text: 'Cancelar',
                role: 'cancel',
                handler: handleDeleteCancelled,
              },
              {
                text: 'Eliminar',
                handler: handleDeleteConfirmed,
              },
            ]}
          />
        </IonCol>
      ))}
    </IonCol>
  );
};

export default GalleryComponent;
