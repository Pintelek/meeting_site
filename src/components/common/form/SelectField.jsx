import PropTypes from 'prop-types';
function SelectField({ name, data, label, onChange, value, error }) {
  const getSelectClasses = () => {
    return 'form-select ' + (error[name] ? 'is-invalid' : '');
  };
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: data.find(item => item._id === target.value) });
  };

  // const dataArray = Array.isArray(data)
  //   ? data
  //   : Object.keys(data).map(item => ({ _id: data[item]._id, name: data[item].name }));

  return (
    <>
      <div className="mb-4">
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
        <select className={getSelectClasses()} onChange={handleChange} name={name} id={name} value={!value ? 0 : value}>
          <option disabled value={0}>
            Choose...
          </option>
          {data
            ? data.map(item => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))
            : null}
        </select>
        {error[name] ? <div className="invalid-feedback">{error.name}</div> : null}
      </div>
    </>
  );
}

SelectField.propTypes = {
  name: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
SelectField.defaultProps = {
  error: {},
};
export default SelectField;
