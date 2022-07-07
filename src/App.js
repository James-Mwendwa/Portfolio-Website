import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contacts from './Contacts'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Skills" component={Skills} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Contacts" component={Contacts} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
