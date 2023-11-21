// AppContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Definir el tipo de los elementos del estado
interface AppState {
  photos: Photo[];
}
interface Photo {
    id: string;
    caption: string;
  }
// Definir el tipo de las acciones
type AppAction =
  | { type: 'ADD_PHOTO'; payload: Photo }
  | { type: 'UPDATE_PHOTO'; payload: { id: string; data: Photo } }
  | { type: 'DELETE_PHOTO'; payload: string };

// Definir el tipo de los métodos del contexto
interface AppContextProps {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

// Crear el contexto
const AppContext = createContext<AppContextProps | undefined>(undefined);

// Definir el proveedor del contexto
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, { photos: [] });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Crear el hook personalizado para acceder al contexto
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe usarse dentro de un AppProvider');
  }
  return context;
};

// Reductor para gestionar el estado
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'ADD_PHOTO':
      return { ...state, photos: [...state.photos, action.payload] };
    case 'UPDATE_PHOTO':
      return {
        ...state,
        photos: state.photos.map((photo) =>
          photo.id === action.payload.id ? action.payload.data : photo
        ),
      };
    case 'DELETE_PHOTO':
      return {
        ...state,
        photos: state.photos.filter((photo) => photo.id !== action.payload),
      };
    default:
      return state;
  }
};
