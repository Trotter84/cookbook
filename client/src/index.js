import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom'

/*
<Provider>
  <Router>
    <Theme>
      <CustomContext>
         <App />
      </CustomContext>
    </Theme>
  </Router>
</Provider>
*/

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
