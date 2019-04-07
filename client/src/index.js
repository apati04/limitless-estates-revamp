import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import HocTheme from './hoc/HocTheme';
import * as serviceWorker from './serviceWorker';
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
