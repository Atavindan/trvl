import React from "react"
import "../../App.css"
import "./SignUp.css"
import { Button } from "../Button.js"

function SignUp() {
  return (
    <div className="sign-up">
      <div className="sign-container">
        <div className="sign-content-container">
          <ul>
            <li>
              <a className="navbar-logo" href="/">
                TRVL <i className="fab fa-typo3"></i>
              </a>
            </li>
            <li>
              <a href="/">TRVL helps you connect and share with the people in your life.</a>
            </li>
          </ul>
        </div>
        <div className="sign-form-container">
          <div className="inner-sign-form">
            <form>
              <input type="email" placeholder="Email address or phone number" />
              <input type="password" placeholder="password" />
              <Button buttonStyle="btn--outline">Login</Button>
              
              <div className="account-creation">
              <a href="javascripts:;">Forget Password</a>
                <a href="javascripts:;">Create New Account</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
