import React, { useState } from 'react';
import { IonContent, IonHeader, IonButton, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet } from '@ionic/react';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import RandomImage from '../components/RandomImage'

import './Tab1.css';

const Tab1: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Random Photo</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <RandomImage />
        </IonContent>
      </IonPage>
    );
  };
  
  export default Tab1;
  