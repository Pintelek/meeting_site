import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import { Routes, Route } from 'react-router-dom';

import Main from './layOuts/Main';
import Login from './layOuts/Login';
import LayOut from './layOuts/LayOut';

import Users from './layOuts/Users';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Main />} />
          <Route path="login/:type?" element={<Login />} />
          <Route path="users/:userId?/:edit?" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
