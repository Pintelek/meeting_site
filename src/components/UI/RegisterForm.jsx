import { useState, useEffect } from 'react';
import { validator } from '../../utils/validator';
import TextField from '../common/form/TextField';
import SelectField from '../common/form/SelectField';
import API from '../../API';
import PropTypes from 'prop-types';
import RadioField from '../common/form/RadioField';
import MultiSelectField from '../common/form/MultiSelectField';
import CheckBoxField from '../common/form/CheckBoxField';

function RegisterForm({ onToggle }) {
  const [data, setData] = useState({
    email: '',
    password: '',
    profession: '',
    sex: 'male',
    qualities: [],
    agreement: false,
  });
  const [errors, setErrors] = useState({});
  const [professions, setProfessions] = useState();
  const [qualities, setQualities] = useState();

  useEffect(() => {
    API.professions.fetchAll().then(res => {
      setProfessions(res);
    });
    API.qualities.then(res => {
      setQualities(res);
    });
  }, []);

  const validateConfig = {
    email: {
      isRequired: {
        message: 'Електронная почта обязательна для заполнения',
      },
      isEmail: {
        message: 'Email введен не корректно.',
      },
    },
    password: {
      isRequired: {
        message: 'Пароль обязателен для заполнения',
      },
      minSymbol: {
        message: 'Минимальный размер введенных символов 8',
      },
      isPassword: {
        message: 'Пароль должен содержать хотя бы одну прописную и одну строчную букву, а также цифру',
      },
    },
    professions: {
      isRequired: {
        message: 'Выбор профессии обязателен',
      },
    },
    agreement: {
      isRequired: {
        message: 'Треуется дать согласие',
      },
    },
  };

  const validate = () => {
    const errors = validator(data, validateConfig);
    setErrors(errors);
    return Object.keys(errors).length !== 0;
  };

  useEffect(() => {
    validate();
  }, [data]);

  const handleChange = target => {
    setData(prev => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) return;
  };

  console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField onChange={handleChange} name={'email'} label={'Введите ваш Email'} state={data} error={errors} />
        <TextField
          onChange={handleChange}
          name={'password'}
          label={'Введите пароль'}
          state={data}
          type={'password'}
          error={errors}
        />
        <SelectField
          data={professions}
          name={'profession'}
          label={'Ваша профессия'}
          onChange={handleChange}
          value={data.profession._id}
          error={errors}
        />
        <RadioField
          option={[
            { name: 'Male', value: 'male' },
            { name: 'Female', value: 'female' },
          ]}
          name="sex"
          label={'Ваш пол'}
          value={data.sex}
          onChange={handleChange}
        />

        <MultiSelectField
          onChange={handleChange}
          qualities={qualities}
          defaultValue={data.qualities}
          label={'Выберете ваши качества'}
          name={'qualities'}
        />

        <CheckBoxField value={data.agreement} name={'agreement'} onChange={handleChange} errors={errors}>
          Я принимаю <a>пользовательское соглашение</a>.
        </CheckBoxField>

        <button className="btn w-100 mx-auto btn-primary" type="submit" disabled={Object.keys(errors).length !== 0}>
          Отправить
        </button>
      </form>
      <span>
        Есть Аккаунт?{' '}
        <a style={{ color: 'blue', textDecoration: 'underline' }} type="button" onClick={onToggle}>
          Войти
        </a>
      </span>
    </>
  );
}

RegisterForm.propTypes = {
  onToggle: PropTypes.func,
};

export default RegisterForm;
