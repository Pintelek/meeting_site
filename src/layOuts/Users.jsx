import { useParams } from 'react-router-dom';
import UserPage from '../components/Page/UserPage';
import UsersListPage from '../components/Page/UserListPage';
import EditUserPage from '../components/Page/EditUserPage';

function Users() {
  const param = useParams();
  const { userId, edit } = param;
  return <>{userId ? edit ? <EditUserPage userId={userId} /> : <UserPage userId={userId} /> : <UsersListPage />}</>;
}

export default Users;
