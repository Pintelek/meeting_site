import { useParams } from 'react-router-dom';
import UserPage from '../components/Page/UserPage';
import UsersListPage from '../components/Page/UserListPage';

function Users() {
  const param = useParams();
  const { userId } = param;

  return <>{userId ? <UserPage userId={userId} /> : <UsersListPage />}</>;
}

export default Users;
