import { createStore } from 'redux';
import reducer from './redux/companyReducer';
import initialState from './redux/initialAppState';
import { postCompanies, updateCompany, deleteCompany } from './redux/app/company';

const store = createStore(reducer, initialState);

console.log(initialState);
console.log('state is: ', store.getState());

store.subscribe(() => console.log('curent state is: ', store.getState()));

store.dispatch(postCompanies(
  {
    payload: [
      {
        id: 1,
        companyName: 'Main LTD',
        mainCompany: true,
        earnings: 120000,
      },
      {
        id: 2,
        companyName: 'Second LTD',
        earnings: 1000,
      },
    ],
  },
));

store.dispatch(updateCompany(
  {
    payload: {
      id: 2,
      companyName: 'Second New Name LTD',
    },
  },
));

store.dispatch(deleteCompany(
  { id: 1 },
));
