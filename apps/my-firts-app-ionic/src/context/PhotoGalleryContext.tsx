// src/context/PhotoGalleryContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface UserPhoto {
  webviewPath: string;
}

export interface PhotoGalleryContextType {
  photos: UserPhoto[];
  setPhotos: React.Dispatch<React.SetStateAction<UserPhoto[]>>;
  takePhoto: () => Promise<UserPhoto>;
  deletePhoto: (photo: UserPhoto) => void;
  setPhotoToDelete: React.Dispatch<React.SetStateAction<UserPhoto | undefined>>;
}

const PhotoGalleryContext = createContext<PhotoGalleryContextType | undefined>(undefined);

export const PhotoGalleryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto | undefined>(undefined);

  const takePhoto = async (): Promise<UserPhoto> => {
    // Implementa la lógica para tomar una foto aquí
    // y devuelve un objeto UserPhoto con la propiedad webviewPath.
    // Por ejemplo:
    const newPhoto: UserPhoto = {
      webviewPath: 'ruta_de_la_nueva_foto',
    };

    setPhotos((prevPhotos) => [...prevPhotos, newPhoto]);
    return newPhoto;
  };

  const deletePhoto = (photo: UserPhoto): void => {
    // Implementa la lógica para eliminar una foto aquí.
    // Por ejemplo:
    setPhotos((prevPhotos) => prevPhotos.filter((p) => p !== photo));
  };

  const contextValue: PhotoGalleryContextType = {
    photos,
    setPhotos,
    takePhoto,
    deletePhoto,
    setPhotoToDelete,
  };

  return <PhotoGalleryContext.Provider value={contextValue}>{children}</PhotoGalleryContext.Provider>;
};

export const usePhotoGallery = () => {
  const context = useContext(PhotoGalleryContext);
  if (!context) {
    throw new Error('usePhotoGallery must be used within a PhotoGalleryProvider');
  }
  return context;
};
