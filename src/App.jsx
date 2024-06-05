import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import { Routes, Route } from 'react-router-dom';

import UsersList from './layOuts/UsersList';
import Main from './layOuts/Main';
import LoginPage from './layOuts/LoginPage';
import LayOut from './layOuts/LayOut';
import User from './components/User';

function App() {


  return (
    <>
      
      <Routes>
        <Route path='/' element={<LayOut/>}>
          <Route index element={<Main/>}/>
          <Route path='login' element={<LoginPage/>}/>
          <Route path='users' element={<UsersList/>}/>
          <Route path='users/:id' element={<User/>}/>
        </Route>
      </Routes>
      

      
    </>
  );
}

export default App;
