/**
 * Created by Denni Adam ( dennila2@ya.ru ) on 14.03.17.
 */
import { Map } from 'immutable'

import { FETCH_TABLE, START, SUCCESS, FAIL } from '../constants'

function table(state = Map({table: []}), action) {

  switch (action.type) {
    case FETCH_TABLE + START:
      return state.set('fetchTable', START);

    case FETCH_TABLE + SUCCESS:
      return state.set('fetchTable', SUCCESS).set('table', action.response.value);

    case FETCH_TABLE + FAIL:
      return state.set('fetchTable', FAIL);

    default:
      return state;
  }
}

export default table