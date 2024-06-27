import PropTypes from 'prop-types';
import { useState } from 'react';

function InputText({ name, type, label, state, onChange, error }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(prev => !prev);
  };
  console.log(error[name]);
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <div className="input-group has-validation">
        <input
          type={isVisible ? 'text' : type}
          onChange={onChange}
          id={name}
          name={name}
          value={state.name}
          className={'form-control' + (error[name] ? ' is-invalid' : '')}
        />
        {type === 'password' ? (
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleClick}
          >
            <i className={'bi bi-eye' + (isVisible ? '-slash' : '')}></i>
          </button>
        ) : null}
        {error[name] !== '' ? (
          <div className="invalid-feedback">{error[name]}</div>
        ) : null}
      </div>
    </div>
  );
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  state: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

InputText.defaultProps = {
  type: 'text',
};

export default InputText;
