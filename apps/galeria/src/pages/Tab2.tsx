import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    useIonViewWillEnter,
  } from '@ionic/react';
  import './Tab2.css';
  import { Gallery } from '../components/Gallery';
  import { UserPhoto } from '../types/userPhoto';
  
  interface Tab2Props {
    photos: UserPhoto[];
    resetNewPhotosCounter: () => void;
    deletePhoto: (id: number) => void;
    replacePhoto: (id: number) => void;
  }
  const Tab2: React.FC<Tab2Props> = ({
    photos,
    resetNewPhotosCounter,
    deletePhoto,
    replacePhoto
  }: Tab2Props) => {
    useIonViewWillEnter(() => {
      resetNewPhotosCounter();
    });
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Galería</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Galería</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent class="ion-padding">
            <Gallery photos={photos} deletePhoto={deletePhoto} replacePhoto={replacePhoto}/>
          </IonContent>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Tab2;