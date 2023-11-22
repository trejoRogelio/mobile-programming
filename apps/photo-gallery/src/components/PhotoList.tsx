// Photos.tsx
import React, { useState } from 'react';
import { IonList, IonItem, IonImg, IonButton } from '@ionic/react';
import AddPhotoForm from '../components/AddPhotoForm';

interface Photo {
  id: number;
  url: string;
}

interface PhotosProps {
  photos: Photo[];
  onDelete: (id: number) => void;
  onAddPhoto: (url: string) => void;
}

const Photos: React.FC<PhotosProps> = ({ photos, onDelete, onAddPhoto }) => {
  return (
    <>
      <IonList>
        {photos.map((photo) => (
          <IonItem key={photo.id}>
            <IonImg src={photo.url} />
            <IonButton onClick={() => onDelete(photo.id)}>Delete</IonButton>
          </IonItem>
        ))}
      </IonList>

      <AddPhotoForm onAddPhoto={onAddPhoto} />
    </>
  );
};

export default Photos;
