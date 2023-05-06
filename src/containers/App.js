import './App.css';
import { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import 'tachyons';

export default function App () {

  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {setRobots(users)});
  }, []);

  const onSearchChanged = (event) => {
    setSearchField(event.target.value);
    console.log(event.target.value);
  }

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
        <SearchBox searchChanged={onSearchChanged}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
  );
}
