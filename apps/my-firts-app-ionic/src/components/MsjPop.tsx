import React, { useState } from 'react';
import { IonAlert } from '@ionic/react';


interface MsjPopProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

const MsjPop: React.FC<MsjPopProps> = ({ isOpen, message, onClose }) => (
  <IonAlert  
    isOpen={isOpen}
    message={message}
    buttons={['OK']}
    onDidDismiss={onClose}
  />
);

export default MsjPop;
