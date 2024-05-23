import BodyTable from '../BodyTable/BodyTable';
import Bookmark from '../Bookmark/Bookmark';
import HeaderTable from '../HeaderTable/HeaderTable';
import PropTypes from 'prop-types';

import QualitiesList from '../QualitiesList/QualitiesList';
import Table from '../Table/Table';
import UserLink from '../UserLink';

function UserTable({users, onDelete, onToggleBookmark, currentSort, onSortItem}) {

  const columns = {
    name: { path: 'name', name: 'Имя' , component : (user) => (<UserLink user={user}/>)},
    qualities: {name: 'Качества' , component : (users) => {
      return <QualitiesList qualities = {users.qualities}/>;
    }
    },
    professions: { path: 'profession.name', name: 'Профессия' },
    completedMeetings: {path: 'completedMeetings',name: 'Встретился, раз'},
    rate: { path: 'rate', name: 'Оценка' },
    bookmark: {path: 'bookmark',name: 'Избранное', component: (users) => (
      <Bookmark status={users.bookmark} id={users._id} onClick={onToggleBookmark}/>
    )},
    delete: {component: (users) => (
      <button type="button" onClick={() => {onDelete(users._id);}} className="btn btn-danger">Delete</button>
    )}
  };

  return ( 
    <>
      <Table>
        <HeaderTable {...{currentSort, onSortItem, columns}} />
        <BodyTable {...{columns, data: users}}/>
      </Table>
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