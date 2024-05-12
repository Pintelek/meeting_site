import PropTypes from 'prop-types';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function GroupList({items, valueProperty, contentProperty,selectedItem, onSelected, onReset}) {
  const arrayItems = Object.keys(items);
  return (
    <div className='col-2 d-flex flex-column'>
      <ListGroup as="ul">
        {arrayItems.map(el => (
          <ListGroup.Item role='button' onClick={() => {onSelected(items[el]);}} className={items[el] === selectedItem? 'active': null} action as="li" key={items[el][valueProperty]}>{items[el][contentProperty]}</ListGroup.Item>
        ))}
      </ListGroup>
      <Button onClick={onReset} className='mt-2' variant="primary" size="lg">Сброс</Button>
    </div>
  );
}

export default GroupList;

GroupList.defaultProps={
  contentProperty: 'name',
  valueProperty: '_id'
};
GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object.isRequired,PropTypes.array.isRequired]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  selectedItem: PropTypes.object,
  onSelected: PropTypes.func,
  onReset: PropTypes.func
};

