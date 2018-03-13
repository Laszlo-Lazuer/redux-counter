import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';

const rootReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ONE':
      return state.concat([action.data]);
    case 'Subtract_ONE':
      return state.concat([action.data]);
    default:
      return state
  }
}

let store = createStore(rootReducer);

class App extends Component {
  constructor() {
    super();
    store.subscribe(() => {
      console.log(store.getState());
    });
  }

  increment = () => {
    console.log('in store increment methods');
    store.dispatch({type: 'ADD_ONE', data: 1});
  }

  decrement = () => {
    console.log('in store increment methods');
    store.dispatch({type: 'Subtract_ONE', data: -1});
  }

  render() {
    return (
      <div className="App">
        <h1> Simple redux counter</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
