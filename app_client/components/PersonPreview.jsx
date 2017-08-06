import React from 'react';
import { browserHistory } from 'react-router'

class PersonPreview extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email:  props.params.email,
      name: props.params.name,
      dob:  props.params.dob,
    };
  }

  handleSubmit(e){
    e.preventDefault();
    let email, dob, name;

    ({email, name, dob} = this.state);

    let success= (response) =>{
      browserHistory.push({pathname: '/', state:{
        successMsg: `User ${this.state.name} successfully created`
      }
      })
    };

    let err = (error) =>{
      browserHistory.push({pathname: '/error', state: {
        errors: JSON.parse(error.responseText).errors,
        email: email,
        name:name,
        dob: dob,
        successMsg: undefined
      }
      });
    };

    let formData = JSON.stringify({email: this.state.email, name: this.state.name, date_of_birth: this.state.dob});
    this.props.writeToAPI('post', '/persons', formData, success , err)
  }

  render() {
    return (
      <div id="person-preview">
        <h1>Preview</h1>
        <div><label>Name</label>{this.state.name}</div>
        <div><label>Email</label>{this.state.email}</div>
        <div><label>Birthday</label>{this.state.dob}</div>
        <button type="submit" onClick={this.handleSubmit.bind(this)} >Submit</button>
      </div>
    );
  }
}
export default PersonPreview
