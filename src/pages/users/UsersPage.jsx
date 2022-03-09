import { useState, useEffect } from 'react';
import UserList from 'components/UserList';

const BACKEND_URL  = process.env.REACT_APP_BACKEND_URL;
const RECORDS_PATH = BACKEND_URL + '/users';

console.log('backend '+BACKEND_URL);

async function loadUsers(token) {
  const res = await fetch(RECORDS_PATH, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }
  });
  const data = await res.json();
  return data;
}

const UsersPage = (props) => {
  const [users, setUsers] = useState([]);
  const token = props.token;

  useEffect(() => {
    loadUsers(token).then((data) => {
      console.log('data', data);
      if (data.message) {
        alert(data.message);
      } else {
        setUsers(data);
      }
    });
  }, []);
  
  return (
    <div className="list-page">
        <UserList users={users} /> 
    </div>
  );
}

export default UsersPage;