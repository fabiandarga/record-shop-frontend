import { useState, useEffect } from 'react';
import './App.css';
import RecordList from './components/RecordList'

const BACKEND_URL  = process.env.REACT_APP_BACKEND_URL;
const RECORDS_PATH = BACKEND_URL + '/records';

console.log('backend '+BACKEND_URL);

async function loadRecords() {
  const res = await fetch(RECORDS_PATH);
  const data = await res.json();
  return data;
}

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    loadRecords().then((data) => {
      setRecords(data);
    });
  }, []);

  useEffect(() => {
    document.title = process.env.NODE_ENV === 'DEV' ? 'DEV Fabian\'s Records' : "Fabian's Records";
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Record Shop Manager</h1>
      </header>
      <main>
        <RecordList records={records} />
      </main>
    </div>
  );
}

export default App;
