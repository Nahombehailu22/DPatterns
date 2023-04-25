import { MarkerType } from 'reactflow';
import ButtonEdge from '../Components/DashedEdge';
import ClassNode from '../Components/ClassNode';
import InterfaceNode from '../Components/InterfaceNode';
import CodeNode from '../Components/CodeNode';
import GenericClassNode from '../Components/GenericClassNode';


const contextDescription = 'Context stores a reference to one of the concrete state objects and delegates to it all state-specific work. The context communicates with the state object via the state interface. The context exposes a setter for passing it a new state object.'
const stateInterfaceDescription = 'The State interface declares the state-specific methods. These methods should make sense for all concrete states because you don’t want some of your states to have useless methods that will never be called.'
const concreteStateDescription = 'Concrete States provide their own implementations for the state-specific methods. To avoid duplication of similar code across multiple states, you may provide intermediate abstract classes that encapsulate some common behavior. State objects may store a backreference to the context object. Through this reference, the state can fetch any required info from the context object, as well as initiate state transitions. '
const clientDescription = 'Both context and concrete states can set the next state of the context and perform the actual state transition by replacing the state object linked to the context.'

const initialNodes = [
    {
        id: '0',
        type: 'class',
        data: { 
            class_name: 'Context',
            attributes:['state'],
            methods: ['Context','changeState','doThis','doThat'],
            handles: [0, 1, 1, 1, 0, 0, 0, 0],
            title: "Context",
            description: contextDescription,
            deletable: false,
        },
        position: { x: 0, y: 0 },
    },

    {
        id: '0a',
        type: 'interface',
        data: { 
            class_name: 'Strategy',
            methods: ['doThis', 'doThat'],
            handles: [0, 1, 0, 0, 0, 0, 0, 1],
            title: "State interface",
            description: stateInterfaceDescription,
            deletable: false,
            connectable: true
        },
        position: { x: 385, y: 0 },
      },

      {
        id: '1a',
        type: 'class',
        data: { 
            class_name: 'ConcreteState1',
            attributes: ['context'],
            methods: ['setContext', 'doThis', 'doThat'],
            handles: [0, 0, 0, 1, 1, 0, 0, 0],
            title: "Concrete State",
            description: concreteStateDescription,
            deletable: false,
        },
        position: { x: 275, y: 250 },
      },
      {
        id: '2a',
        type: 'class',
        data: { 
            class_name: 'ConcreteState2',
            attributes: ['context'],
            methods: ['setContext', 'doThis', 'doThat'],
            handles: [0, 0, 0, 1, 1, 0, 0, 0],
            title: "Concrete State",
            description: concreteStateDescription,
            deletable: false,
        },
            position: {x: 475, y: 250},
    },
    {
      id: 'c',
      type: 'client',
      data: { 
          class_name: 'Client',
          handles: [0, 1, 1, 0, 1],
          title: "Client",
          description: clientDescription,
      },
      position: { x: 5, y: 350},
    },
    {
        id: '0c',
        type: 'code',
        data: { 
            handles: [0, 0, 0, 0, 0, 0, 1, 0],
            connectedId: '0',
        },
        position: { x: -250, y: 80 },
      },

      {
        id: '0c2',
        type: 'code',
        data: { 
            handles: [0, 0, 0, 0, 0, 0, 1, 0],
            connectedId: '0',
        },
        position: { x: -250, y: 200 },
      },
      {
        id: 'sc',
        type: 'code',
        data: { 
            handles: [0, 0, 0, 0, 0, 0, 1, 0],
            connectedId: '0',
        },
        position: { x: -250, y: 325 },
      },

      {
        id: 'cc',
        type: 'code',
        data: { 
            handles: [0, 0, 0, 0, 0, 0, 1, 0],
            connectedId: '0',
        },
        position: { x: -250, y: 325 },
      },
]

const initialEdges = [

    { 
        id: '0-0a', 
        source: '0', 
        sourceHandle: 'r', 
        target: '0a', 
        type: 'straight',  
        targetHandle: 'w',
        markerEnd: { type: MarkerType.Arrow }    
    
    },
    
    { 
        id: '0a-1a', 
        source: '0a', 
        sourceHandle: 'd', 
        target: '1a', 
        type: 'smoothstep',  
        targetHandle: 'n',
        markerStart: { type: MarkerType.ArrowClosed },    
        animated: true
    },

    { 
        id: '0a-2a', 
        source: '0a', 
        sourceHandle: 'd', 
        target: '2a', 
        type: 'smoothstep',  
        targetHandle: 'n',
        markerStart: { type: MarkerType.ArrowClosed },    
        animated: true
    },
    { 
        id: '0-c', 
        source: '0', 
        sourceHandle: 'd', 
        target: 'c', 
        type: 'straight',  
        targetHandle: 'n',
        markerStart: { type: MarkerType.Arrow }    
    
    },
    { 
        id: '0-0c', 
        source: '0', 
        sourceHandle: 'l', 
        target: '0c', 
        type: 'straight',  
        targetHandle: 'e', 
        animated: true
    
    },
    { 
        id: 'c-cc', 
        source: 'c', 
        sourceHandle: 'l', 
        target: 'cc', 
        type: 'straight',  
        targetHandle: 'e', 
        animated: true
    
    }
]

const nodeTypes = {
    class: (props) => (
        <ClassNode
          {...props}
          color1={'#009688'}
          color2={'#4DB6AC'}
        />),
    interface: (props) => (
        <InterfaceNode
          {...props}
          color1={'#BF4D4D'}
          color2={'#CD7F7F'}
        />),
    client:(props) => (
        <GenericClassNode
        {...props}
        color1={'#009688'}
        color2={'#4DB6AC'}
        />
    ),
    code: (props) => (
        <CodeNode
          {...props}
          color1={'#757575'}
          color2={'#BDBDBD'}
        />),
}


const edgeTypes = {

}


export { initialNodes, initialEdges, nodeTypes, edgeTypes }