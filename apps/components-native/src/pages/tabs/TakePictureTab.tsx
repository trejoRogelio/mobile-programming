import {
  IonButton,
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
  IonToolbar,
} from '@ionic/react';
import '../Home.css';
import { Link } from 'react-router-dom';
import {
  UserPhoto,
  UserPhotoProps,
  usePhotoGallery,
} from '../../hooks/UserPhotoGallery';
import { camera } from 'ionicons/icons';

const TakePictureTab: React.FC = ({ photos, takePhoto }: any) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PICTURE TAB</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonFabButton onClick={() => takePhoto()}>
          <IonIcon icon={camera}></IonIcon>
        </IonFabButton>

        <IonGrid>
          <IonRow>
            {photos.map((photo: UserPhoto) => (
              <IonCol size='6' key={photo.filepath}>
                <IonImg src={photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        <Link to='/'>
          <IonButton>Go back</IonButton>
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default TakePictureTab;
