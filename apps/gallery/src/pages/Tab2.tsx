import { camera, trash, close } from 'ionicons/icons';
import {
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonTitle,
  IonToast,
  IonToolbar,
} from '@ionic/react';
import './Tab2.css';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import { TextBoxCustom } from '../components/TextBoxCustom';
import { useState } from 'react';
import { UserPhoto } from '../types';
type Tab2Props = { takePhoto: () => Promise<void>; photos?: UserPhoto[] };

const Tab2 = ({ takePhoto, photos }: Tab2Props) => {
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cámara Fotográfica</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonFab vertical='center' horizontal='center' slot='fixed'>
          <TextBoxCustom text={`Tomate una foto!!!`} />
        </IonFab>
        <IonImg
          style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
          alt='Tomate una foto!!!'
          src='https://w0.peakpx.com/wallpaper/631/362/HD-wallpaper-cameras-dslr-godox-sony-dark-black-camera-indoor.jpg'
        />
        <IonFab vertical='bottom' horizontal='center' slot='fixed'>
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
