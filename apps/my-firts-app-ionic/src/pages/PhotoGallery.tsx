// PhotoGallery.tsx
import React from 'react';
import { IonCard, IonCardContent } from '@ionic/react';
import BotonComponent from '../components/BotonComponent';
import EncabezadoComponent from '../components/EncabezadoComponent';
import ListaComponent from '../components/ListaComponent';
import { useAppContext } from './AppContext';

const PhotoGallery: React.FC = () => {
  const { state, dispatch } = useAppContext();

  const handleAddPhoto = () => {
    const newPhoto = { id: String(Date.now()), caption: 'Nueva foto' };
    dispatch({ type: 'ADD_PHOTO', payload: newPhoto });
  };

  const handleDeletePhoto = (id: string) => {
    dispatch({ type: 'DELETE_PHOTO', payload: id });
  };

  return (
    <IonCard>
      <EncabezadoComponent title="Photo Gallery" />
      <IonCardContent>
        <ListaComponent items={state.photos.map((photo) => photo.caption)} />
        <BotonComponent onClick={handleAddPhoto} label="Agregar Foto" />
      </IonCardContent>
    </IonCard>
  );
};

export default PhotoGallery;
