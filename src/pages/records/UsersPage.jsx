import { useState, useEffect } from 'react';
import RecordList from 'components/UserList'

const BACKEND_URL  = process.env.REACT_APP_BACKEND_URL;
const RECORDS_PATH = BACKEND_URL + '/users';

console.log('backend '+BACKEND_URL);

async function loadUsers() {
  const res = await fetch(RECORDS_PATH);
  const data = await res.json();
  return data;
}

const UsersPage = () => {
    const [records, setUsers] = useState([]);

  useEffect(() => {
    loadUsers().then((data) => {
      setUsers(data);
    });
  }, []);
  
  return (
    <div className="list-page">
        <RecordList records={records} />
    </div>
  );
}

export default UsersPage;