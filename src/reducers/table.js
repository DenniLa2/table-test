/**
 * Created by Denni Adam ( dennila2@ya.ru ) on 14.03.17.
 */

import { FETCH_TABLE, START, SUCCESS, FAIL } from '../constants'

function table(state = {table: []}, action) {
  switch (action.type) {
    case FETCH_TABLE + START:
      return { ...state, fetchTable: START};
    case FETCH_TABLE + SUCCESS:
      return { ...state, fetchTable: SUCCESS, table: action.response.value};
    case FETCH_TABLE + FAIL:
      return { ...state, fetchTable: FAIL};

    default:
      return state;
  }
}

export default table