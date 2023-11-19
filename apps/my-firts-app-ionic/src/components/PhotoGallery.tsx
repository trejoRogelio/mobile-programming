import React from 'react';
import './PhotoGallery.css';
import { IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';


interface PhotoGridProps {
   photos: UserPhoto[];
   onPhotoClick: (photo: UserPhoto) => void;
}

const PhotoGallery: React.FC<PhotoGridProps> = ({ photos, onPhotoClick }) => (
   <IonGrid>
      <IonRow>
         {photos.map((photo, index) => (
            <IonCol size="6" key={index}>
               <IonImg
                  onClick={() => onPhotoClick(photo)}
                  src={photo.webviewPath}
               />
            </IonCol>
         ))}
      </IonRow>
   </IonGrid>
);

export default PhotoGallery;
