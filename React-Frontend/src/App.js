import React, {useState} from 'react';
import './App.css';
import Navigation from './components/navigation';
import Login from './components/login';

function App() {
  const [token, setToken] = useState('');

  const userLogin = (tok) => {
    setToken(tok);
  }
  
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
