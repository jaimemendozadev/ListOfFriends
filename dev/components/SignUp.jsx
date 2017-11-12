import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import handleAuth from '../actions/handleAuth.jsx';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);;
  }

  onSubmit(values){
    const {history} = this.props;
    this.props.handleAuth(values, ()=> {
      history.push('/');
    });
  }
  
  render(){
    const {handleSubmit} = this.props;

    console.log("this.props are ", this.props)

    return(
      <div>
        <h1>SignUp</h1>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field name="password" component="input" type="password" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'signup'
})(connect(null, {handleAuth})(SignUp));