// Tab2.tsx
import React from 'react';
import {
  IonContent,
  IonPage,
  IonFab,
  IonFabButton,
  IonIcon,
} from '@ionic/react';
import { camera } from 'ionicons/icons';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import { useHistory } from 'react-router-dom';

const Tab2: React.FC = () => {
  const { takePhoto } = usePhotoGallery();
  const history = useHistory();

  const handleTakePhoto = async () => {
    const newPhoto = await takePhoto();
    if (newPhoto !== undefined) {
      // Navegar a la ruta /tab3 sin pasar la nueva foto como estado
      history.push('/tab3');
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
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
