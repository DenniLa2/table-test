/**
 * Created by Denni Adam ( dennila2@ya.ru ) on 14.03.17.
 */

import request from 'superagent'

import { START, FAIL, SUCCESS } from '../constants'

export default store => next => action => {
  const { apiMethod, url, data, type, ...rest } = action;
  if (!apiMethod) return next(action);

  next({ ...rest, url, data, type: type + START });

  function parseResponse(res) {
    let response;
    if (!res) return null;

    try {
      response = JSON.parse(res.text);
    } catch (e) {
      response = res.text;
    }

    return response;
  }

  request(apiMethod, url)
    .send(data)
    .accept('application/json')
    .end((err, res) => {
      if (err) {
        console.debug('error -->', err);
        const error = parseResponse(res);
        console.log('error.res ---', error);
        console.log('DATA ---', data);
        return next({ ...rest, type: type + FAIL, error });
      }
      if ((res.statusCode >= 200 && res.statusCode < 300) || res.statusCode === undefined) {
        const response = parseResponse(res);

        //console.log('RESPONSE ---', response);
        return next({ ...rest, type: type + SUCCESS, response, statusCode: res.statusCode })

      } else {
        console.warn('error -->', res);
        return next({ ...rest, type: type + FAIL, res });
      }
    });
}