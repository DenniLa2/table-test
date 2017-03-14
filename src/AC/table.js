/**
 * Created by Denni Adam ( dennila2@ya.ru ) on 14.03.17.
 */

import { FETCH_TABLE } from '../constants';

export function fetchTable({sortBy, desc} = {}) {
  let url = 'http://services.odata.org/Northwind/Northwind.svc/Order_Details/?$format=json';
  if (sortBy) {
    url += `&$orderby=${sortBy}`;
  }
  if (desc) {
    url += ' desc';
  }

  return {
    apiMethod: 'GET',
    url,
    type: FETCH_TABLE
  }
}