import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Navbar from '../navbar/Navbar'

import Home from '../../routes/home/home'
import About from '../../routes/about/about'

class Application extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url
  }

  render() {
    return (
      <div id="app">
        <Navbar />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <About path="/about" />
        </Router>
      </div>
    )
  }
}

export default Application
