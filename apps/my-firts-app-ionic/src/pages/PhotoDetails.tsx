// PhotoFilterButton.tsx
import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { images } from 'ionicons/icons';

interface PhotoFilterButtonProps {
  onFilterChange: (filterType: string) => void;
}

const PhotoFilterButton: React.FC<PhotoFilterButtonProps> = ({ onFilterChange }) => {
  return (
    <IonButton onClick={() => onFilterChange('landscape')}>
      <IonIcon icon={images} />
      Filter Landscapes
    </IonButton>
  );
};

export default PhotoFilterButton;
