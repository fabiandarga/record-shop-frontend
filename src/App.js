import './App.css';
import { useEffect } from 'react';
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
          <Route path="/records" element={ <RecordsPage /> }></Route>
          <Route path="/users" element={ <UsersPage /> }></Route>
          <Route path="/login" element={ <LoginPage />}></Route>
          <Route path="/register" element={ <RegisterPage />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
