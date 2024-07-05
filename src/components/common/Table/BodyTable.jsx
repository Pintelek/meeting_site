import _ from 'lodash';

import PropTypes from 'prop-types';

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
              <td key={column}> {
                renderComponent(column,item)}</td>
            ))}
          </tr> ))}
        
      </tbody>
    </> 
  );
}

BodyTable.propTypes = {
  columns: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
};

export default BodyTable;