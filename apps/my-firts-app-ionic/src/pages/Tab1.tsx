// Importamos las dependencias necesarias de React e Ionic
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/react';

// Importamos la hoja de estilos específica para Tab1
import './Tab1.css';

// Importamos la imagen del logo desde el directorio de imágenes
import logo from "../images/logo.png"; // Asegúrate de tener la imagen en tu proyecto

// Importamos el componente Home desde el directorio de componentes
import { Home } from '../components/Home';

// Componente para la primera pestaña (Tab1)
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        {/* Barra de herramientas con el título de la página */}
        <IonToolbar>
          <IonTitle>Galeria de Fotos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        {/* Contenido de la página */}
        <div className="logo-content">
          {/* Encabezado con el título principal */}
          <h1>Galeria de Fotos</h1>

          {/* Imagen del logo */}
          <IonImg src={logo} alt="logo" className="logo" />

          {/* Párrafo de descripción */}
          <p>
            Aplicación funcional con el Framework de Ionic
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

// Exportamos el componente para su uso en otras partes de la aplicación
export default Tab1;
