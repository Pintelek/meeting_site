import { Link } from 'react-router-dom';

function UserLink({ user }) {
  return (
    <>
      <Link to={'/users/' + user._id}>{user.name}</Link>
    </>
  );
}

export default UserLink;
