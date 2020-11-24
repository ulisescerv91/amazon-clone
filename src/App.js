
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>

          <Route path='/checkout'>
            <h1>Checkout</h1>
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
