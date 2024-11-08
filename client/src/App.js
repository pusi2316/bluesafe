import axios from 'axios';
import './App.css';

function App() {

const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    console.log(data);
  });
}

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={apiCall}>Make an Api call</button>
      </header>
    </div>
  );
}

export default App;
