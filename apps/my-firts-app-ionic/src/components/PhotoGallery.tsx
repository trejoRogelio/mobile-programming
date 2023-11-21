// PhotoGallery.tsx

import React from 'react';
import { IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import './PhotoGallery.css'; // Importa el archivo de estilos
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';


interface PhotoGridProps {
  photos: UserPhoto[];
  onPhotoClick: (photo: UserPhoto) => void;
}

const PhotoGallery: React.FC<PhotoGridProps> = ({ photos, onPhotoClick }) => (
  <IonGrid className="photo-grid">
    <IonRow>
      {photos.map((photo, index) => (
        <IonCol size="6" key={index} className="photo-col">
          <IonImg
            onClick={() => onPhotoClick(photo)}
            src={photo.webviewPath}
            className="photo-img"
          />
        </IonCol>
      ))}
    </IonRow>
  </IonGrid>
);

export default PhotoGallery;
