import React from 'react';
import createReactClass from 'create-react-class'
import { browserHistory } from 'react-router'

import PersonForm from './PersonForm.jsx';

class ErrorForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      errors:[{
        field:  props.params.field, 
        message: props.params.message
      }],
    };
  }


  render(){

    return (
      <div>
        <h1>Person could not be create due to the following errors </h1>
        <PersonForm origin={this.props.origin} 
          writeToAPI={this.props.writeToAPI} 
          readFromAPI={this.readFromAPI} 
          errors={this.state.errors}
        location={this.props.location}/>
      </div>
    )
  }
}

export default ErrorForm
