import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ReactFlowProvider } from 'reactflow';
import FactoryMethod from './FactoryMethod';
import FactoryMethodDemo from './FactoryMethodDemo';

function App() {
  return (
    <ReactFlowProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={FactoryMethodDemo} />
          <Route path="/factorymethod" component={FactoryMethod} />
        </Switch>
      </Router>
    </ReactFlowProvider>
  );
}

export default App;
