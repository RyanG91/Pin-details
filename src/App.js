import React, { Component } from 'react';
import RostersPage from './components/roster/RostersPage'
import LogInPage from './components/login/LogInPage'
import OfficePin from './components/officepin/OfficePin'

class App extends Component {
  render() {
    return (
      <div>

        <div>
          <OfficePin />
        </div>

      </div>
    );
  }
}


export default App;
