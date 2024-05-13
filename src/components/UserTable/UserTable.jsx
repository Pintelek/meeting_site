import BodyTable from '../BodyTable/BodyTable';
import Bookmark from '../Bookmark/Bookmark';
import HeaderTable from '../HeaderTable/HeaderTable';
// import User from '../User/User';
import PropTypes from 'prop-types';

function UserTable({users, onDelete,onToggleBookmark, currentSort, onSortItem}) {

  const columns = {
    name: { path: 'name', name: 'Имя' },
    qualities: {name: 'Качества'},
    professions: { path: 'profession.name', name: 'Профессия' },
    completedMeetings: {path: 'completedMeetings',name: 'Встретился, раз'},
    rate: { path: 'rate', name: 'Оценка' },
    bookmark: {path: 'bookmark',name: 'Избранное', component: (item) => (
      <Bookmark status={item.bookmark} id={item._id} onClick={onToggleBookmark}/>
    )},
    delete: {component: (item) => (
      <button type="button" onClick={() => {onDelete(item._id);}} className="btn btn-danger">Delete</button>
    )}
  };

  return ( 
    <>
      <table className="table">
        <HeaderTable {...{currentSort, onSortItem, columns}} />
        <BodyTable {...{columns, data: users}}/>
        {/* <tbody>
          {users.map(elem => (
            <User key={elem._id}  onToggleBookmark={onToggleBookmark} {...elem} onDelete={onDelete}/>
          ))}
        </tbody> */}
      </table>
    </>
  );
}

export default UserTable;

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  onDelete: PropTypes.func,
  onToggleBookmark: PropTypes.func,
  currentSort: PropTypes.object,
  onSortItem: PropTypes.func
};