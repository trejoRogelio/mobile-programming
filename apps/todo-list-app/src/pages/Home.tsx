import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonInput, IonAlert, IonList, IonItem, IonLabel, IonCheckbox
} from '@ionic/react';

import { type FormEvent } from 'react';

import './Home.css';
import { useState } from 'react';

type Todo = {
    id: number;
    todo: string;
    done: boolean;
};

const Home: React.FC = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState<Todo[]>([
        { id: new Date().getTime(), todo: "I have to run", done: true }
    ]);

    const handdleInput = (e: FormEvent): void => {
        const value = (e.target as HTMLIonInputElement).value;
        setTodo(value as string);
    }

    const handleClick = () => {
        setTodos((allTodos) => [...allTodos, {
            id: new Date().getTime(),
            done: false,
            todo
        }])
        setTodo("")
    }

    const handdleClickCheckBox = (event: FormEvent, id: number) => {
        const value = (event.target as HTMLIonCheckboxElement).checked;
        const findTodoindex = todos.findIndex((i) => i.id === id)!;
        setTodos((allTodos) => {
            allTodos[findTodoindex].done = value;
            return [...allTodos];
        });
    }

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
                                type='text'
                                placeholder='Write a todo'
                                onInput={handdleInput}
                                value={todo}
                            />
                        </IonCol>
                        <IonCol>
                            <IonButton onClick={handleClick}>Add</IonButton>
                            {/* <IonAlert
                                trigger="button"
                                message={todo}
                                buttons={['OK', 'Nell']}
                            /> */}
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonList>
                    {
                        todos.map((item) => (
                            <IonItem key={item.id}>
                                <IonCheckbox onClick={(e) => handdleClickCheckBox(e, item.id)} checked={item.done}>
                                    <IonLabel>{item.todo}</IonLabel>
                                </IonCheckbox>
                            </IonItem>
                        ))
                    }
                </IonList>
            </IonContent>

        </IonPage>
    );
};

export default Home;
