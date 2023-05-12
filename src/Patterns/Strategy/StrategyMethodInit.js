import { MarkerType } from 'reactflow';
import ClassNode from '../../Components/Nodes/ClassNode';
import InterfaceNode from '../../Components/Nodes/InterfaceNode';
import CodeNode from '../../Components/Nodes/CodeNode';
import GenericClassNode from '../../Components/Nodes/GenericClassNode';


const contextDescription = 'The Context maintains a reference to one of the concrete strategies and communicates with this object only via the strategy interface.'
const strategyInterfaceDescription = 'The Strategy interface is common to all concrete strategies. It declares a method the context uses to execute a strategy.'
const concreteStrategyDescription = 'Concrete Strategies implement different variations of an algorithm the context uses.'
const clientDescription = 'The Client creates a specific strategy object and passes it to the context. The context exposes a setter which lets clients replace the strategy associated with the context at runtime.'


const initialNodes = [
    {
        id: '0',
        type: 'class',
        data: { 
            class_name: 'Context',
            attributes:[
                {
                    id:'1',
                    name: 'strategy'
                }
            ],
            methods: [
                {
                    id:'1',
                    name: 'setStrategy'
                },
                {
                    id: '2',
                    name: 'doSomething'
                }
            ],
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
            methods: [
                {
                    id: '1',
                    name: 'execute'
                }
            ],
            handles: [0, 1, 0, 0, 0, 0, 0, 1],
            title: "Strategy interface",
            description: strategyInterfaceDescription,
            deletable: false,
            connectable: true
        },
        position: { x: 385, y: 0 },
      },

      {
        id: '1a',
        type: 'class',
        data: { 
            class_name: 'ConcreteStrategy1',
            methods: [
                {
                    id: '1',
                    name: 'execute'
                }
            ],
            handles: [0, 0, 0, 0, 1, 0, 0, 0],
            title: "Concrete Strategy",
            description: concreteStrategyDescription,
            deletable: false,
        },
        position: { x: 275, y: 250 },
      },
      {
        id: '2a',
        type: 'class',
        data: { 
            class_name: 'ConcreteStrategy2',
            methods: [
                {
                    id: '1',
                    name: 'execute'
                }
            ],
            handles: [0, 0, 0, 0, 1, 0, 0, 0],
            title: "Concrete Strategy",
            description: concreteStrategyDescription,
            deletable: false,
        },
            position: {x: 475, y: 250},
    },
    {
      id: 'c',
      type: 'client',
      data: { 
          class_name: 'Client',
          handles: [0, 0, 0, 1, 1],
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