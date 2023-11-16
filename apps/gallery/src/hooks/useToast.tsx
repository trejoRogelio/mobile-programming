import React from 'react';
import { IonToast } from '@ionic/react';

interface ToastProps {
  isOpen: boolean;
  message: string;
  duration: number;
  onClose: () => void;
}

export const ToastComponent: React.FC<ToastProps> = ({
  isOpen,
  message,
  duration,
  onClose,
}) => {
  return (
    <IonToast
      isOpen={isOpen}
      onDidDismiss={onClose}
      message={message}
      duration={duration}
    />
  );
};
