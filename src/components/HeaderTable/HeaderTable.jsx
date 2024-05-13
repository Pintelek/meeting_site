function HeaderTable({onSortItem, currentSort, columns}) {

  const handlerSort = (param) => {
    if(param === currentSort.path){
      onSortItem({...currentSort, order: (currentSort.order === 'asc'? 'desc': 'asc')});
    }
    else onSortItem({path: param , order: 'asc'});
  };

  return ( 
    <>
      <thead>
        <tr>
          {Object.keys(columns).map(column => (
            <th 
              key={column} 
              role={ columns[column].path?'button':null} 
              onClick={ columns[column].path? () => handlerSort(columns[column].path): null}
              scope="col">{columns[column].name}</th>
          ))}
        </tr>
      </thead>
    </>
  );
}

export default HeaderTable;