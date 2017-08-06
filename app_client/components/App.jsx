import React, {Component} from 'react';
import Uri from 'jsuri';
import Reqwest from 'reqwest';

import createReactClass from 'create-react-class'

var App =  createReactClass({

  getDefaultProps: function() {
    return {origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''};
  },

  getInitialState: function() {
    return {};
  },

  componentWillMount: function() {
  },

  readFromAPI: function(url, successFunction) {
    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      headers: {'Authorization': sessionStorage.getItem('jwt')},
      success: successFunction,
      error: function(error) {
        console.error(url, error['response']);
      }
    });
  },

  writeToAPI: function(method, path, data, successFunction, errorFunction) {
    var url = this.props.origin + path;
    Reqwest({
      url: url,
      data: data,
      type: 'json',
      method: method,
      contentType: 'application/json',
      success: successFunction,
      error: errorFunction
    });
  },

  render: function () {
    return (
      <div id="app">
        <div id="content">
          {
            this.props.children && React.cloneElement(
              this.props.children,
              {
                readFromAPI: this.readFromAPI,
                writeToAPI: this.writeToAPI,
                origin: this.props.origin,
              }
            )
          }
        </div>
      </div>
    );
  }
});

export default App;
