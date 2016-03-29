import request from 'superagent';

export const offers = {
  create(data, { recaptcha }, next) {
    request.post('http://board.pigwolf.com/api/offers')
      .query({ recaptcha })
      .send(data)
      .end(next);
  },
};
