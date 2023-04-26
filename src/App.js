import './App.css';
import "./index.css";
import 'reactflow/dist/style.css';
import './Buttons.css';
import './Patterns_CSS/demo.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ReactFlowProvider } from 'reactflow';

import FactoryMethod from './Patterns/Factory/FactoryMethod';
import FactoryMethodDemo from './Patterns/Factory/FactoryMethodDemo';
import AbstractFactoryMethodDemo from './Patterns/Abstract_Factory/AbstractFactoryMethodDemo.js';
import AbstractFactoryMethod from './Patterns/Abstract_Factory/AbstractFactoryMethod.js';
import SingletonMethod from './Patterns/Singleton/SingletonMethod';
import SingletonMethodDemo from './Patterns/Singleton/SingletonMethodDemo';
import ObserverMethod from './Patterns/Observer/ObserverMethod.js';
import ObserverMethodDemo from './Patterns/Observer/ObserverMethodDemo.js';
import BridgeMethodDemo from './Patterns/Bridge/BridgeMethodDemo.js';
import BridgeMethod from './Patterns/Bridge/BridgeMethod.js';
import StrategyMethod from './Patterns/Strategy/StrategyMethod.js';
import StrategyMethodDemo from './Patterns/Strategy/StrategyMethodDemo.js';
import AdapterMethod from './Patterns/Adapter/AdapterMethod.js';
import AdapterMethodDemo from './Patterns/Adapter/AdapterMethodDemo.js';
import HomePage from "./Homepage";
import DecoratorMethodDemo from './Patterns/Decorator/DecoratorMethodDemo';
import DecoratorMethod from './Patterns/Decorator/DecoratorMethod';

function App() {
 
  return (
    <ReactFlowProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/adaptermethoddemo" component={AdapterMethodDemo} />
          <Route path="/adaptermethod" component={AdapterMethod} />

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

          <Route path="/adaptermethoddemo" component={AdapterMethodDemo} />
          <Route path="/adaptermethod" component={AdapterMethod} />

          <Route path="/bridgemethoddemo" component={BridgeMethodDemo} />
          <Route path="/bridgemethod" component={BridgeMethod} />

          <Route path="/decoratormethoddemo" component={DecoratorMethodDemo} />
          <Route path="/decoratormethod" component={DecoratorMethod} />
        </Switch>
      </Router>
    </ReactFlowProvider>
  );
}

export default App;
