/*
*
* App reducer
*
*/
import { fromJS } from 'immutable';

const initialState = fromJS({});


const appReducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
    }
}

export default appReducer;
export { initialState };