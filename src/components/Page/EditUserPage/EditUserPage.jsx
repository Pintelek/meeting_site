import API from '../../../API';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectField from '../../common/form/SelectField';
import TextField from '../../common/form/TextField';
import RadioField from '../../common/form/RadioField';
import MultiSelectField from '../../common/form/MultiSelectField';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function EditUserPage({ userId }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const [professions, setProfessions] = useState();
  const [qualities, setQualities] = useState();

  useEffect(() => {
    API.users.getUserById(userId).then(res => {
      setUserData(res);
    });
    API.professions.fetchAll().then(res => {
      setProfessions(res);
    });
    API.qualities.then(res => {
      setQualities(res);
    });
  }, []);

  const onUpdate = () => {
    API.users.update(userId, userData);
    navigate(-1);
  };

  const handleChange = target => {
    setUserData(prev => ({ ...prev, [target.name]: target.value }));
  };
  return (
    <>
      {userData ? (
        <>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-4 offset-md-4 shadow p-4">
                <h1>Изменить</h1>
                <form>
                  <TextField name="name" label="Имя" onChange={handleChange} state={userData} />
                  <TextField onChange={handleChange} name={'email'} label={'Email'} state={userData} />
                  <SelectField
                    data={professions}
                    name={'profession'}
                    label={'Ваша профессия'}
                    onChange={handleChange}
                    value={userData.profession._id}
                  />
                  <RadioField
                    option={[
                      { name: 'Male', value: 'male' },
                      { name: 'Female', value: 'female' },
                    ]}
                    name="sex"
                    label={'Ваш пол'}
                    value={userData.sex}
                    onChange={handleChange}
                  />
                  <MultiSelectField
                    onChange={handleChange}
                    qualities={qualities}
                    defaultValue={userData.qualities}
                    label={'Выберете ваши качества'}
                    name={'qualities'}
                  />

                  <button className="btn w-100 mx-auto btn-primary" type="button" onClick={onUpdate}>
                    Обновить
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        </>
      )}
    </>
  );
}

export default EditUserPage;
