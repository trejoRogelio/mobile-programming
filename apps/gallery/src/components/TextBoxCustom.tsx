import { IonText } from '@ionic/react';

type TxtProps = {
  text: string;
};
export const TextBoxCustom = ({ text }: TxtProps) => {
  return (
    <IonText color='primary'>
      <h1
        style={{
          padding: 25,
          borderColor: 'white',
          borderWidth: 10,
          borderStyle: 'solid',
          color: 'white',
        }}>
        {text}
      </h1>
    </IonText>
  );
};
