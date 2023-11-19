import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import AbrirMenu from '../components/AbrirMenu';
import { UserPhoto } from '../hooks/usePhotoGallery';

interface GaleriaProps {
  photos: UserPhoto[];
  deletePhoto: (photo: UserPhoto) => void;
  takePhoto: (photo: UserPhoto) => Promise<void>;
}

const Galeria: React.FC<GaleriaProps> = ({ photos, deletePhoto, takePhoto }) => {
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto | undefined>(undefined);

  const handleDeletePhoto = () => {
    if (photoToDelete) {
      deletePhoto(photoToDelete);
      setPhotoToDelete(undefined);
    }
  };

  const handleTakePhoto = () => {
    if (photoToDelete) {
      takePhoto(photoToDelete);
      setPhotoToDelete(undefined);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Galeria</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        <AbrirMenu
          isOpen={!!photoToDelete}
          photoToDelete={photoToDelete}
          deletePhoto={handleDeletePhoto}
          takePhoto={handleTakePhoto}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Galeria;
