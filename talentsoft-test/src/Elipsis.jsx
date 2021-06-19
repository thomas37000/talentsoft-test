import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Ellipsis = (props) => {
  const [clicked, setClicked] = useState(false);
  
  return (
    <div className={clicked && 'txt'} onClick={() => setClicked(true)}>
      {props.txt}
    </div>
  );
};

export default Ellipsis;

Ellipsis.propTypes = {
  txt: PropTypes.string,
};


