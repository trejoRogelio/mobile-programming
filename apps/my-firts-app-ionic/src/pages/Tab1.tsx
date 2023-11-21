// Tab1.tsx
import React from 'react';
import { IonButton, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { camera, trash, close, create } from 'ionicons/icons';

import { usePhotoGallery } from '../hooks/usePhotoGallery';
import TakePhotoButton from '../components/TakePhotoButton';

const Tab1: React.FC = () => {
  const { takePhoto } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Take Photo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <TakePhotoButton onClick={takePhoto}/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

