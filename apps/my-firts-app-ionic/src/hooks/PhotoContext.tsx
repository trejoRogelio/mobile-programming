import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
  date: string;
}

interface PhotoContextProps {
  photos: UserPhoto[];
  addPhoto: (newPhoto: UserPhoto) => void;
  deletePhoto: (photo: UserPhoto) => void;
  takePhoto: () => void;
}

interface PhotoProviderProps {
  children: ReactNode;
}

const PhotoContext = createContext<PhotoContextProps | undefined>(undefined);

export const PhotoProvider: React.FC<PhotoProviderProps> = ({ children }) => {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  const addPhoto = (newPhoto: UserPhoto) => {
    setPhotos((prevPhotos) => [...prevPhotos, newPhoto]);
  };

  const deletePhoto = async (photo: UserPhoto) => {
    try {
      await Filesystem.deleteFile({
        path: photo.filepath,
        directory: Directory.Data,
      });


      setPhotos((prevPhotos) => prevPhotos.filter((p) => p.filepath !== photo.filepath));
    } catch (error) {
      console.error('Error al eliminar la foto:', error);
    }
  };

  const takePhoto = async () => {
    try {

      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,
      });

      const fileName = new Date().getTime() + '.jpeg';
      const savedFileImage = await savePicture(photo, fileName);

      savedFileImage.date = new Date().toISOString();

      addPhoto(savedFileImage);
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  };

  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    const base64Data = await base64FromPath(photo.webPath!);
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });
  
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
      date: new Date().toISOString(),
    };
  };

  const base64FromPath = async (path: string): Promise<string> => {
    const response = await fetch(path);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject('La función no devolvió una cadena');
        }
      };
      reader.readAsDataURL(blob);
    });
  };

  return (
    <PhotoContext.Provider value={{ photos, addPhoto, deletePhoto, takePhoto }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotoContext = (): PhotoContextProps => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhotoContext debe ser utilizado dentro de un PhotoProvider');
  }
  return context;
};
