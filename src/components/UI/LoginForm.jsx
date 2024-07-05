import { useState, useEffect } from 'react';
import { validator } from '../../utils/validator';
import TextField from '../common/form/TextField';

function LoginForm({ onToggle }) {
  const [data, setData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

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
  };

  const validate = () => {
    const errors = validator(data, validateConfig);
    setErrors(errors);
    return Object.keys(errors).length !== 0;
  };

  useEffect(() => {
    validate();
  }, [data]);

  const handleChange = e => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) return;
  };

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
        <button className="btn w-100 mx-auto btn-primary" type="submit" disabled={Object.keys(errors).length !== 0}>
          Отправить
        </button>
      </form>
      <span>
        Нет Аккаунта?{' '}
        <a style={{ color: 'blue', textDecoration: 'underline' }} type="button" onClick={onToggle}>
          Регистрация
        </a>
      </span>
    </>
  );
}

export default LoginForm;
