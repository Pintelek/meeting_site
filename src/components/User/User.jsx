
import Bookmark from '../Bookmark/Bookmark';
import Qualities from '../Qualitie/Qualities';
import PropTypes from 'prop-types';


function User({_id, name,qualities, profession, completedMeetings, onToggleBookmark, rate, onDelete, bookmark}) {

  

  return (
    <>
      <tr key={_id}>
        <td scope="row">{name}</td>
        <td>{qualities.map((el) => (
          <Qualities key={el._id} {...el} />
        ))}</td>
        <td>{profession.name}</td>
        <td>{completedMeetings}</td>
        <td>{rate}/5</td>
        <td><Bookmark status={bookmark} id={_id} onClick={onToggleBookmark}/></td>
        <td><button type="button" onClick={() => {onDelete(_id);}} className="btn btn-danger">Delete</button></td>
      </tr>
    </>
  );
}

User.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  qualities: PropTypes.array.isRequired,
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  onToggleBookmark: PropTypes.func.isRequired,
  rate: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  bookmark: PropTypes.bool.isRequired
};

export default User;