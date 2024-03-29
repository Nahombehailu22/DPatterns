import { MarkerType } from 'reactflow';
import ButtonEdge from '../../Components/DashedEdge';
import ClassNode from '../../Components/Nodes/ClassNode';
import InterfaceNode from '../../Components/Nodes/InterfaceNode';
import CodeNode from '../../Components/Nodes/CodeNode';
import GenericClassNode from '../../Components/Nodes/GenericClassNode';

const singletonDescription = `The Singleton class declares the static method getInstance that returns the same instance of its own class.The Singleton’s constructor should be hidden from the client code. Calling the getInstance method should be the only way of getting the Singleton object.`;
const clientClassDescription = `The Client class accesses the Singleton instance through a static method or property, which creates the instance if it does not already exist, and returns it. The Client can then use the Singleton instance to access its methods and properties.`;

const initialNodes = [
  {
    id: '0',
    type: 'class',
    data: { 
        class_name: 'Singleton',
        attributes: [
          {
            id: '1',
            name: 'instance'
          }
          ],
        methods: [
          {
          id: '1',
          name: 'getInstance'
        }
        ],
        handles: [0, 1, 1, 0, 0, 0, 1, 1],
        title: "Singleton Class",
        description: singletonDescription,
        deletable: false,
    },
    position: { x: 0, y: 0 },
  },
  {
    id: '1',
    type: 'client',
    data: { 
        class_name: 'Client',
        handles: [0, 0, 1, 0],
        title: "Client Class",
        description: clientClassDescription,
    },
    position: { x: -300, y: 60 },
  },

  {
    id: '2',
    type: 'code',
    data: { 
        handles: [0, 0, 0, 0, 1, 0, 0, 0],
    },
    position: { x: 0, y: 250 },
  },

];

const initialEdges = [
  { 
    id: '1-1a',
    source: '0',  
    target: '0', 
    sourceHandle: 'r', 
    type: 'step', 
    targetHandle: 'e',
    markerEnd: { type: MarkerType.Arrow }, 
  },
  { 
    id: 'e1-1a',
    source: '1',  
    target: '0', 
    sourceHandle: 'r', 
    type: 'straight', 
    targetHandle: 'w',
    markerEnd: { type: MarkerType.Arrow }, 
  },
  { 
    id: '0-2',
    source: '0',  
    target: '2', 
    sourceHandle: 'd', 
    type: 'straight', 
    targetHandle: 'n',
    animated: true,
  },
  
];

const nodeTypes = {
    class: (props) => (
        <ClassNode
          {...props}
          color1={'#009688'}
          color2={'#4DB6AC'}
        />),

    client: (props) => (
          <GenericClassNode
            {...props}
            color1={'#009688'}
            color2={'#4DB6AC'}
          />),

    code: (props) => (
          <CodeNode
            {...props}
            color1={'#757575'}
            color2={'#BDBDBD'}
          />),
};

const edgeTypes = {
    buttonedge: ButtonEdge,
  };


export { initialNodes, initialEdges, nodeTypes, edgeTypes };