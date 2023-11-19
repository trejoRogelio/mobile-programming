
import React, { useState } from 'react';
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
import { camera } from 'ionicons/icons';
import './Tab1.css';
import { UserPhoto } from '../hooks/usePhotoGallery';

interface Tab1Props {
  deletePhoto: (photo: UserPhoto) => Promise<void>;
  photos: UserPhoto[];
  takePhoto: () => Promise<void>;
}

const Tab1: React.FC<Tab1Props> = ({ takePhoto }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<UserPhoto | null>(null);

  const handlePhotoClick = (photo: UserPhoto) => {
    setSelectedPhoto(photo);
  };

  const handleModalClose = () => {
    setSelectedPhoto(null);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Make a picture</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonContent>
          <IonFab vertical="bottom" horizontal="center" slot="fixed">
            <IonFabButton onClick={() => takePhoto()}>
              <IonIcon icon={camera}></IonIcon>
            </IonFabButton>
          </IonFab>
        </IonContent>

        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;