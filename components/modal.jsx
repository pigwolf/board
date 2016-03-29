import React, { PropTypes } from 'react';

export default function Modal(props) {
  return (
    <div>
      <div className="modal-backdrop" />
      <div
        className="modal fade in animated fadeIn"
        style={{ display: 'block', paddingLeft: 0 }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="myModalLabel">{props.title}</h4>
            </div>
            <div className="modal-body">
              {props.children}
            </div>
            <div className="modal-footer">
              <a className="btn btn-primary" href="//www.pigwolf.com">Zurück zur Website</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};
