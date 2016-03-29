import React, { PropTypes } from 'react';

export default function ContactInputs(props) {
  return (
    <div>
      <div className="form-group">
        <label className="control-label">Name</label>
        <input
          className="form-control"
          type="name"
          value={props.name}
          onChange={props.onChangeName}
        />
      </div>
      <div className="form-group">
        <label className="control-label">E-Mail</label>
        <input
          className="form-control"
          type="email"
          value={props.email}
          onChange={props.onChangeEmail}
        />
      </div>
      <div className="form-group">
        <label className="control-label">Telefonnummer</label>
        <input
          className="form-control"
          type="phone"
          value={props.telephone}
          onChange={props.onChangeTelephone}
        />
      </div>
    </div>
  );
}

ContactInputs.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangeTelephone: PropTypes.func.isRequired,
};
