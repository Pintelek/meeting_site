import PropTypes from 'prop-types';

function Bookmark({ status, onClick, id }) {
  return (
    <div onClick={() => onClick(id)}>
      {status ? (
        <i className="bi bi-bookmark-heart-fill fs-3"></i>
      ) : (
        <i className="bi bi-bookmark fs-3"></i>
      )}
    </div>
  );
}

Bookmark.propTypes = {
  status: PropTypes.bool,
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired,
};

export default Bookmark;
