export function validator (data,config) {
  const errors = {};
  function validate(method, data, config){
    switch(method){
    case 'isRequired' : 
      if(data.trim() === '') return config.message;
      break;
    case 'minSymbol' :
      if(data.trim().length < 8) return config.message;
      break;
    default:
      break;
    }
  }
  for(let fieldName in data){
    for (let validateMethod in config[fieldName]){
      const error = validate(validateMethod, data[fieldName], config[fieldName][validateMethod]);
      if(!errors[fieldName] && error){
        errors[fieldName] = error;
      }
      
    }
  }

  return errors;
}