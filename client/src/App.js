import axios from 'axios';
import './App.css';
import './components/fileUploader'
import FileUploader from './components/fileUploader';
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
        <button onClick={apiCall}>Make an Api call</button>
        <FileUploader />
      </header>
    </div>
  );
}

export default App;
