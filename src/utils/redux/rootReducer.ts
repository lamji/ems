import { combineReducers } from 'redux';

// import slices
import cardReducer from './slices/mainSlices';
import commonReducer from './slices/common';

const rootReducer = combineReducers({
  cards: cardReducer,
  common: commonReducer,
});

export default rootReducer;
