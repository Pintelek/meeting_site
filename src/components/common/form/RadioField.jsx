import PropTypes from 'prop-types';

function RadioField({ option, label, name, onChange, value }) {
  return (
    <>
      <div className="mb-4">
        <label className="form-label">{label}</label>
        {option.map(item => (
          <div key={item.name + '_' + item.value} className="form-check form-check-inline">
            <input
              name={name}
              className="btn-check"
              id={item.name + '_' + item.value}
              type="radio"
              onChange={onChange}
              checked={item.value === value}
              value={item.value}
            />
            <label className="btn btn-outline-secondary" htmlFor={item.name + '_' + item.value}>
              {item.name}
            </label>
          </div>
        ))}
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
