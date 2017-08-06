import React, {Component} from 'react';
import Uri from 'jsuri';
import Reqwest from 'reqwest';


class App extends React.Component {

  constructor(props){
    super(props);
  }


  readFromAPI (url, successFunction) {
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
  }

  writeToAPI (method, path, data, successFunction, errorFunction) {
    var url = this.origin + path;
    Reqwest({
      url: url,
      data: data,
      type: 'json',
      method: method,
      contentType: 'application/json',
      success: successFunction,
      error: errorFunction
    });
  }

  render () {
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
};
App.propTypes = {
 origin: React.PropTypes.string
};

App.defaultProps = {
 origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''
};


export default App;
