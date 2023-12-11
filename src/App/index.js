import React from 'react';
import { AppUI } from './AppUI'
import { TodoProvider } from '../TodoContext';
import './App.css'


// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Picar carne', completed: false},
//   {text: 'Freir carne y cebolla', completed: false},
//   {text: 'Abrir pan', completed: true},
//   {text: 'Montar hamburguesa', completed: false},

// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {
  

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}




export default App;
