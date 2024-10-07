import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import GlobalStyle from './styles/globalStyles';
import { SnackbarProvider } from 'notistack';
import { SnackbarUtilsConfigurator } from '../src/components/alert/index';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <SnackbarProvider maxSnack={3}>
      <SnackbarUtilsConfigurator />
      <GlobalStyle />
      <App />
    </SnackbarProvider>
  </Provider>
);
