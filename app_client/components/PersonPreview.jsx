import React from 'react';
import createReactClass from 'create-react-class'

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
    let formData = JSON.stringify({email: this.state.email, name: this.state.name, date_of_birth: this.state.dob});
    this.props.writeToAPI('post', '/persons', formData, function(response) { 
      console.log("Success")
    });
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
