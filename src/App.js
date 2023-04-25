// import './App.css';
import "./index.css";
import Navbar from './navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ReactFlowProvider } from 'reactflow';
import FactoryMethod from './Factory/FactoryMethod';
import FactoryMethodDemo from './Factory/FactoryMethodDemo';

import AbstractFactoryMethodDemo from './Patterns/Abstract_Factory/AbstractFactoryMethodDemo.js';
import AbstractFactoryMethod from './Patterns/Abstract_Factory/AbstractFactoryMethod.js';

import SingletonMethod from './Singleton/SingletonMethod';
import SingletonMethodDemo from './Singleton/SingletonMethodDemo';

import ObserverMethod from './Patterns/Observer/ObserverMethod.js';
import ObserverMethodDemo from './Patterns/Observer/ObserverMethodDemo.js';

import BridgeMethodDemo from './Patterns/Bridge/BridgeMethodDemo.js';
import BridgeMethod from './Patterns/Bridge/BridgeMethod.js';
import StrategyMethod from './Strategy/StrategyMethod.js';
import StrategyMethodDemo from './Strategy/StrategyMethodDemo.js';
import AdapterMethod from './Patterns/Adapter/AdapterMethod.js';
import AdapterMethodDemo from './Patterns/Adapter/AdapterMethodDemo.js';


function App() {
 
  return (
    <ReactFlowProvider>
      <Router>
        <Switch>
          <Route path="/adaptermethoddemo" component={AdapterMethodDemo} />
          <Route path="/adaptermethod" component={AdapterMethod} />

          <Route exact path="/" component={Navbar} />
          <Route path="/factorymethoddemo" component={FactoryMethodDemo} />
          <Route path="/factorymethod" component={FactoryMethod} />

          <Route path="/abstractfactorymethoddemo" component={AbstractFactoryMethodDemo} />
          <Route path="/abstractfactorymethod" component={AbstractFactoryMethod} />
          
          <Route path="/singletonmethoddemo" component={SingletonMethodDemo} />
          <Route path="/singletonmethod" component={SingletonMethod} />

          <Route path="/observermethoddemo" component={ObserverMethodDemo} />
          <Route path="/observermethod" component={ObserverMethod} />
          
          <Route path="/strategymethoddemo" component={StrategyMethodDemo} />
          <Route path="/strategymethod" component={StrategyMethod} />



          <Route path="/bridgemethoddemo" component={BridgeMethodDemo} />
          <Route path="/bridgemethod" component={BridgeMethod} />
        </Switch>
      </Router>
    </ReactFlowProvider>
  );
}

export default App;
