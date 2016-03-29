import React, { Component, PropTypes } from 'react';

export default class Recaptcha extends Component {
  componentWillMount() {
    this.callbackName = '__gRecaptchaCallback';
    window[this.callbackName] = this.onSuccess.bind(this);
  }

  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://www.google.com/recaptcha/api.js?hl=de');
    script.setAttribute('id', '_recaptcha_script');
    script.setAttribute('async', '');
    head.appendChild(script);
  }

  componentWillUnmount() {
    const scripts = document.querySelectorAll('head > #_recaptcha_script');
    [].forEach.call(scripts, (script) => {
      script.parentNode.removeChild(script);
    });
    delete window[this.callbackName];
  }

  onSuccess(... args) {
    this.props.onSolve(... args);
  }

  render() {
    return (
      <div
        className="g-recaptcha"
        data-callback={this.callbackName}
        data-sitekey={this.props.sitekey}
      />
    );
  }
}

Recaptcha.propTypes = {
  sitekey: PropTypes.string.isRequired,
  onSolve: PropTypes.func.isRequired,
};
