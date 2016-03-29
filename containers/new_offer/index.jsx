import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { newOffer, changeOffer, changeOfferSetItem, createOffer } from 'actions/offer';
import { changeOfferPage } from 'actions/offer_page';
import { changeRecaptchaToken } from 'actions/recaptcha_token';
import NewOffer from 'components/new_offer';

class NewOfferContainer extends Component {
  componentDidMount() {
    const intention = parseInt(this.props.location.query.intention, 10) || 1;
    this.props.onNewOffer({ intention });
  }

  render() {
    if (!this.props.offer) return <div />;
    return (
      <NewOffer {... this.props} />
    );
  }
}

NewOfferContainer.propTypes = {
  location: PropTypes.shape({
    query: PropTypes.shape({
      intention: PropTypes.string,
    }).isRequired,
  }).isRequired,
  offer: PropTypes.object,
  onNewOffer: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { isLoading, offer, offerCreated, recaptchaToken } = state;
  return {
    isLoading,
    page: state.offerPage,
    offer,
    offerCreated,
    recaptchaSitekey: '6Lf-DhsTAAAAANlnP7Hn4o5CNzDaah9h9CoNbyGX',
    recaptchaToken,
  };
}

function mapDispatchToProps(dispatch) {
  const eventValue = e => e.target.value;
  const numberValue = s => {
    const value = parseInt(s, 10);
    return isNaN(value) ? null : value;
  };
  const onChange = attribute =>
    value => dispatch(changeOffer({ [attribute]: value }));
  const makeStringChangeHandler = attribute =>
    e =>
      [e].map(eventValue)
        .map(onChange(attribute));
  const makeNumberChangeHandler = attribute =>
    e =>
      [e].map(eventValue)
        .map(numberValue)
        .map(onChange(attribute));

  return {
    onClickSave(e) {
      e.preventDefault();
      dispatch(changeOfferPage('contact_data'));
    },

    onNewOffer(data) {
      dispatch(newOffer(data));
    },

    onChangeOfferIntention: makeNumberChangeHandler('intention'),
    onChangeOfferIndustry: makeNumberChangeHandler('industry'),
    onChangeOfferWorkforce: makeNumberChangeHandler('workforce'),

    onChangeOfferOnlineMedia(e) {
      const { value, checked } = e.target;
      dispatch(changeOfferSetItem('onlineMedia', parseInt(value, 10), checked));
    },

    onChangeOfferCompanyType: makeNumberChangeHandler('companyType'),
    onChangeOfferName: makeStringChangeHandler('name'),
    onChangeOfferEmail: makeStringChangeHandler('email'),
    onChangeOfferTelephone: makeStringChangeHandler('telephone'),

    onChangeOfferAcceptsPrivacy(e) {
      dispatch(changeOffer({ acceptsPrivacy: e.target.checked }));
    },

    onChangeOfferNotes: makeStringChangeHandler('notes'),

    onClickCompanyDataLink(e) {
      e.preventDefault();
      dispatch(changeOfferPage('company_data'));
    },

    onSolveRecaptcha(token) {
      dispatch(changeRecaptchaToken(token));
    },

    onClickSubmit(e) {
      e.preventDefault();
      dispatch(createOffer());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewOfferContainer);
