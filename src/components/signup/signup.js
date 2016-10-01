import React, { PropTypes } from 'react';
import {
  authForm,
  labeled,
  inputField,
  noSubmit,
  submitButton,
  error
} from '../../styles/styles.css';


const { func, string } = PropTypes;

Signup.propTypes = {
  signupUser: func.isRequired,
  errorMessage: string.isRequired,
  username: string.isRequired,
  email: string.isRequired,
  password: string.isRequired,
  usernameError: string.isRequired,
  emailError: string.isRequired,
  passwordError: string.isRequired,
  updateUsername: func.isRequired,
  updateEmail: func.isRequired,
  updatePassword: func.isRequired,
  warnUsernameError: func.isRequired,
  warnEmailError: func.isRequired,
  warnPasswordError: func.isRequired
}

function SubmitButton (props) {
  if (
    props.usernameError ||
    props.emailError ||
    props.passwordError
  ) {
    return (
      <button
        action='submit'
        disabled={ "disabled" }
        className={ noSubmit }
        role='button'>Not ready</button>
    )
  } else {
    return (
      <button
        action='submit'
        className={ submitButton }
        role='button'>Submit</button>
    )
  }
}

export default function Signup (props) {
  function handleFormSubmit(e) {
    e.preventDefault();

    return props.signupUser({
      username: props.username,
      email: props.email,
      password: props.password
    });
  }
  return (
    <form onSubmit={ handleFormSubmit } className={ authForm }>
        <label className={ labeled }>Username<br />
          <input
            id='signUpUsername'
            name='signUpUsername'
            className={ inputField }
            type='text'
            placeholder='Your Username'
            onChange={ (e) => props.updateUsername(e.target.value) }
            onBlur={ (e) => e.target.value.length === 0 ? props.warnUsernameError(e.target.value): null } 
            required={ true }
            autoFocus={ true } />
        </label>
        <span className={ error }>{ props.usernameError ? props.usernameError: ''}</span>
        
        <label className={ labeled }>Email<br />
          <input
            id='signUpEmail'
            name='signUpEmail'
            className={ inputField }
            type='email'
            placeholder='Your Email'
            onChange={ (e) => props.updateEmail(e.target.value) }
            onBlur={ (e) => e.target.value.length === 0 ? props.warnEmailError(e.target.value): null } 
            required={ true } />
        </label>
        <span className={ error }>{ props.emailError ? props.emailError: ''}</span>

        <label className={ labeled }>Password<br />
          <input
            id='signUpPassword'
            name='signUpPassword'
            className={ inputField }
            type='password'
            placeholder='Secure Password'
            onChange={ (e) => props.updatePassword(e.target.value) }
            onBlur={ (e) => e.target.value.length === 0 ? props.warnPasswordError(e.target.value): null } 
            required={ true } />
        </label>
        <span className={ error }>{ props.passwordError ? props.passwordError: ''}</span>

        <br />
        <SubmitButton
          usernameError={ props.usernameError }
          emailError={ props.emailError }
          passwordError={ props.passwordError } /><br />

        <span className={ error }>{ props.errorMessage ? props.errorMessage: ''}</span><br />

    </form>
  )
};