import React, { PropTypes } from 'react';

export default function IconCard(props) {
  return (
    <div className="icon-card text-primary">
      <div className="icon-card__header">
        <i className={`icon-card__icon ${props.icon}`} />
      </div>
      <div className="icon-card__body">
        {props.children}
      </div>
    </div>
  );
}

IconCard.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.any,
};
