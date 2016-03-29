export const CHANGE_RECAPTCHA_TOKEN = 'CHANGE_RECAPTCHA_TOKEN';

export function changeRecaptchaToken(token) {
  return {
    type: CHANGE_RECAPTCHA_TOKEN,
    token,
  };
}
