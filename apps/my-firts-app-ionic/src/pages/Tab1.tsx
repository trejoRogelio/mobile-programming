
import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg, IonActionSheet,
} from '@ionic/react';
import { trash, close } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import BotonRefrescar from '../components/BotonRefrescar';
import './tabs.css';

const Tab1: React.FC = () => {
  const { photos, deletePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();

  const showDeleteActionSheet = (photo: UserPhoto) => {
    setPhotoToDelete(photo);
  };

  const hideDeleteActionSheet = () => {
    setPhotoToDelete(undefined);
  };

  const handleDelete = () => {
    if (photoToDelete) {
      deletePhoto(photoToDelete);
      setPhotoToDelete(undefined);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Galeria de Fotos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
            <BotonRefrescar />
          <IonRow>
            {photos.map((photo: UserPhoto, index: number) => (
              <IonCol size="6" key={index}>
                <IonImg
                  onClick={() => showDeleteActionSheet(photo)}
                  src={photo.webviewPath}
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
              handler: handleDelete,
            },
            {
              text: 'Cancel',
              icon: close,
              role: 'cancel',
              handler: hideDeleteActionSheet,
            },
          ]}
          onDidDismiss={hideDeleteActionSheet}
        />

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
