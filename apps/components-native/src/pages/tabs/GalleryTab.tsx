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
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonIcon,
} from '@ionic/react';
import '../Home.css';
import { Link } from 'react-router-dom';
import { UserPhoto, usePhotoGallery } from '../../hooks/UserPhotoGallery';
import { useEffect, useState } from 'react';
import { trashBin } from 'ionicons/icons';

const GalleryTab = ({
    photos,
    deletePhoto,
}: {
    photos: UserPhoto[];
    deletePhoto: any;
}) => {
    if (photos == undefined) return;

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle class="ion-text-center">Gallery tab</IonTitle>
                </IonToolbar>
                <IonToolbar class="ion-text-center">
                    <Link to="/">
                        <IonButton>Go back</IonButton>
                    </Link>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">GALLERY</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonGrid>
                    <IonRow>
                        {photos.map((photo: UserPhoto) => (
                            <IonCol>
                                <IonCard key={photo.filepath}>
                                    <IonCardContent>
                                        <IonCardTitle>
                                            {photo.filepath}
                                        </IonCardTitle>
                                        <IonCol size="6" key={photo.filepath}>
                                            <IonImg src={photo.webviewPath} />
                                        </IonCol>
                                        <IonButton
                                            onClick={() => {
                                                deletePhoto(photo.filepath);
                                            }}
                                        >
                                            <IonIcon icon={trashBin} />
                                        </IonButton>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default GalleryTab;
