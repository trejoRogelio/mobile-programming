<<<<<<< Updated upstream
import './Tab2.css';
=======
import '../pages/Tab2.css';
>>>>>>> Stashed changes
import { camera } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon
} from '@ionic/react';
import { usePhotoGallery } from '../hooks/usePhotoGallery';


const Tab2: React.FC = () => {
<<<<<<< Updated upstream
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();
=======
  const { photos, takePhoto } = usePhotoGallery();
>>>>>>> Stashed changes
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Camera</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

<<<<<<< Updated upstream
export default Tab2;
=======
export default Tab2;
>>>>>>> Stashed changes
