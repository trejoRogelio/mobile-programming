import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonInput, IonAlert, IonList, IonItem, IonLabel, IonCheckbox, IonIcon
} from '@ionic/react';
import { trash, addCircle } from 'ionicons/icons';

import { useId, type FormEvent } from 'react';

import './Home.css';
import { useState } from 'react';

type Todo = {
    id: number;
    todo: string;
    done: boolean;
};

const Home: React.FC = () => {
    const id = useId();
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState<Todo[]>([
        { id: new Date().getTime(), todo: "I have to run", done: true }
    ]);

    const handdleInput = (e: Event): void => {
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

    const handleDeleteTodo = (id: number) => {
        setTodos((allTodos) => {
            const filterTasks = allTodos.filter((item) => {
                return item.id !== id
            })

            return [...filterTasks];
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
                                onIonInput={handdleInput}
                                value={todo}
                            />
                        </IonCol>
                        <IonCol>
                            <IonButton
                                onClick={handleClick}
                            ><IonIcon icon={addCircle} /></IonButton>
                            <IonButton
                                id={`${id}-delete`}
                                color='danger'
                            ><IonIcon icon={trash} /></IonButton>
                            <IonAlert
                                header='Confirm!'
                                message="Are you sure to delete all Todos??"
                                trigger={`${id}-delete`}
                                buttons={[
                                    {
                                        role: 'cancel',
                                        text: 'No',
                                    },
                                    {
                                        text: 'Yes',
                                        role: 'comfirm',
                                        handler: () => {
                                            setTodos([]);
                                        }
                                    }
                                ]}
                            />
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
                                <IonButton id={`${item.id}`} color="danger" >Delete</IonButton>
                                <IonAlert
                                    header='Confirm!'
                                    message="Are you sure to delete this item??"
                                    trigger={`${item.id}`}
                                    buttons={[
                                        {
                                            role: 'cancel',
                                            text: 'No',
                                        },
                                        {
                                            text: 'Yes',
                                            role: 'comfirm',
                                            handler: () => handleDeleteTodo(item.id)
                                        }
                                    ]}
                                />
                            </IonItem>

                        ))
                    }
                </IonList>
            </IonContent>

        </IonPage>
    );
};

export default Home;
