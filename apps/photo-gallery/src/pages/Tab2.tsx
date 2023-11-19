import React from 'react';
import './tab2.css'; // Ajusta la ruta según tu estructura de archivos
import Galeria from '../components/Galeria';
import { UserPhoto } from '../hooks/usePhotoGallery';

type Tab2Props = {
  photos: UserPhoto[];
  deletePhoto: (photo: UserPhoto) => void;
  takePhoto: (photo: UserPhoto) => Promise<void>;
};

const Tab2: React.FC<Tab2Props> = ({ photos, deletePhoto, takePhoto }) => {
  return (
    <div className="tab2-container">
      <Galeria
        photos={photos}
        deletePhoto={deletePhoto}
        takePhoto={takePhoto}
      />
    </div>
  );
};

export default Tab2;
