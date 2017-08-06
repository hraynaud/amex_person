import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import App from './components/App.jsx';
import Home from './components/Home.jsx';
import PersonPreview from './components/PersonPreview.jsx';
import ErrorForm from './components/ErrorForm.jsx';


export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute  component={Home} />
      <Route path="preview/:name/:email/(:dob)" component={PersonPreview}/>
      <Route path="error" component={ErrorForm}/>
    </Route>
  </Router>
);



