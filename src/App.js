// import './App.css';
import Navbar from './navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ReactFlowProvider } from 'reactflow';
import FactoryMethod from './Factory/FactoryMethod';
import FactoryMethodDemo from './Factory/FactoryMethodDemo';
import AbstractFactoryMethod from './Abstract_Factory/AbstractFactoryMethod.js';
import AbstractFactoryMethodDemo from './Abstract_Factory/AbstractFactoryMethodDemo.js';
import SingletonMethod from './Singleton/SingletonMethod';
import SingletonMethodDemo from './Singleton/SingletonMethodDemo';
import AdapterMethodDemo from './Adapter/AdapterMethodDemo.js';

import "./index.css";
import AdapterMethod from './Adapter/AdapterMethod.js';
import ObserverMethod from './Observer/ObserverMethod.js';

function App() {
 
  return (
    <ReactFlowProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Navbar} />
          <Route path="/factorymethoddemo" component={FactoryMethodDemo} />
          <Route path="/factorymethod" component={FactoryMethod} />

          <Route path="/abstractfactorymethoddemo" component={AbstractFactoryMethodDemo} />
          <Route path="/abstractfactorymethod" component={AbstractFactoryMethod} />
          
          <Route path="/singletonmethoddemo" component={SingletonMethodDemo} />
          <Route path="/singletonmethod" component={SingletonMethod} />

          {/* <Route path="/singletonmethoddemo" component={SingletonMethodDem} /> */}
          <Route path="/observermethod" component={ObserverMethod} />
       
          <Route path="/adaptermethoddemo" component={AdapterMethodDemo} />
          <Route path="/adaptermethod" component={AdapterMethod} />
        </Switch>
      </Router>
    </ReactFlowProvider>
  );
}

export default App;
