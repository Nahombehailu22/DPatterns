import { ReactFlowProvider } from 'reactflow';
import FactoryMethod from './FactoryMethod';
import UseFactoryMethod from './FactoryMethodValues';

function App() {
  return (
  <ReactFlowProvider>
    <FactoryMethod/>
  </ReactFlowProvider>    
    );
}

export default App;
