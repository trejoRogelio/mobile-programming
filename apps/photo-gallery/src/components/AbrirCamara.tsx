
import { IonPage, IonHeader, IonToolbar, IonTitle, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { camera } from 'ionicons/icons';
import { UserPhoto, usePhotoGallery } from '../hooks/usePhotoGallery';

type AbrirCamaraProps = {
  takePhoto: (photo?: UserPhoto | undefined) => Promise<void>;
};

const AbrirCamara: React.FC<AbrirCamaraProps> = ({ takePhoto }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Galeria</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonFab vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton onClick={() => takePhoto()}>
          <IonIcon icon={camera} />
        </IonFabButton>
      </IonFab>
    </IonPage>
  );
};

export default AbrirCamara;
