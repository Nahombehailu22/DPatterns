import AddNodeOnEdgeDrop from './newNode';
import { ReactFlowProvider } from 'reactflow';

function App() {
  return (
  <ReactFlowProvider>
    <AddNodeOnEdgeDrop />
  </ReactFlowProvider>    
    );
}

export default App;
