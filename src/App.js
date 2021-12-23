import Home from './components/Home'
import "./App.css";
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Details from './components/Details';
import Details2 from './components/Details2';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/service1" component={Details} />
        <Route path="/service2" component={Details2} />
      </Switch>
    </Router>

  );
}

export default App;
