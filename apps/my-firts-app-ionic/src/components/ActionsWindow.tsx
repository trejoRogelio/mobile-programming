import React from 'react';
import { IonActionSheet } from '@ionic/react';
import './ActionsWindow.css';
import { trash, create, close } from 'ionicons/icons';

interface PhotoActionSheetProps {
   isOpen: boolean;
   onDelete: () => void;
   onEdit: () => void;
   onCancel: () => void;
}

const ActionsWindow: React.FC<PhotoActionSheetProps> = ({ isOpen, onDelete, onEdit, onCancel }) => (
   <IonActionSheet
      isOpen={isOpen}
      buttons={[
         { text: 'Delete', role: 'destructive', icon: trash, handler: onDelete },
         { text: 'Edit', icon: create, handler: onEdit },
         { text: 'Cancel', icon: close, role: 'cancel', handler: onCancel },
      ]}
      onDidDismiss={onCancel}
   />
);

export default ActionsWindow;
