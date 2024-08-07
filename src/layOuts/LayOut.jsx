import { Outlet } from 'react-router-dom';
import NavList from '../components/UI/NavList';

function LayOut() {
  return (
    <>
      <NavList />
      <Outlet />
    </>
  );
}

export default LayOut;
