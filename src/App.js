import Home from './components/Home'
import "./App.css";
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Details from './components/Details';
import Details2 from './components/Details2';
import Pagelogin from './components/Pagelogin';
import singup from './components/singup';
import Offres from './components/Offres';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/Pagelogin" component={Pagelogin} />
        <Route path="/singup" component={singup}/>
        <Route path="/Offres" component={Offres} />
        <Route path="/Electricien" component={Details} />
        <Route path="/painture" component={Details} />
        <Route path="/Jardinier" component={Details} />
        <Route path="/Carpenter" component={Details} />
        <Route path="/Plumbier" component={Details} />
        <Route path="/Parabole" component={Details} />
        <Route path="/test" component={Details2} />
        
      </Switch>
    </Router>

  );
}

export default App;
