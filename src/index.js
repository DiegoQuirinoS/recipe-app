import React from 'react';
import ReactDOM from 'react-dom';
import RecipeApp from './RecipeApp';
import { Provider } from 'react-redux'
import store from './redux/store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RecipeApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

