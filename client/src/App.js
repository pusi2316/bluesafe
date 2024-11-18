import axios from 'axios';
import './App.css';
import FileHandler from './components/fileHandler';
const hostUrl = 'http://localhost:8080';

function App() {

const apiCall = () => {
  axios.get(hostUrl).then((data) => {
    console.log(data);
  });
}

  return (
    <div className="App">
      <header className="App-header">
        <FileHandler />
      </header>
    </div>
  );
}

export default App;
