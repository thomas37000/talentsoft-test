import React from 'react';
import PropTypes from 'prop-types';
import Ellipsis from './Ellipsis';

const Txt = () => {
  const txt = 'un big text lorem etc...';
  return (
    <>
      <div className='txt'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sint
        quae ab modi iste. Fugit pariatur quas et dignissimos, ipsam eligendi
        vitae maxime aspernatur iure accusamus accusantium voluptates officiis
        facere?
      </div>

      <Ellipsis txt={txt} />
    </>
  );
};

export default Txt;

Txt.propTypes = {
  txt: PropTypes.string,
};
