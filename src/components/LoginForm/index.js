// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMess: '', errorMessDisplayed: false}

  setUsername = event => {
    this.setState({username: event.target.value})
  }

  setPassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserName = () => {
    const {username} = this.state
    return (
      <div className="input-container">
        <label className="label-text" htmlFor="username">
          USERNAME
        </label>
        <input
          value={username}
          onChange={this.setUsername}
          placeholder="Username"
          className="input-element"
          id="username"
          type="text"
        />
      </div>
    )
  }

  renderPassWord = () => {
    const {password} = this.state
    return (
      <div className="input-container">
        <label className="label-text" htmlFor="password">
          PASSWORD
        </label>
        <input
          value={password}
          onChange={this.setPassword}
          placeholder="Password"
          className="input-element"
          id="password"
          type="password"
        />
      </div>
    )
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = error => {
    this.setState({errorMessDisplayed: true, errorMess: error})
  }

  submitBtn = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {errorMessDisplayed, errorMess} = this.state
    return (
      <div className="bg-container">
        <div className="login-page-container">
          <div className="website-desk-img-container">
            <img
              className="website-desk-img"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
            />
          </div>
          <div className="website-img-form-container">
            <div className="website-img-form-card">
              <img
                className="website-logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
              />
              <img
                className="website-phone-img"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
                alt="website login"
              />
              <form onSubmit={this.submitBtn} className="form-container">
                {this.renderUserName()}
                {this.renderPassWord()}
                <button type="submit" className="submit-btn">
                  Login
                </button>
                {errorMessDisplayed && (
                  <p className="error-mess">{errorMess}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
