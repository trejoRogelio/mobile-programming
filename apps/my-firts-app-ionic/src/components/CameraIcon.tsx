
import React from 'react';
import { IonIcon } from '@ionic/react';
import { camera } from 'ionicons/icons';

interface CameraIconProps {
  onClick: () => void;
}

const CameraIcon: React.FC<CameraIconProps> = ({ onClick }) => (
  <IonIcon icon={camera} size="large" onClick={onClick} style={{ cursor: 'pointer' }} />
);

export default CameraIcon;
