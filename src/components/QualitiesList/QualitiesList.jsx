import Qualities from '../Qualitie/Qualities';

import PropTypes from 'prop-types';

function QualitiesList({qualities}) {
  return ( 
    <>
      {qualities.map(el => (<Qualities key={el._id} {...el} />))}
    </>
  );
}

QualitiesList.propTypes = {
  qualities: PropTypes.array.isRequired
};

export default QualitiesList;