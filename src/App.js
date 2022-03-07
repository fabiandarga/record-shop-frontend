import './App.css';
import { useEffect } from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import RecordsPage from './pages/records/RecordsPage';
import UsersPage from './pages/records/UsersPage';

function App() {

  useEffect(() => {
    document.title = process.env.NODE_ENV === 'DEV' ? 'DEV Fabian\'s Records' : "Fabian's Records";
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Record Shop Manager</h1>
      </header>
      <main>
        <Routes>
          <Route path="/records" element={ <RecordsPage /> }></Route>
          <Route path="/users" element={ <UsersPage /> }></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
