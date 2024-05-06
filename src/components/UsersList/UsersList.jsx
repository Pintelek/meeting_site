import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchAll } from '../../API/fake.api/user.api';
import { useState } from 'react';
import User from '../User/User';
import SearchStatus from '../SearchStatus/SearchStatus';
import MyPagination from '../Pagination/Pagination';
import paginate from '../../utils/paginate';


function UsersList() {

  const [usersAll, setUsersAll] = useState(fetchAll());
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const countUsers = usersAll.length;


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

  const cropUsers = paginate(usersAll,currentPage, pageSize);


  return (
    <>
      <SearchStatus data={usersAll}/>
      <div>
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
      <MyPagination onChange={handlerChange} countItem={countUsers} currentPage={currentPage}  pageSize={pageSize}/>
    </>
  );
}



export default UsersList;