import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonImg } from '@ionic/react';
import { Camera, CameraResultType } from '@capacitor/camera';

const CameraPage: React.FC = () => {
  const [photo, setPhoto] = useState<any>(null);

  const takePicture = async () => {
    try {
      const cameraResult = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        quality: 90,
        allowEditing: false
      });

      setPhoto(cameraResult.webPath);
    } catch (error) {
      console.error("Error taking picture:", error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center text-xl font-semibold">Cámara</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding text-center">
        <IonButton className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={takePicture}>
          Tomar Foto
        </IonButton>
        {photo && <IonImg src={photo} />}
      </IonContent>
    </IonPage>
  );
};

export default CameraPage;