/*
 *
 * App reducer
 *
 */
import { fromJS } from 'immutable';

const initialState = fromJS({
  plugins: {},
});

const appReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PLUGIN':
      return state.updateIn(['plugins', ...action.keys], () => fromJS(action.value));
    default:
      return state;
  }
};

export default appReducer;
export { initialState };
