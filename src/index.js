import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




class Pokemon{
constructor(name, type, attack){

  this.name = name,
  this.type = type,
  this.attack = attack
}
}
const pickachu = new Pokemon("Pickachu", "Electric", "Thunderbolt");
const raichu = new Pokemon("Raichu", "Electric", "Volt Switch")

console.log(pickachu(`${this.name} used ${this.attack}`));
console.log(raichu(`${this.name} used ${this.attack}`));

