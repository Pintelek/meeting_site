import _ from 'lodash';
import Qualities from '../Qualitie/Qualities';

function BodyTable({columns, data}) {


  const renderComponent = (column, item) => {
    if(columns[column].component){
      const component = columns[column].component;
      if(typeof component === 'function'){
        return columns[column].component(item);
      }
      else return component;
    }
    else {
      return  _.get(item, columns[column].path);
    }
  };
  return (
    <>
      <tbody>
        {data.map(item => ( 
          <tr key={item._id}>
            {Object.keys(columns).map(column => (
              <td key={column}>{Array.isArray(item[column])? item[column].map(el => (
                <Qualities key={el._id} {...el} />
              )) : renderComponent(column,item)}</td>
            ))}
          </tr> ))}
        
      </tbody>
    </> 
  );
}

export default BodyTable;