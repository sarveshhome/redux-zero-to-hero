import React from 'react';
import './style.css';
import Counter from './components/Counter';
export default function App() {
  return (
    <>
      <h1>Hello Redux !</h1>
      <p>Redux is a state management system.</p>
      <ul>
        <li> a place to save the state </li>
        <li> a method to get the state </li>
        <li> a method to change the state</li>
      </ul>
      <Counter />
    </>
  );
}
