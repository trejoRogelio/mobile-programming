import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import './Home.css';
import { Link } from 'react-router-dom';
import { images } from 'ionicons/icons';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class='ion-text-center'>HOME</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class='ion-text-center'>
        <IonHeader>
          <IonTitle  class='ion-text-center ion-padding'>Select an option</IonTitle>
        </IonHeader>


        <Link to='/takepicture'>
          <IonButton>Take Picture</IonButton>
        </Link>

        <Link to='/gallery'>
          <IonButton>
            <IonIcon icon={images} />
            <IonLabel>Photos</IonLabel>
          </IonButton>
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default Home;
