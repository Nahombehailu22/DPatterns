// import './App.css';
import Navbar from './navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ReactFlowProvider } from 'reactflow';
import FactoryMethod from './FactoryMethod';
import FactoryMethodDemo from './FactoryMethodDemo';
import "./index.css";


function App() {
 
  return (
    <ReactFlowProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Navbar} />
          <Route path="/factorymethoddemo" component={FactoryMethodDemo} />
          <Route path="/factorymethod" component={FactoryMethod} />
        </Switch>
      </Router>
    </ReactFlowProvider>
  );
}

export default App;
