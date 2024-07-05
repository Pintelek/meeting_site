import PropTypes from 'prop-types';

function HeaderTable({onSortItem, currentSort, columns}) {

  const handlerSort = (param) => {
    if(param === currentSort.path){
      onSortItem({...currentSort, order: (currentSort.order === 'asc'? 'desc': 'asc')});
    }
    else onSortItem({path: param , order: 'asc'});
  };

  const renderArrow = (column) => {
    
    if(columns[column].path === currentSort.path){
      return currentSort.order === 'asc'? <i className="bi bi-caret-up-fill"></i>: <i className="bi bi-caret-down-fill"></i>;
    }
  };
  return ( 
    <>
      <thead>
        <tr >
          {Object.keys(columns).map(column => (
            <th  
              key={column} 
              role={ columns[column].path?'button':null} 
              onClick={ columns[column].path? () => handlerSort(columns[column].path): null}
              scope="col">{columns[column].name}{renderArrow(column)}</th>
          ))}
        </tr>
      </thead>
    </>
  );
}

HeaderTable.propTypes = {
  columns: PropTypes.object.isRequired,
  onSortItem: PropTypes.func,
  currentSort: PropTypes.object
};

export default HeaderTable;