import './App.css';
import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import RecordsPage from './pages/records/RecordsPage';
import UsersPage from './pages/users/UsersPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

function App() {
  const [token, setToken] = useState('');

  const loginHandler = (data) => {
    const freshToken = data.token;
    if (freshToken) {
      setToken(freshToken);
    }
  };

  useEffect(() => {
    document.title = process.env.NODE_ENV === 'DEV' ? 'DEV Fabian\'s Records' : "Fabian's Records";
  }, []);

  return (
    <div className="App">
      <header className="App-header"> 
        <h1>Record Shop Manager</h1>
        <ul>
          <li>
            <Link to="/records">Records</Link>
          </li>
          <li>
            <Link to="/users">User</Link>
          </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/records" element={ <RecordsPage token={token} /> }></Route>
          <Route path="/users" element={ <UsersPage token={token} /> }></Route>
          <Route path="/login" element={ <LoginPage onLogin={loginHandler} />}></Route>
          <Route path="/register" element={ <RegisterPage />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
