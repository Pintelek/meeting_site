import PropTypes from 'prop-types';

function RadioField({ option, label, name, onChange, value }) {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <>
      <div className="mb-4">
        <label className="form-label">{label}</label>
        <div className="d-flex justify-content-start">
          {option.map(item => (
            <div key={item.name + '_' + item.value} className="form-check form-check-inline">
              <input
                name={name}
                id={item.name + '_' + item.value}
                type="radio"
                onChange={handleChange}
                checked={item.value === value}
                value={item.value}
              />
              <label className="ms-2 form-check-label" htmlFor={item.name + '_' + item.value}>
                {item.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

RadioField.propTypes = {
  option: PropTypes.array,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default RadioField;
