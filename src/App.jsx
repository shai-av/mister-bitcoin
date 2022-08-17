import { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/styles/styles.scss';
import { Statistics } from './pages/Statistic';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { ContactDetails } from './pages/ContactDetails';
import { AppHeader } from './cmps/AppHeader';
import { ContactEdit } from './pages/ContactEdit';
import { userService } from './services/userService';
import { Signup } from './pages/Signup';


export class App extends Component {
  state = {
    loggedinUser: null
  }

componentDidMount(){
  this.setState({loggedinUser:userService.getUser()})
}

  setUser = (username) => {
    const loggedinUser = userService.signup(username)
    this.setState({ loggedinUser })
  }

  render() {
    return (
      <Router>
        <div className="main-app">
          <AppHeader />
          {this.state.loggedinUser ? <main className='container'>
            <Switch>
              <Route path='/contact/edit/:id?' component={ContactEdit} />
              <Route path='/contact/:id' component={ContactDetails} />
              <Route path='/contact/' component={Contact} />
              <Route path='/statistics/' component={Statistics} />
              <Route path='/' component={Home} />
            </Switch>
          </main> : <Signup setUser={this.setUser} />}
          <footer>
            <section className='container'>
              copyrights 2022 &copy;
            </section>
          </footer>
        </div>
      </Router>
    );
  }

}

export default App