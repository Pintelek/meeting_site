import PropTypes from 'prop-types';

function SearchStatus({data}) {

  const renderPhrase = (num) => {
    const lastNum = num.toString().slice(-1);
    if(!(num >= 12 && num <= 14) && (lastNum === '2' || lastNum === '3' || lastNum === '4')){
      return 'человека тусанут';
    }
    else return 'человек тусанет';
  };


  return (
    <>
      <h2>
        <span className={'badge ' + (data.length > 0 ? 'bg-primary' : 'bg-danger')}>
          {data.length > 0
            ? `${data.length + ' ' + renderPhrase(data.length)} с тобой сегодня`
            : 'Никто с тобой не тусанет'}
        </span>
      </h2>
    </>
  );
}

SearchStatus.propTypes = {
  data: PropTypes.object.isRequired
};

export default SearchStatus;