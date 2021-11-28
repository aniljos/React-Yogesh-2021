import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import App from './components/MuiApp';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AppTheme } from './context/AppTheme';
import AppThemeProvider from './context/AppThemeProvider';
import { LoadingSpinnerComponent } from './components/LoadingSpinnerComponent';
import { SnackbarProvider } from 'notistack';
import AppErrorBoundary from './components/AppErrorBoundary';

const initTheme = {
  mode: 'dark'
}


// ReactDOM.render(
//   <React.StrictMode>
//     <AppTheme.Provider value={initTheme}>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </AppTheme.Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


ReactDOM.render(
  <React.StrictMode>
    <AppThemeProvider>
      <Provider store={store}>
        <SnackbarProvider maxSnack={3} anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
          <AppErrorBoundary>
              <App />
          </AppErrorBoundary>

        </SnackbarProvider>
        <LoadingSpinnerComponent />
      </Provider>
    </AppThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
