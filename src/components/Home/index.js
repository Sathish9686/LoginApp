import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Logout from '../Logout'
import Login from '../Login'

class Home extends Component {
  state = {IsloggedIn: false}

  onClicking = () => {
    this.setState(prevState => ({IsloggedIn: !prevState.IsloggedIn}))
  }

  render() {
    const {IsloggedIn} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <Message IsloggedIn={IsloggedIn} />

          {IsloggedIn ? (
            <Logout logout={this.onClicking} />
          ) : (
            <Login login={this.onClicking} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
