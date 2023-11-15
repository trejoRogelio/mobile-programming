import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import '../Home.css';
import { Link } from 'react-router-dom';
import { usePhotoGallery } from '../../hooks/UserPhotoGallery';

const GalleryTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>GALLERY TAB</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>GALLERY</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size='6' key={photo.filepath}>
                <IonImg src={photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid> */}
        {/* Boton de regresar */}
        <Link to='/'>
          <IonButton>Go back</IonButton>
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default GalleryTab;
