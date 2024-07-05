import { useParams, useNavigate } from 'react-router-dom';
import API from '../../../API';
import { useEffect, useState } from 'react';
import Qualities from '../../UI/qualities';
import { Button } from 'react-bootstrap';

function UserPage({ userId }) {
  // const id = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(API.users.getUserById(userId));

  useEffect(() => {
    setUserData(API.users.getUserById(userId));
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  if (!userData) {
    return (
      <>
        <h2>Произашла ошибка повторите запрос</h2>
      </>
    );
  } else {
    return (
      <>
        <h1>{userData.name}</h1>
        <h2>Профессия: {userData.profession.name}</h2>
        <QualitiesList qualities={userData.qualities} />
        <p>Встретился {userData.completedMeetings} раз.</p>
        <h2>Рейтинг : {userData.rate}/5</h2>
        <Button variant="outline-primary" onClick={goBack}>
          Все пользователи
        </Button>
      </>
    );
  }
}

export default UserPage;
