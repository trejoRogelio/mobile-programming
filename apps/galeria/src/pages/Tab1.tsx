import {
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonContent,
  } from '@ionic/react';
  import CameraContainer from '../components/CameraContainer';
  import './Tab1.css';
  
  interface Tab1Props {
    takePhoto: ()=> void;
  }
  const Tab1: React.FC<Tab1Props> = ({takePhoto}: Tab1Props) => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Camera</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Toma la foto:D</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent class="ion-padding">
            <CameraContainer name="Take a photo" takePhoto={takePhoto} />
          </IonContent>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Tab1;