import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
} from '@ionic/react';
import { camera, trash, close } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';

// Componente para la segunda pestaña (Tab2)
const Tab2: React.FC = () => {
  // Utilizamos el custom hook usePhotoGallery para acceder a funciones relacionadas con la galería de fotos
  const { takePhoto } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* Título de la página */}
          <IonTitle>Cámara</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Botón flotante para capturar una nueva foto */}
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            {/* Icono de cámara */}
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

// Exportamos el componente para su uso en otras partes de la aplicación
export default Tab2;
