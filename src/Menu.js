import React, { Component } from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';

import FirstComponent from './Composants/FirstComponent';

class Menu extends Component {

  state = {
    presentation : [
      {
        id : 1, 
        name : 'Perez',
        firstname : 'Alexandre'
      },
      {
        id : 2, 
        name : 'Pauty',
        firstname : 'Camille'
      },
      {
        id : 3, 
        name : 'Engel',
        firstname : 'Matthieu'
      },
      {
        id : 4, 
        name : 'Guessous',
        firstname : 'Alec'
      },
    ]
  }


  render(){
    return (
      <div className="Menu">           
        <header className="App-header">
          <h2> BTC Radio Stream </h2>
          <FirstComponent names = {this.state.presentation}/>
        </header>
      </div> 
    );
  }
} 

export default Menu; 