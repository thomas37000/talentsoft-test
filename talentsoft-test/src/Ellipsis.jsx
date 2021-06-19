import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Ellipsis = (props) => {
  const [clicked, setClicked] = useState(true);

  return (
    <div className={clicked ? "txt" : "txtDisplay"} onClick={() => setClicked(!clicked)}>
      {props.txt}
    </div>
  );
};

export default Ellipsis;

Ellipsis.propTypes = {
  txt: PropTypes.string,
};
