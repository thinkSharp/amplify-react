import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { API } from 'aws-amplify';

Amplify.configure(config);



function App() {
  const [todos, setTodos] = useState(null)
  async function getTodos(){
    const apiData = await API.get('todos', '/items', {});
    setTodos(apiData.message)
  }

  useEffect(() => {
    getTodos()

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World changed!
        </p>
        <p>{todos}</p>        
      </header>
    </div>
  );
}

export default withAuthenticator(App, true);
