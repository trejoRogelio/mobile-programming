
import React from 'react';
import { IonCol, IonImg, IonButton, IonAlert } from '@ionic/react';
import { UserPhoto } from '../hooks/usePhotoGallery';

interface GalleryComponentProps {
  photos: UserPhoto[];
  onDelete: (photo: UserPhoto) => void;
  onRetake: (photo: UserPhoto) => void;
  onPhotoClick: (photo: UserPhoto) => void;
}

const GalleryComponent: React.FC<GalleryComponentProps> = ({ photos, onDelete, onRetake, onPhotoClick }) => {
  const [showAlert, setShowAlert] = React.useState(false);
  const [photoToDelete, setPhotoToDelete] = React.useState<UserPhoto | undefined>(undefined);

  const handleDeleteClick = (photo: UserPhoto) => {
    setPhotoToDelete(photo);
    setShowAlert(true);
  };

  const handleDeleteConfirmed = () => {
    if (photoToDelete) {
      onDelete(photoToDelete);
    }
    setShowAlert(false);
  };

  const handleDeleteCanceled = () => {
    setPhotoToDelete(undefined);
    setShowAlert(false);
  };

  return (
    <IonCol>
      {photos.map((photo) => (
        <IonCol key={photo.id}>
          <IonImg src={photo.webviewPath} onClick={() => onPhotoClick(photo)} />
          <IonButton onClick={() => handleDeleteClick(photo)}>Eliminar</IonButton>
        </IonCol>
      ))}

      {/* Alert for confirming photo deletion */}
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={handleDeleteCanceled}
        header={'Eliminar Foto'}
        message={'¿Estás seguro de que deseas eliminar esta foto?'}
        buttons={[
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: handleDeleteCanceled,
          },
          {
            text: 'Eliminar',
            handler: handleDeleteConfirmed,
          },
        ]}
      />
    </IonCol>
  );
};

export default GalleryComponent;
