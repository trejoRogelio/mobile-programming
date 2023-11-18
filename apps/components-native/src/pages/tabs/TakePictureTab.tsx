import {
    IonButton,
    IonCol,
    IonContent,
    IonFab,
    IonFabButton,
    IonFooter,
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

const TakePictureTab: React.FC = ({ takePhoto }: any) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle class="ion-text-center">Picture Tab</IonTitle>
                </IonToolbar>
                <IonToolbar class="ion-text-center">
                    <Link to="/">
                        <IonButton>Go back</IonButton>
                    </Link>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen class="ion-padding">
                <IonRow class="ion-justify-content-center ion-align-items-center">
                    Remember to allow access to the camera component in order to
                    take pictures{' '}
                </IonRow>
            </IonContent>
            <IonFooter>
                <IonToolbar class="ion-padding">
                    <IonRow class="ion-justify-content-center">
                        <IonFabButton onClick={() => takePhoto()}>
                            <IonIcon icon={camera}></IonIcon>
                        </IonFabButton>
                    </IonRow>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default TakePictureTab;
