import React from 'react';
import { signUpUser } from '../api/UserAPI';

const signupPage = (props) => {
  const { history } = props;
  const handleSignup = async (event) => {
    event.preventDefault();
    let userObject = {
      'username': event.target.username.value,
      'password': event.target.password.value,
    }

    let response = await signUpUser(userObject);
    let data = await response.json();
    if (data.error) {
      console.log('there was an error signing up');
    }else {
      history.push('/login')
    }
  }

  return (
    <div>
      Signup Page
      <form onSubmit={handleSignup}>
        <label>UserName:</label>
        <input type='text' placeholder='Username' name='username' />
        <label>Password:</label>
        <input type='password' name='password' />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default signupPage;