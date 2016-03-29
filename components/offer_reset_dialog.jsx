import React from 'react';

import Modal from './modal';

export default function OfferResetDialog() {
  return (
    <Modal title="Anfrage erfolgreich abgeschickt!">
      <p>
        Vielen Dank für Ihre Anfrage! Wir werden so schnell wie möglich auf Sie zurückkommen.
        Besuchen Sie uns doch derweil auf Facebook. Wir freuen uns immer über Feedback!
      </p>
      <p>
        <a href="https://facebook.com/pigwolfconsulting">Hier</a> geht's zu unserer Facebookseite.
      </p>
    </Modal>
  );
}
