import logo from './logo.svg';
import Txt from './Txt';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <Txt />
    </div>
  );
}

export default App;
