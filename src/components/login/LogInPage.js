import React, { Component } from 'react'

class LogInPage extends Component {

  render() {
    
    return (
      <div>
        <form>
          <label>Email: <input type="email" name="email" /></label><br />
          <label>Password: <input type="password" name="password" /></label><br />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default LogInPage
