import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          React Debuggin
        </h1>

        <Weather city = 'Nairobi' />
      </header>
    </div>
  );
}

export default App;