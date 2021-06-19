import React from 'react';
import PropTypes from 'prop-types';

const Txt = () => {
  return (
    <>
      <div className='txt'>
        Talentsoft reçoit le Grand Prix aux Trophées des Futures Licornes « Ce
        Grand Prix des Licornes… vient confirmer la pertinence de notre modèle
        et le potentiel de croissance de Talentsoft dans les années à venir pour
        devenir un leader international et un partenaire de premier plan pour
        les multinationales européennes » - Jean-Stéphane Arcis, CEO de
        Talentsoft. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Nam repudiandae veniam deserunt enim assumenda cumque nemo provident
        eaque quasi, aliquid reprehenderit molestias voluptate cum molestiae.
        Accusantium praesentium fuga ex aut.
      </div>
    </>
  );
};

export default Txt;

Txt.propTypes = {
  txt: PropTypes.string,
};