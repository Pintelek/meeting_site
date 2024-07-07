import Select from 'react-select';
import PropTypes from 'prop-types';

function MultiSelectField({ onChange, label, qualities, name, defaultValue }) {
  const handleChange = e => {
    const objectValue = () => {
      const arrayQualities = Object.keys(qualities).map(key => qualities[key]);
      let arrayId = e.map(el => el.value);
      return arrayQualities.filter(el => arrayId.includes(el._id));
    };
    onChange({ name: name, value: objectValue() });
  };

  const options = qualities
    ? Object.keys(qualities).map(item => ({ value: qualities[item]._id, label: qualities[item].name }))
    : [];
  const defaultArray = defaultValue.map(el => options.find(opt => opt.value === el._id));
  return (
    <>
      <div className="mb-4">
        <label className="form-label">{label}</label>
        <Select
          isMulti
          closeMenuOnSelect={false}
          name={name}
          options={options}
          onChange={handleChange}
          defaultValue={defaultArray}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
    </>
  );
}

MultiSelectField.propTypes = {
  qualities: PropTypes.object,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default MultiSelectField;
