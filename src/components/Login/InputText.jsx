import PropTypes from 'prop-types';
import { useState } from 'react';

function InputText({name, type, label, state, onChange, error}) {

  const [isVisible, setIsVisible] = useState(false);

  console.log(error);

  const handleClick = () => {
    setIsVisible(prev => !prev);
  };
  return ( 
    <div>
      <label htmlFor={name}>{label}</label>
      <input 
        type = {(type === 'password')? isVisible? 'text': 'password' : type} 
        onChange={onChange}  
        id={name}
        name={name} 
        value={state.name} />
      {(type === 'password')? 
        <button 
          type='button'
          onClick={handleClick}
        >{isVisible? 'скрыть': 'показать'}</button>: null}
      {error[name] !== ''? <p>{error[name]}</p>: null}
    </div>
  );
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  state: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

InputText.defaultProps = {
  type: 'text'
};

export default InputText;