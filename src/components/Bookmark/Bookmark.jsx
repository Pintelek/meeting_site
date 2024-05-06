

function Bookmark({status, onClick, id}) {


  return (
    <div onClick={() => onClick(id)}>
      {status? <i className="bi bi-bookmark-heart-fill fs-3"></i>: <i className="bi bi-bookmark fs-3"></i>}
    </div>
  );
}

export default Bookmark;