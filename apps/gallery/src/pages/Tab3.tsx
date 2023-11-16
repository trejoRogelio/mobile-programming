import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonLoading,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Tab3.css';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import { NotFoundPage } from '../components/NotFoundPage';
import { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { UserPhoto } from '../types';

type Tab3Props = { photos: UserPhoto[]; loadingPh: boolean };

const Tab3 = ({ photos, loadingPh }: Tab3Props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Galería</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {loadingPh ? (
          <IonLoading
            message='Dismissing after 3 seconds...'
            spinner={'bubbles'}
            animated
          />
        ) : photos.length <= 0 ? (
          <NotFoundPage text='No hay Fotos :(' />
        ) : (
          <IonGrid>
            <IonRow>
              {photos.map((photo, index) => (
                <IonCol
                  size='6'
                  key={photo.filepath}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '1px solid #50a8ff',
                  }}>
                  <IonImg src={photo.webviewPath} />
                  <p>Id: {photo.id}</p>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
