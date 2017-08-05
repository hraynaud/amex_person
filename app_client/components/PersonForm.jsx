import React from 'react';
import createReactClass from 'create-react-class'
import { browserHistory } from 'react-router'


class CreatePerson extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      dateOfBirth: null,
      errors: []
    };
  }

  handlePreview(e){
    e.preventDefault();

    let path = `preview/${this.name.value}/${this.email.value}/${this.dateOfBirth.value}`;
    browserHistory.push(path);

  }

  render() {
    return (
      <div>
        <p>
          Create a Person
        </p>
        <form onSubmit={this.handlePreview.bind(this)}>

          <div>
            <label name="name">Name</label>
            <input type="text" name="name" ref={(name) => {this.name = name;}}  /> 
          </div>

          <div>
            <label name="email">Email</label>
            <input type="text" name="email" ref={(email) => {this.email = email;}} /> 
          </div>

          <div>
            <label name="date_of_birth">Date Of Birth</label>
            <input type="text" name="date_of_birth" ref={(dob) => {this.dateOfBirth = dob;}} /> 
          </div>

          <button type="submit" >Preview</button>
        </form>

      </div>


    );
  }
}

export default CreatePerson
