import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import HocTheme from './hoc/HocTheme';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontSize: '24px'
  }
});
function MyApp() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  );
}
// function AppProvider() {
//   return (
//     <HocTheme title='Limitless Estates LLC'>
//       <App />
//     </HocTheme>
//   );
// }
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
