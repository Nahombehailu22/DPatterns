import logo from './logo.svg';
import Flow from './nodes';
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
