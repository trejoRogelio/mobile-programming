import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonImg } from '@ionic/react';
import { camera } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
  const { takePhoto } = usePhotoGallery();
  const [latestPhoto, setLatestPhoto] = useState<UserPhoto | undefined>();

  const handleTakePhoto = async () => {
    const newPhoto = await takePhoto();
    setLatestPhoto(newPhoto);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Take Photo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {latestPhoto && (
          <IonImg src={latestPhoto.webviewPath} />
        )}

        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={handleTakePhoto}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
