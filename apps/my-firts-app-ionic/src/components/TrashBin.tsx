
import React from 'react';
import { IonCol, IonImg } from '@ionic/react';
import { UserPhoto } from '../hooks/usePhotoGallery';

interface TrashBinProps {
  deletedPhotos: UserPhoto[];
  onRestore: (photo: UserPhoto) => void;
}

const TrashBin: React.FC<TrashBinProps> = ({ deletedPhotos, onRestore }) => {
  return (
    <IonCol>
    
      {deletedPhotos.map((photo) => (
        <IonCol key={photo.id}>
          <IonImg src={photo.webviewPath} />
          <button onClick={() => onRestore(photo)}>Restaurar</button>
        </IonCol>
      ))}
    </IonCol>
  );
};

export default TrashBin;
