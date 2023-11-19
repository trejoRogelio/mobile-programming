// Tab1.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import './Tab1.css';
import logo from "../images/logo.png"; // Asegúrate de tener la imagen en tu proyecto
import { Home } from '../components/Home';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Galeria de Fotos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="logo-content">
          <h1>Galeria de Fotos</h1>
          <IonImg src={logo} alt="logo" className="logo" />
          <p>
            Esta aplicaion funciona con el Framework Ionic
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
