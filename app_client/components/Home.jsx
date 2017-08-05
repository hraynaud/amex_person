import React from 'react';
import PersonForm from './PersonForm.jsx';
import createReactClass from 'create-react-class'

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <h1>Welcome, Hi nice to see you here</h1>
        <PersonForm origin={this.props.origin} writeToAPI={this.props.writeToAPI} readFromAPI={this.readFromAPI}/>
      </div>
    );
  }
}

export default Home