'use strict';

const fs = require('fs');
const hbs = require('handlebars');
const nodemailer = require('nodemailer');
const config = require('config');

const intentions = require('lib/intentions');
const industries = require('lib/industries');
const workforces = require('lib/workforces');
const onlineMedia = require('lib/online_media');
const companyTypes = require('lib/company_types');

module.exports = sendMail;

const template = hbs.compile(fs.readFileSync(`${__dirname}/templates/new_offer.hbs`, 'utf-8'));
const transport = process.env.NODE_ENV !== 'production'
  ? nodemailer.createTransport(require('nodemailer-stub-transport')())
  : nodemailer.createTransport(config.get('nodemailer'));

function sendMail(offer) {
  const email = {
    subject: 'Neue Anfrage eingetroffen!',
    from: `${offer.name} <${offer.email}>`,
    to: 'info@pigwolf.com',
    text: template({
      offer,
      intention: intentions[offer.intention],
      industry: industries[offer.industry],
      workforce: workforces[offer.workforce],
      onlineMedia: offer.onlineMedia.map(i => onlineMedia[i]),
      companyType: companyTypes[offer.companyType],
    }),
  };
  transport.sendMail(email, (err, info) => {
    if (err) return console.error(err);
    if (process.env.NODE_ENV !== 'production') {
      console.log(info.response.toString());
    }
  });
}
