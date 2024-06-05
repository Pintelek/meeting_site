import { useEffect, useState } from 'react';
import InputText from '../components/Login/InputText';
import { validator } from '../utils/validator';

function LoginPage() {

  const [data, setData] = useState({email: '', password : ''});
  const [errors, setErrors] = useState({});

  const validateConfig = {
    email: {
      isRequired: { 
        message: 'Електронная почта обязательна для заполнения'
      },
      minSymbol: {
        message: 'минимальный размер введенных символов 8'
      }
    },
    password: {
      isRequired: { 
        message: 'Пароль обязателен для заполнения'
      },
      minSymbol: {
        message: 'минимальный размер введенных символов 8'
      }
    }
  };

  

  const validate = () => {
    const errors = validator(data, validateConfig);
    setErrors(errors);
    return Object.keys(errors).length !== 0;
  };

  useEffect((() => {
    validate();
  }),[data]);

  const handleChange = (e) => {
    setData(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) return;
  };

  return ( 
    <div className="row">
      <h2>Login</h2>
      <div>
        <form onSubmit={handleSubmit} >
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
            state={data} type={'password'}
            error={errors}
          /> 
          <button type='submit'>send</button>
        </form>
      </div>
    </div>
    
  );
}

export default LoginPage;