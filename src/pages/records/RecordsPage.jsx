import { useState, useEffect } from 'react';
import RecordList from 'components/RecordList'

const BACKEND_URL  = process.env.REACT_APP_BACKEND_URL;
const RECORDS_PATH = BACKEND_URL + '/records';

console.log('backend '+BACKEND_URL);

async function loadRecords() {
  const res = await fetch(RECORDS_PATH);
  const data = await res.json();
  return data;
}

const RecordsPage = () => {
    const [records, setRecords] = useState([]);

  useEffect(() => {
    loadRecords().then((data) => {
      setRecords(data);
    });
  }, []);
  
  return (
    <div className="list-page">
        <RecordList records={records} />
    </div>
  );
}

export default RecordsPage;