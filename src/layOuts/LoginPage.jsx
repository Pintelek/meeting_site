import { useEffect, useState } from 'react';
import InputText from '../components/Login/InputText';
import { validator } from '../utils/validator';

function LoginPage() {
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
        message:
          'Пароль должен содержать хотя бы одну прописную и одну строчную букву, а также цифру',
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
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 offset-md-4 shadow p-4">
          <h2 className="mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <InputText
              onChange={handleChange}
              name={'email'}
              label={'Введите ваш Email'}
              state={data}
              error={errors}
            />
            <InputText
              onChange={handleChange}
              name={'password'}
              label={'Введите пароль'}
              state={data}
              type={'password'}
              error={errors}
            />
            <button
              className="btn w-100 mx-auto btn-primary"
              type="submit"
              disabled={Object.keys(errors).length !== 0}
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
