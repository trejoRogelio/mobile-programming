import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab,
    IonFabButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonTextarea,
    IonImg,
    IonActionSheet,
} from '@ionic/react';
import React, { useState } from 'react';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { camera, trash, close } from 'ionicons/icons';

interface Tab1Props {
    deletePhoto: (photo: UserPhoto) => Promise<void>;
    photos: UserPhoto[];
    takePhoto: () => Promise<void>;
}

const Tab1: React.FC<Tab1Props> = ({ deletePhoto, photos, takePhoto }) => {
    const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Make a picture</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonContent>
                    <IonFab vertical="bottom" horizontal="center" slot="fixed">
                        <IonFabButton onClick={() => takePhoto()}>
                            <IonIcon icon={camera}></IonIcon>
                        </IonFabButton>
                    </IonFab>
                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;