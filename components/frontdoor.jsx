import React from 'react';
import { Link } from 'react-router';

import IconCard from './icon_card';

export default function Frontdoor() {
  return (
    <div className="frontdoor">
      <div className="jumbotron">
        <h2>Sie wissen was Sie wollen!</h2>
        <p>
          Erfolg. Geben Sie uns einen kleinen Einblick in Ihre Interessen
          und wir zeigen Ihnen, wie Sie Ihre Geschäfte moderner und effizienter gestalten.
        </p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Link to="/offers/new?intention=1" className="no-text-decoration">
            <IconCard icon="fa fa-thumbs-up">
              <h3>Kunden finden</h3>
              <p>Ihr Hauptinteresse ist es neue Kunden anzusprechen und zu gewinnen</p>
            </IconCard>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/offers/new?intention=2" className="no-text-decoration">
            <IconCard icon="fa fa-users">
              <h3>Bewerber finden</h3>
              <p>
                Ihr Hauptinteresse ist es neue qualifizierte Arbeitskräfte für Ihr Unternehmen zu
                gewinnen
              </p>
            </IconCard>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/offers/new?intention=3" className="no-text-decoration">
            <IconCard icon="fa fa-bolt">
              <h3>Kundeninteraktion</h3>
              <p>Ihr Hauptinteresse ist es mit Ihren Kunden zu interagieren</p>
            </IconCard>
          </Link>
        </div>
      </div>
    </div>
  );
}
