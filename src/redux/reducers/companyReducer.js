import Immutable from 'seamless-immutable';
import createReducer from '../../utils/createReducer';
import * as Constants from '../../constants/companyConstants'

export const initialState = Immutable({
  companies: [],
  company: null,
  mainCompany: false,
  earnings: null,
  companyData: {},
});

export const companyReducer = createReducer(initialState, {
  [Constants.POST_COMPANIES](state,action) {
    let list = JSON.parse(JSON.stringify(state.companies));
    list = _.concat(list, action.payload);

    return state.set('companies', list);
  },

  [Constants.UPDATE_COMPANY](state, action) {
    let index = _.findIndex(state.companies, o => o.id === action.payload.id);
    let list = JSON.parse(JSON.stringify(state.companies));
    list[index] = action.payload;

    return state.set('companies', list);
  },

  [Constants.DELETE_COMPANY](state, action) {
    let index = _.findIndex(state.companies, o => o.id === action.payload);
    let list = JSON.parse(JSON.stringify(state.companies));
    list.splice(index, 1);

    return state.set('companies', list);
  }
});
