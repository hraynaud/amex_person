import React from 'react';
import { browserHistory } from 'react-router'


class PersonForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      dob: '',
      errors: {}
    };
    if (this.props.location && this.props.location.state){
      this.state = this.props.location.state;
    }
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handlePreview(e){
    e.preventDefault();
    let path = `preview/${this.name.value}/${this.email.value}/${this.dob.value}`;
    browserHistory.push(path);
  }

  render() {
    let emailError = this.state.errors &&  this.state.errors.email ? "show" : "hide";
    let msg = this.state.successMsg || this.props.errMsg
    return (
      <div>
        <h3>{msg}</h3>
        <p>
          Create a Person
        </p>
        <form onSubmit={this.handlePreview.bind(this)}>
          <div>
            <label name="name">Name</label>
            <input type="text"  value={this.state.name} name="name" onChange={(value) => this.onChange(value)} ref={(name) => {this.name = name;}}  /> 
          </div>

          <div>
            <label name="email">Email</label>
            <input type="text" value={this.state.email} name="email"  onChange={(value) => this.onChange(value)} ref={(email) => {this.email = email;}} /> 
            <span className={`error ${emailError}`}>Email has already been taken </span>
          </div>

          <div>
            <label name="date_of_birth">Date Of Birth</label>
            <input type="text" value={this.state.dob} name="date_of_birth"  onChange={(value) => this.onChange(value)} ref={(dob) => {this.dob = dob;}} /> 
          </div>

          <button type="submit" >Preview</button>
        </form>
      </div>

    );
  }
}

export default PersonForm
