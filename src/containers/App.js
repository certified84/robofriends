import './App.css';
import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import 'tachyons';

class App extends Component{
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {this.setState({robots: users})});
  }

  onSearchChanged = (event) => {
    this.setState({ searchField: event.target.value});
    console.log(event.target.value);
  }

  render() {
    const {robots, searchField} = this.state;
    const filteredRobots = robots.filter((robot) => {
      return (robot.name.toLowerCase().includes(searchField.toLowerCase())) || 
      (robot.email.toLowerCase().includes(searchField.toLowerCase())) ||
      (robot.username.toLowerCase().includes(searchField.toLowerCase()));
    });
    
    return !robots.length ? (
          <div className='tc'>
            <h1>Loading...</h1>
          </div>
        ) : (
        <div className="App">
          <h1 className="heading f1"> RoboFriends </h1>
          <SearchBox searchChanged={this.onSearchChanged}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
    );
  };
}

export default App;
