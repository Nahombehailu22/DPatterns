import { MarkerType } from 'reactflow';
import ButtonEdge from '../Components/DashedEdge';
import ClassNode from '../Components/ClassNodeCopy';
import InterfaceNode from '../Components/InterfaceNodeCopy';
import CodeNode from '../Components/CodeNode';
import GenericClassNode from '../Components/GenericClassNode';


const clientDescription ='The Client is a class that contains the existing business logic of the program.'
const clientInterface='The Client Interface describes a protocol that other classes must follow to be able to collaborate with the client code.'
const adapterDescription = 'The Adapter is a class that’s able to work with both the client and the service: it implements the client interface, while wrapping the service object. The adapter receives calls from the client via the adapter interface and translates them into calls to the wrapped service object in a format it can understand.'
const serviceDescription = 'The Service is some useful class (usually 3rd-party or legacy). The client can’t use this class directly because it has an incompatible interface.'

const initialNodes = [
  {
    id: 'c',
    type: 'genericClass',
    data: { 
        class_name: 'Client',
        handles: [0, 0, 1, 0],
        title: "Client Class",
        description: clientDescription,
    },
    position: { x: -300, y: 40 },
  },
  {
    id: '0',
    type: 'interface',
    data: { 
        class_name: 'Client_Interface',
        methods: [
          {
            id: '1',
            name: 'method'
          } 
        ],
        handles: [0, 1, 0, 0, 0, 0, 0, 1],
        title: "Cleint Interface",
        description: clientInterface,
        deletable: false,
    },
    position: { x: 0, y: 0 },
  },
  {
    id: '1',
    type: 'class',
    data: { 
        class_name: 'Adapter',
        attributes: [
          {
            id: '1',
            name: 'adaptee'
          }
          ],
        methods: [
          {
            id: '1',
            name: 'method'
          } 
        ],
        handles: [0, 1, 1, 0, 1, 0, 0, 0],
        title: "Adapter",
        description: adapterDescription,
        deletable: false,
    },
    position: { x: 0, y: 250},
  },
  {
    id: '2',
    type: 'class',
    data: { 
        class_name: 'Service',
        methods: [
          {
            id: '1',
            name: 'serviceMethod'
          }
        ],
        handles: [0, 0, 0, 0, 0, 0, 0, 1],
        title: "Service",
        description: serviceDescription,
        deletable: false,
    },
    position: { x: 250, y: 250},
  },
  {
    id: '1a',
    type: 'code',
    data: { 
        handles: [0, 0, 0, 0, 1, 0, 0, 0],
        connectedId: '1',
    },
    position: { x: -50, y: 475},
  },

];

const initialEdges = [
  { 
    id: 'c-1', 
    source: 'c', 
    sourceHandle: 'r', 
    target: '0', 
    type: 'straight', 
    targetHandle: 'w',
    markerEnd: { type: MarkerType.Arrow },  
  },
  { 
    id: '0-1', 
    source: '0', 
    sourceHandle: 'd', 
    target: '1', 
    type: 'straight', 
    targetHandle: 'n',
    markerStart: { type: MarkerType.ArrowClosed },  
    animated: true,
  },
  { 
    id: '1-2', 
    source: '1', 
    sourceHandle: 'r', 
    target: '2', 
    type: 'straight', 
    targetHandle: 'w',
    markerEnd: { type: MarkerType.Arrow },  
  },
  {
    id: '1-1a',
    source: '1',
    sourceHandle: 'd',
    target: '1a',
    type: 'straight',
    targetHandle: 'n',
    animated: true,
  }
  
];

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
      code: (props) => (
          <CodeNode
            {...props}
            color1={'#757575'}
            color2={'#BDBDBD'}
          />),
      genericClass: (props) => (
          <GenericClassNode
            {...props}
            color1={'#009688'}
            color2={'#4DB6AC'}
          />),
};

const edgeTypes = {
    buttonedge: ButtonEdge,
  };


export { initialNodes, initialEdges, nodeTypes, edgeTypes };