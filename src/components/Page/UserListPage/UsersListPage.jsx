import 'bootstrap/dist/css/bootstrap.min.css';
import API from '../../../API';
import { useEffect, useState } from 'react';
import SearchStatus from '../../UI/SearchStatus';
import MyPagination from '../../common/MyPagination';
import paginate from '../../../utils/paginate';
import GroupList from '../../common/GroupList';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import UserTable from '../../UI/UserTable';
import _ from 'lodash';

function UsersListPage() {
  const [usersAll, setUsersAll] = useState([]);
  const [filterUser, setFilterUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const [selectedProfession, setSelectedProfession] = useState();
  const [sortBy, setSortBy] = useState({ path: 'name', order: 'asc' });
  const [searchValue, setSearchValue] = useState('');

  const pageSize = 8;
  const countUsers = filterUser.length;

  useEffect(() => {
    API.professions.fetchAll().then(res => {
      setProfessions(res);
    });
    API.users.fetchAll().then(res => {
      setUsersAll(res);
    });
  }, []);

  const handleDelete = id => {
    setUsersAll(state => state.filter(el => el._id != id));
  };

  const handlerBookmark = id => {
    setUsersAll(
      usersAll.map(el => {
        if (el._id === id) {
          el.bookmark ? (el.bookmark = false) : (el.bookmark = true);
        }
        return el;
      })
    );
  };

  const handlerChange = page => {
    setCurrentPage(page);
  };

  const handlerSelectProfession = item => {
    setSelectedProfession(item);
    setSearchValue('');
  };

  const handlerReset = () => {
    setSelectedProfession(undefined);
  };

  const handlerSortItem = param => {
    setSortBy(param);
  };

  const handlerFilterSearch = e => {
    setSelectedProfession(undefined);
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchValue, selectedProfession]);

  useEffect(() => {
    setFilterUser(
      searchValue
        ? [...usersAll].filter(el => new RegExp(`${searchValue}`).test(el.name.toLowerCase()))
        : selectedProfession
        ? [...usersAll].filter(el => el.profession._id == selectedProfession._id)
        : usersAll
    );
  }, [searchValue, selectedProfession, usersAll]);

  const sortedUsers = _.orderBy(filterUser, sortBy.path, sortBy.order);
  const cropUsers = paginate(sortedUsers, currentPage, pageSize);

  return (
    <div className="container">
      {usersAll.length === 0 ? (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      ) : (
        <>
          <SearchStatus data={filterUser} />
          <main className="row m-4">
            {professions ? (
              <GroupList
                onReset={handlerReset}
                onSelected={handlerSelectProfession}
                selectedItem={selectedProfession}
                items={professions}
              />
            ) : null}
            <div className={'user-list ' + (professions ? 'col-10' : 'col-12')}>
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  value={searchValue}
                  placeholder="search..."
                  onInput={handlerFilterSearch}
                />
              </div>
              <UserTable
                currentSort={sortBy}
                onSortItem={handlerSortItem}
                users={cropUsers}
                onDelete={handleDelete}
                onToggleBookmark={handlerBookmark}
              />
            </div>
          </main>
        </>
      )}

      <MyPagination onChange={handlerChange} countItem={countUsers} currentPage={currentPage} pageSize={pageSize} />
    </div>
  );
}

export default UsersListPage;
