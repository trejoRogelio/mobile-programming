import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import PhotoEditor from '../components/CameraButton';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Editor de Fotos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Editor de Fotos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <PhotoEditor />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
