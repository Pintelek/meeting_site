import { Outlet } from 'react-router-dom';
import NavList from '../components/UI/NavList';

function LayOut() {
  return (
    <>
      <NavList />
      <Outlet />
      <h4>Footer</h4>
    </>
  );
}

export default LayOut;
