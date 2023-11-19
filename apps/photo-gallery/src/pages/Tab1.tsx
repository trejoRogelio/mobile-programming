import React, { useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet } from '@ionic/react';
import { camera } from 'ionicons/icons';
import { UserPhoto, usePhotoGallery } from '../hooks/usePhotoGallery';
import AbrirCamara from '../components/AbrirCamara';
import './tab1.css';

type Tab2Props = {
  takePhoto: (photo?: UserPhoto | undefined) => Promise<void>;
};

const Tab1: React.FC<Tab2Props> = ({ takePhoto }) => {
  return (
    <AbrirCamara takePhoto={takePhoto} />
  );
};

export default Tab1;

