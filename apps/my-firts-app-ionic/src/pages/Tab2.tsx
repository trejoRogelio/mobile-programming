
import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonFab, IonFabButton } from '@ionic/react';
import CameraIcon from '../components/CameraIcon';
import MsjPop from '../components/MsjPop';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import './tabs.css';

const Tab2: React.FC = () => {
  const { takePhoto } = usePhotoGallery();
  const [showPopup, setShowPopup] = useState(false);

  const handleTakePhoto = () => {
    takePhoto();
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cámara</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={handleTakePhoto}>

            <CameraIcon onClick={takePhoto} />
          </IonFabButton>
        </IonFab>
        <MsjPop
          isOpen={showPopup}
          message="Foto tomada con éxito"
          onClose={handleClosePopup}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
