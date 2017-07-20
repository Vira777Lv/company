import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import * as companyActions from './redux/actions/companyActions'
import {default as store}  from './redux/store/store.js';

import App from './components/App';

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));


function run() {
  console.log('state is: ', store.getState());
  // store.subscribe(() => console.log('current state is: ', store.getState()));

  store.dispatch(companyActions.POST_COMPANIES(
    [
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
  ));

  store.dispatch(companyActions.UPDATE_COMPANY(
    {
      id: 2,
      companyName: 'Second New Name LTD',
    },
  ));

  store.dispatch(companyActions.DELETE_COMPANY(
    {
      id: 1
    },
  ));

}

if (module.hot) {
  module.hot.accept('./app.js', () => {
    setTimeout(run());
  })
}

run();
