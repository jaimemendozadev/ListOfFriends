import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      Email: 'Enter your email',
      Password: ''
    }
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleEmail(event){
    this.setState({
      Email: event.target.value
    });
  }

  handlePassword(event){
    this.setState({
      Password: event.target.value
    });
  }

  handleSignIn(event){
    event.preventDefault();
    console.log("call action creator to api")
  }
  
  render(){
    console.log("this.props are ", this.props)
    const {handleSubmit} = this.props;

    return(
      <div>
        <h1>SignIn</h1>
        <form onSubmit={handleSubmit(this.handleSignIn)}>
          <fieldset>
          <label>Email</label>
          <input value={this.state.Email} onChange={this.handleEmail} />
          </fieldset>

          <fieldset>
          <label>Password</label>
          <input type="password" value={this.state.Password} onChange={this.handlePassword} />
          </fieldset>
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}




export default reduxForm({
  form: 'signin'
})(SignIn);