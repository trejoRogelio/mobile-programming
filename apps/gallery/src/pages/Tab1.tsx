import {
  IonContent,
  IonFab,
  IonHeader,
  IonImg,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Tab1.css';
import { TextBoxCustom } from '../components/TextBoxCustom';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bienvenido a la aplicación más perrona!!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse='condense'> */}
        <IonFab vertical='center' horizontal='center' slot='fixed'>
          <TextBoxCustom text={`Loa's App`} />
        </IonFab>
        <IonImg
          src='https://img.freepik.com/premium-photo/gradient-phone-wallpaper-oil-bubble-water-background_780593-11702.jpg'
          alt='The Wisconsin State Capitol building in Madison, WI at night'
        />
        {/* </IonHeader> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
