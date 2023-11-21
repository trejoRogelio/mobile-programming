import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet } from '@ionic/react';
import { camera, trash, close } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import Title from '../components/Title';
import Instructions from '../components/Instructions';
import Student from '../components/Student';

interface Tab2Props  {
  deletePhoto: (photo: UserPhoto) => Promise<void>;
  photos: UserPhoto[];
  takePhoto: () => Promise<void>;
}

const Tab2: React.FC<Tab2Props> = ({ deletePhoto, photos, takePhoto }) => {
  //const { deletePhoto, photos, takePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cámara</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Cámara</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
              <IonCol size="12">
                <Title text="Aplicacion de cámara perrona" />
              </IonCol>
          </IonRow>
          <IonRow>
              <IonCol size="12">
                <Instructions text="Instucciones: Toma las fotografías desde esta tab, puedes observarlas, borrarlas o actualizarlas desde la segunda tab" />
              </IonCol>
          </IonRow>
          <IonRow>
              <IonCol size="12">
                <Student text="José Miguel Escalera Rubalcava UP200667" />
              </IonCol>
          </IonRow>
        </IonGrid>

        

        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
