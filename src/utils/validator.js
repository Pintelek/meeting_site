export function validator(data, config) {
  const errors = {};
  function validate(method, data, config) {
    switch (method) {
      case 'isRequired':
        {
          if (typeof data === 'boolean') {
            return data ? false : config.message;
          } else if (typeof data === 'object') {
            return data._id ? false : config.message;
          } else if (data.trim() === '') return config.message;
        }
        break;
      case 'minSymbol':
        if (data.trim().length < 8) return config.message;
        break;
      case 'isEmail':
        if (!/^\S+@\S+\.[a-z]+$/g.test(data.trim())) return config.message;
        break;
      case 'isPassword':
        if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}/g.test(data.trim())) return config.message;
        break;
      default:
        break;
    }
  }
  for (let fieldName in data) {
    for (let validateMethod in config[fieldName]) {
      const error = validate(validateMethod, data[fieldName], config[fieldName][validateMethod]);
      if (!errors[fieldName] && error) {
        errors[fieldName] = error;
      }
    }
  }

  return errors;
}
