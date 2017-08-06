import React from 'react';
import createReactClass from 'create-react-class'
import { browserHistory } from 'react-router'

import PersonForm from './PersonForm.jsx';

class ErrorForm extends React.Component {
  constructor(props){
    super(props);
  }


  render(){

    return (
      <div>
        <PersonForm origin={this.props.origin} 
          writeToAPI={this.props.writeToAPI} 
          readFromAPI={this.readFromAPI} 
          errors={this.state.errors}
        location={this.props.location} errMsg="Person could not be created due to the following errors"/>
      </div>
    )
  }
}

export default ErrorForm
