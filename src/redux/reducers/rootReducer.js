import { combineReducers } from 'redux';
import  { companyReducer as companyData } from './companyReducer';

export default combineReducers({
  companyData,
});
