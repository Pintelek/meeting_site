import Pagination from 'react-bootstrap/Pagination';
import _ from 'lodash';
import PropTypes from 'prop-types';

function MyPagination({countItem, currentPage, pageSize, onChange}) {

  const pageCount = Math.ceil(countItem/pageSize);

  if(pageCount === 1) return null;
  
  const arrayPagination = _.range(1, pageCount+1);

  return ( 
    <>
      <Pagination>
        {arrayPagination.map(page => (
          <Pagination.Item onClick={() => onChange(page)} className={page===currentPage? 'active': ''} key={'page' + page}>{page}</Pagination.Item>
        ))}
      </Pagination>


    </>
  );
}
MyPagination.propTypes = {
  onChange: PropTypes.func.isRequired,
  countItem: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired
};

export default MyPagination;