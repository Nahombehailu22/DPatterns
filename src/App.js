// import './App.css';
import Navbar from './navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ReactFlowProvider } from 'reactflow';
import FactoryMethod from './Factory/FactoryMethod';
import FactoryMethodDemo from './Factory/FactoryMethodDemo';
import SingletonMethod from './Singleton/SingletonMethod';
import SingletonMethodDemo from './Singleton/SingletonMethodDemo';
import "./index.css";


function App() {
 
  return (
    <ReactFlowProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Navbar} />
          <Route path="/factorymethoddemo" component={FactoryMethodDemo} />
          <Route path="/factorymethod" component={FactoryMethod} />
          
          <Route path="/singletonmethoddemo" component={SingletonMethodDemo} />
          <Route path="/singletonmethod" component={SingletonMethod} />
        </Switch>
      </Router>
    </ReactFlowProvider>
  );
}

export default App;
