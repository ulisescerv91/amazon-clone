
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>

          <Route path='/checkout'>
            <Checkout />
          </Route>

          {/* Make sure the Default route is on the bottom */}
          <Route path='/'>
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
