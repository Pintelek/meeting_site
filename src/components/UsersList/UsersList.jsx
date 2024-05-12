import 'bootstrap/dist/css/bootstrap.min.css';
import API from '../../API';
import { useEffect, useState } from 'react';
import User from '../User/User';
import SearchStatus from '../SearchStatus/SearchStatus';
import MyPagination from '../Pagination/Pagination';
import paginate from '../../utils/paginate';
import GroupList from '../GroupList/GroupList';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';


function UsersList() {

 


  const [usersAll, setUsersAll] = useState([]);
  const [filterUser, setFilterUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [professions , setProfessions] = useState();
  const [selectedProfession, setSelectedProfession] = useState();

  const pageSize = 4;
  const countUsers = filterUser.length;

  useEffect(() => {
    API.professions.fetchAll()
      .then(res => {
        setProfessions(res);
      });
    API.users.fetchAll()
      .then(res => {
        setUsersAll(res);
      });
  },[]);

  

  const handleDelete = (id) => {
    setUsersAll(state => (state.filter(el => el._id != id)));
  };
  
  const handlerBookmark = (id) => {
    setUsersAll(usersAll.map(el => {
      if(el._id === id) {
        el.bookmark? el.bookmark=false: el.bookmark=true;
      }
      return el;
    })
    );
  };

  const handlerChange = (page) => {
    setCurrentPage(page);
  };

  const handlerSelectProfession = (item) => {
    setCurrentPage(1);
    setSelectedProfession(item);
  };

  const handlerReset = () => {
    setSelectedProfession(undefined);
  };

  useEffect(() => {
    setFilterUser(selectedProfession?([...usersAll].filter(el => el.profession._id == selectedProfession._id)):usersAll);
  },[selectedProfession, usersAll]);


  const cropUsers = paginate(filterUser,currentPage, pageSize);

  return (
    <div className='container'>
      <SearchStatus data={filterUser}/>

      {
        usersAll.length === 0? (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>):
          (
            <main className='row m-4'>
              {professions? <GroupList onReset={handlerReset} onSelected={handlerSelectProfession} selectedItem={selectedProfession} items={professions} />: null}
              <div className={'user-list ' + (professions? 'col-10': 'col-12')}>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Имя</th>
                      <th scope="col">Качества</th>
                      <th scope="col">Профессия</th>
                      <th scope="col">Встретился,раз</th>
                      <th scope="col">Оценка</th>
                      <th scope="col">Избранное</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cropUsers.map(elem => (
                      <User key={elem._id}  onToggleBookmark={handlerBookmark} {...elem} props={elem} onDelete={handleDelete}/>
                    ))}
                  </tbody>
                </table>
              </div>
            </main>
          )
      }
      
      <MyPagination onChange={handlerChange} countItem={countUsers} currentPage={currentPage}  pageSize={pageSize}/>
    </div>
  );
}



export default UsersList;