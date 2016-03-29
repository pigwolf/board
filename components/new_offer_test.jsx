import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import tap from 'tap';

import { initialOffer } from 'reducers/offer';
import NewOffer from './new_offer';

const defaultProps = {
  isLoading: false,
  page: 'company_data',
  offer: initialOffer,
  offerCreated: false,
  recaptchaSitekey: 'key',
  recaptchaToken: null,
  onClickSave: () => {},
  onChangeOfferIntention: () => {},
  onChangeOfferIndustry: () => {},
  onChangeOfferWorkforce: () => {},
  onChangeOfferOnlineMedia: () => {},
  onChangeOfferCompanyType: () => {},
  onChangeOfferName: () => {},
  onChangeOfferEmail: () => {},
  onChangeOfferTelephone: () => {},
  onChangeOfferAcceptsPrivacy: () => {},
  onChangeOfferNotes: () => {},
  onClickCompanyDataLink: () => {},
  onSolveRecaptcha: () => {},
  onClickSubmit: () => {},
};

tap.test('shows the company data form', (t) => {
  t.plan(3);
  const props = Object.assign({}, defaultProps, {
    offer: Object.assign({}, initialOffer, {
      intention: 1,
      industry: 2,
      workforce: 5,
    }),
  });
  const renderer = createRenderer();
  renderer.render(<NewOffer {... props} />);
  const newOffer = renderer.getRenderOutput();
  t.equal(newOffer.props.className, 'new-offer');
  const forms = newOffer.props.children.slice(1);
  t.equal(forms[1], null);
  const companyDataForm = forms[0];
  t.deepEqual(companyDataForm.props, {
    offer: props.offer,
    onClickSave: props.onClickSave,
    onChangeOfferIntention: props.onChangeOfferIntention,
    onChangeOfferIndustry: props.onChangeOfferIndustry,
    onChangeOfferWorkforce: props.onChangeOfferWorkforce,
    onChangeOfferOnlineMedia: props.onChangeOfferOnlineMedia,
    onChangeOfferCompanyType: props.onChangeOfferCompanyType,
  });
});

tap.test('shows the contact data form', (t) => {
  t.plan(3);
  const props = Object.assign({}, defaultProps, {
    page: 'contact_data',
    offer: Object.assign({}, initialOffer, {
      intention: 1,
      industry: 2,
      workforce: 5,
    }),
    recaptchaToken: 'token',
    offerCreated: true,
  });
  const renderer = createRenderer();
  renderer.render(<NewOffer {... props} />);
  const newOffer = renderer.getRenderOutput();
  t.equal(newOffer.props.className, 'new-offer');
  const forms = newOffer.props.children.slice(1);
  t.equal(forms[0], null);
  const contactDataForm = forms[1];
  t.deepEqual(contactDataForm.props, {
    isLoading: props.isLoading,
    offer: props.offer,
    recaptchaSitekey: props.recaptchaSitekey,
    recaptchaToken: props.recaptchaToken,
    recaptchaHidden: true,
    onChangeOfferName: props.onChangeOfferName,
    onChangeOfferEmail: props.onChangeOfferEmail,
    onChangeOfferTelephone: props.onChangeOfferTelephone,
    onChangeOfferAcceptsPrivacy: props.onChangeOfferAcceptsPrivacy,
    onChangeOfferNotes: props.onChangeOfferNotes,
    onClickCompanyDataLink: props.onClickCompanyDataLink,
    onSolveRecaptcha: props.onSolveRecaptcha,
    onClickSubmit: props.onClickSubmit,
  });
});
