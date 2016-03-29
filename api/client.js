import request from 'superagent';

export const offers = {
  create(data, { recaptcha }, next) {
    request.post('https://pigwolf-board-api.herokuapp.com/api/offers')
      .query({ recaptcha })
      .send(data)
      .end(next);
  },
};
