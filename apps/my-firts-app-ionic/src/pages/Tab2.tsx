import React from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonIcon } from '@ionic/react';
import { camera } from 'ionicons/icons';
import { usePhotoGallery} from '../hooks/usePhotoGallery';
import './Tab2.css';


const Tab2: React.FC = () => {
  const { takePhoto, photos } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="full" color="primary" onClick={() => takePhoto()}>
          <IonIcon icon={camera} slot="start" />
          Take Photo
        </IonButton>

        <IonContent>
          {photos.map((photo, index) => (
            <div key={index} className="photo-container">
              <img src={photo.webviewPath} alt={`photo-${index}`} className="photo" />
            </div>
          ))}
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
