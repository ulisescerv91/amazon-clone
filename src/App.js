
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/checkout'>
            <Header />

            <Checkout />
          </Route>

          {/* Make sure the Default route is on the bottom */}
          <Route path='/'>
            <Header />

            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
