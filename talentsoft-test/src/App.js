import React, { useState } from 'react';
import logo from './logo.svg';
import Ellipsis from './Ellipsis';
import './App.css';

function App() {
  const [content] = useState(
    'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès quil est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum'
  );

  const txt = content;

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>

      <Ellipsis txt={txt} />
    </div>
  );
}

export default App;
