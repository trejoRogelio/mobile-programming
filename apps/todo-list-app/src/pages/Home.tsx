import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonInput,
  IonAlert,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonIcon,
} from '@ionic/react';

import { trash, addCircle } from 'ionicons/icons';

import { type FormEvent } from 'react';

import './Home.css';
import { useState } from 'react';

type Todo = {
  id: number;
  todo: string;
  done: boolean;
};

const Home: React.FC = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<Todo[]>([
    { id: new Date().getTime(), todo: 'I have to run', done: true },
  ]);

  const handdleInput = (e: Event): void => {
    const value = (e.target as HTMLIonInputElement).value;
    setTodo(value as string);
  };

  const handleClick = () => {
    setTodos((allTodos) => [
      ...allTodos,
      {
        id: new Date().getTime(),
        done: false,
        todo,
      },
    ]);
    setTodo('');
  };

  const handleDelete = (id: number) => {
    setTodos((allTasks) => {
      const filteredTasks = allTasks.filter((item) => item.id !== id);
      return filteredTasks;
    });
  };

  const handleDeleteAllSelected = () => {
    setTodos((allTasks) => {
      const filteredTasks = allTasks.filter((task) => !task.done);
      return filteredTasks;
    });
  };

  const handdleClickCheckBox = (event: FormEvent, id: number) => {
    const value = (event.target as HTMLIonCheckboxElement).checked;
    const findTodoindex = todos.findIndex((i) => i.id === id)!;
    setTodos((allTodos) => {
      allTodos[findTodoindex].done = value;
      return [...allTodos];
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonInput
                type="text"
                placeholder="Write a todo"
                onIonInput={handdleInput}
                value={todo}
              />
            </IonCol>
            <IonCol>
              <IonButton onIonFocus={handleClick}>
                <IonIcon icon={addCircle} />
              </IonButton>
              <IonButton id="delete-all">
                <IonIcon icon={trash} />
              </IonButton>
              <IonAlert
                trigger={`delete-all`}
                header="confirm"
                message="you will delete this item"
                buttons={[
                  { role: 'cancel', text: 'Cancel' },
                  {
                    role: 'confirm',
                    text: 'Confirm',
                    handler: handleDeleteAllSelected,
                  },
                ]}
              />
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList>
          {todos.map((item) => (
            <IonItem key={item.id}>
              <IonCheckbox
                onClick={(e) => handdleClickCheckBox(e, item.id)}
                checked={item.done}
              >
                <IonLabel>{item.todo}</IonLabel>{' '}
              </IonCheckbox>
              <IonButton
                id={`delete-item-${item.id}`}
                style={{ margin: 10 }}
                color={'danger'}
              >
                Delete
              </IonButton>
              <IonAlert
                trigger={`delete-item-${item.id}`}
                header="confirm"
                message="you will delete this item"
                buttons={[
                  { role: 'cancel', text: 'Cancel' },
                  {
                    role: 'confirm',
                    text: 'Confirm',
                    handler: () => {
                      handleDelete(item.id);
                    },
                  },
                ]}
              />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
