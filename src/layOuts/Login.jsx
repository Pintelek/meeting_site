import { useEffect, useState } from 'react';
import LoginForm from '../components/UI/LoginForm';
import RegisterForm from '../components/UI/RegisterForm';
import { useParams } from 'react-router-dom';

function LoginPage() {
  const { type } = useParams();
  const [formType, setFormType] = useState(type === 'register' ? type : 'login');

  const toggleTypeForm = () => {
    setFormType(prev => (prev === 'register' ? 'login' : 'register'));
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 offset-md-4 shadow p-4">
            <h2 className="mb-4">{formType === 'register' ? 'Register' : 'Login'}</h2>
            {formType === 'login' ? (
              <LoginForm onToggle={toggleTypeForm} />
            ) : (
              <RegisterForm onToggle={toggleTypeForm} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
