import { MarkerType } from 'reactflow';
import ButtonEdge from '../Components/ButtonEdge';
import ClassNode from '../Components/ClassNode';
import ClientClassNode from '../Components/ClientClassNode';


const singletonDescription = `The Singleton class declares the static method getInstance that returns the same instance of its own class.The Singleton’s constructor should be hidden from the client code. Calling the getInstance method should be the only way of getting the Singleton object.`;
const clientClassDescription = `The Client class accesses the Singleton instance through a static method or property, which creates the instance if it does not already exist, and returns it. The Client can then use the Singleton instance to access its methods and properties.`;

const initialNodes = [
  {
    id: '0',
    type: 'class',
    data: { 
        class_name: 'Singleton',
        attributes: ['instance'],
        methods: ['getInstance'],
        handles: [0, 0, 0, 1],
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

];

const initialEdges = [
  { 
    id: 'e1-1a',
    source: '1',  
    target: '0', 
    sourceHandle: 'r', 
    type: 'straight', 
    targetHandle: 'l',
    markerEnd: { type: MarkerType.Arrow }, 
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
          <ClientClassNode
            {...props}
            color1={'#009688'}
            color2={'#4DB6AC'}
          />),
};

const edgeTypes = {
    buttonedge: ButtonEdge,
  };


export { initialNodes, initialEdges, nodeTypes, edgeTypes };