import { useState, useEffect } from 'react';
import UserList from 'components/UserList';

const BACKEND_URL  = process.env.REACT_APP_BACKEND_URL;
const RECORDS_PATH = BACKEND_URL + '/users';

console.log('backend '+BACKEND_URL);

async function loadUsers() {
  const res = await fetch(RECORDS_PATH);
  const data = await res.json();
  return data;
}

const UsersPage = () => {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers().then((data) => {
      setUsers(data);
    });
  }, []);
  
  return (
    <div className="list-page">
        <UserList users={users} /> 
    </div>
  );
}

export default UsersPage;