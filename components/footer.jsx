import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="row hidden-sm hidden-xs">
          <div className="col-md-4 col-md-offset-1">
            <div className="footer__right">
              <p>
                Sie haben eine Frage? Kontaktieren Sie uns. Wir freuen
                uns auf Sie!
              </p>
              <p>pigWOLF<br />Gustav-Maerz-Straße 8<br />88400 Biberach<br />E: info@pigwolf.com</p>
            </div>
          </div>
          <div className="col-md-5">
            <h2 className="footer__teaser uppercase text-white text-bold">
              LASSEN SIE UNS GEMEINSAM IHRE ZIELE ÜBERTREFFEN
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center">
            <p className="footer__copyright">
              All rights reserved. pigWOLF © 2016 |&nbsp;
              <a href="//www.pigwolf.com/privacy.html" className="footer__link">
                Datenschutz
              </a> |&nbsp;
              <a href="//www.pigwolf.com/impressum.html" className="footer__link">
                Impressum
              </a> |&nbsp;
              <a href="//www.pigwolf.com/disclaimer.html" className="footer__link">
                Haftungsausschluss
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
