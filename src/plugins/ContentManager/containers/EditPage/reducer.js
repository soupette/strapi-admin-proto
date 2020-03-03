import { fromJS } from 'immutable';

const initialState = fromJS({
  initialData: {},
  modifiedData: {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'ON_CHANGE':
      return state.updateIn(
        ['modifiedData', ...action.keys.split('.')],
        () => action.value,
      );
    default:
      return state;
  }
};

export default reducer;
export { initialState };
