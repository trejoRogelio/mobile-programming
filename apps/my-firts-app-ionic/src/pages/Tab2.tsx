// src/pages/Tab2.tsx
import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon
} from '@ionic/react';
import { camera } from 'ionicons/icons';
import { UserPhoto, usePhotoGallery } from '../hooks/usePhotoGallery';
import './Tab2.css'; // Estilos específicos de Tab2

const Tab2: React.FC = () => {
  const { takePhoto } = usePhotoGallery();
 

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-2xl">Camera View</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()} className="bg-blue-500">
            <IonIcon icon={camera} className="text-white"></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
