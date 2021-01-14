
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import Movievs from './movievs/Movievs';
import Navigation from './navigation/Navigation';

function App() {
  return (
    <div className="App">
    <Navigation/>
    <hr/>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/movies' component={Movievs}/>
    </Switch>
    </div>
  );
}

export default App;
