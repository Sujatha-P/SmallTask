import logo from './logo.svg';
import './App.css';
import TableData from './Components/Tabledata';
import Login from './Components/Login';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState([]);

  const handleLogin = () => {
    setLoggedIn(true);
    // Perform data fetching logic here, e.g., API request to get table data
    // For simplicity, we will just mock some data
    const mockData = [
      { column1: 'Data 1', column2: 'Value 1' },
      { column1: 'Data 2', column2: 'Value 2' },
      // Add more data as needed
    ];
    setData(mockData);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setData([]);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <TableData data={data} />
          <button onClick={handleLogout} className='btn btn-outline-secondary'>Logout</button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
