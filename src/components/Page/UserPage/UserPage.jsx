import { useNavigate, Link } from 'react-router-dom';
import API from '../../../API';
import { useEffect, useState } from 'react';
import Qualities from '../../UI/qualities';
import { Button } from 'react-bootstrap';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function UserPage({ userId }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();

  useEffect(() => {
    API.users.getUserById(userId).then(res => setUserData(res));
  }, []);

  if (!userData) {
    return (
      <>
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      </>
    );
  } else {
    return (
      <>
        <h1>{userData.name}</h1>
        <h2>Профессия: {userData.profession.name}</h2>
        <Qualities qualities={userData.qualities} />
        <p>Встретился {userData.completedMeetings} раз.</p>
        <h2>Рейтинг : {userData.rate}/5</h2>

        <Link to={'edit'}>
          <Button variant="outline-primary">Изменить</Button>
        </Link>
      </>
    );
  }
}

export default UserPage;
