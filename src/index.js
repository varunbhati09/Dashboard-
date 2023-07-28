import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StyleSheetManager } from 'styled-components'; // Import StyleSheetManager
import store from './redux/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'responsive' && prop !== 'fixedHeader' && prop !== 'fixedHeaderScrollHeight'}>
      <App />
    </StyleSheetManager>
  </Provider>,
  document.getElementById('root')
);
