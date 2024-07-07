import PropTypes from 'prop-types';

function CheckBoxField({ name, onChange, children, value, errors }) {
  const handleChange = ({ target }) => {
    onChange({ name: name, value: target.checked });
  };

  return (
    <>
      <div className="mb-4">
        <div className="form-check">
          <input
            className={'form-check-input' + (errors ? (errors[name] ? ' is-invalid' : '') : '')}
            id={name}
            type="checkbox"
            role="switch"
            checked={value}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor={name}>
            {children}
          </label>
          {errors && (errors[name] ? <div className="invalid-feedback">{errors[name]}</div> : null)}
        </div>
      </div>
    </>
  );
}

CheckBoxField.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  value: PropTypes.bool,
};

export default CheckBoxField;
