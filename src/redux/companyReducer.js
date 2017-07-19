import { combineReducers } from 'redux';
import companyReducer from './app/company';

export default combineReducers({
  company: companyReducer,
});
