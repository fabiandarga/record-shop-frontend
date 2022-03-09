import { useState, useEffect } from 'react';
import RecordList from 'components/RecordList'

const BACKEND_URL  = process.env.REACT_APP_BACKEND_URL;
const RECORDS_PATH = BACKEND_URL + '/records';

console.log('backend '+BACKEND_URL);

async function loadRecords(token) {
  const res = await fetch(RECORDS_PATH, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }
  });
  const data = await res.json();
  return data;
}

const RecordsPage = ({ token }) => {
    const [records, setRecords] = useState([]);

  useEffect(() => {
    loadRecords(token).then((data) => {
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