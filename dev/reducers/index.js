import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

const RootReducer = combineReducers({
  feed: [],
  forms: formReducer
});

export default RootReducer;