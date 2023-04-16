import { MarkerType } from 'reactflow';
import ButtonEdge from '../Components/DashedEdge';
import ClassNode from '../Components/ClassNode';
import InterfaceNode from '../Components/InterfaceNode';
import CodeNode from '../Components/CodeNode';
import GenericClassNode from '../Components/GenericClassNode';


const abstractFactoryDescription = `The interface that defines a set of methods for creating abstract product objects. The specific type of product created is not determined until runtime.`;
const concreteFactoryDescription = 'The implementation of the Abstract Factory interface that creates concrete product objects. Each concrete factory corresponds to a particular variant of the product.';
const abstractProductDescription = 'The interface that defines a set of methods that are common to all variants of a product. Each concrete product implements this interface.'
const concreteProductDescription = 'The implementation of the Abstract Product interface that represents a specific variant of the product.'
const clientDescription = 'The class that uses the Abstract Factory interface and the Abstract Product interface to create and use product objects. The client code does not know the specific classes of the objects it creates, only their common interfaces.'

const initialNodes = [
  {
    id: '0',
    type: 'interface',
    data: { 
        class_name: 'AbstractFactory',
        methods: ['createProductA', 'createProductB'],
        handles: [1, 1, 1, 0, 0, 0, 0, 0],
        title: "Abstract Factory",
        description: abstractFactoryDescription,
        deletable: false,
    },
    position: { x: 0, y: 0 },
  },
  {
    id: '1',
    type: 'class',
    data: { 
        class_name: 'ConcreteFactory1',
        methods: ['createProductA', 'createProductB'],
        handles: [0, 0, 0, 1, 0, 1, 0, 0],
        title: "Concrete Factory",
        description: concreteFactoryDescription,
        deletable: false,
    },
    position: { x: 0, y: -250},
  },
  {
    id: '2',
    type: 'class',
    data: { 
        class_name: 'ConcreteFactory2',
        methods: ['createProductA', 'createProductB'],
        handles: [0, 0, 0, 1, 1, 0, 0, 0],
        title: "Concrete Factory",
        description: concreteFactoryDescription,
        deletable: false,
    },
    position: { x: 0, y: 250},
  },
  {
    id: 'c',
    type: 'class',
    data: { 
        class_name: 'Client',
        attributes: ['factory'],
        methods: ['Client', 'someOperation'],
        handles: [0, 1, 0, 0, 0, 0, 0, 1],
        title: "Client",
        description: clientDescription,
        deletable: false,
    },
    position: { x: 300, y: 0},
  },
  {
    id: '0a',
    type: 'genericInterface',
    data: { 
        class_name: 'ProductA',
        handles: [1, 1, 0, 0, 0, 0, 0, 0],
        title: "Abstract Product",
        description: abstractProductDescription,
    },
    position: { x: -215, y: 60},
  },
  {
    id: '0a1',
    type: 'genericClass',
    data: { 
        class_name: 'ConcreteProductA1',
        handles: [0, 0, 0, 0, 1, 1, 0, 0],
        title: "Concrete Product",
        description: concreteProductDescription,
    },
    position: { x: -225, y: -125},
  },
  {
    id: '0a2',
    type: 'genericClass',
    data: { 
        class_name: 'ConcreteProductA2',
        handles: [0, 0, 0, 0, 1, 1, 0, 0],
        title: "Concrete Product",
        description: concreteProductDescription,
    },
    position: { x: -225, y: 240},
  },
  {
    id: '0b',
    type: 'genericInterface',
    data: { 
        class_name: 'ProductB',
        handles: [1, 1, 0, 0, 0, 0, 0, 0],
        title: "Abstract Product",
        description: abstractProductDescription,
    },
    position: { x: -440, y: 60},
  },
  {
    id: '0b1',
    type: 'genericClass',
    data: { 
        class_name: 'ConcreteProductB1',
        handles: [0, 0, 0, 0, 1, 1, 0, 0],
        title: "Concrete Product",
        description: concreteProductDescription,
    },
    position: { x: -450, y: -125},
  },
  {
    id: '0b2',
    type: 'genericClass',
    data: { 
        class_name: 'ConcreteProductB2',
        handles: [0, 0, 0, 0, 1, 1, 0, 0],
        title: "Concrete Product",
        description: concreteProductDescription,
    },
    position: { x: -450, y: 240},
  },
  {
    id: 'c1',
    type: 'code',
    data: { 
        handles: [0, 0, 0, 0, 1, 0, 0, 0],
        connectedId: '0',
    },
    position: { x: 275, y: 250},
  },
  {
    id: '2a',
    type: 'code',
    data: { 
        handles: [0, 0, 0, 0, 0, 0, 1, 0],
        connectedId: '2',
    },
    position: { x: -225, y: 360},
  },
];

const initialEdges = [
  { 
    id: '0-1', 
    source: '0', 
    sourceHandle: 'u', 
    target: '1', 
    type: 'buttonedge', 
    targetHandle: 's',
    markerStart: { type: MarkerType.Arrow },
    animated: true,   
  },
  { 
    id: '0-2', 
    source: '0', 
    sourceHandle: 'd', 
    target: '2', 
    type: 'buttonedge', 
    targetHandle: 'n',
    markerStart: { type: MarkerType.Arrow },
    animated: true,   
  },
  { 
    id: '0-c', 
    source: '0', 
    sourceHandle: 'r', 
    target: 'c', 
    type: 'straight', 
    targetHandle: 'w',
    markerStart: { type: MarkerType.Arrow },
  },
  
  { 
    id: '1-0a1', 
    source: '1', 
    sourceHandle: 'l', 
    target: '0a1', 
    type: 'buttonedge', 
    targetHandle: 'n',
    markerEnd: { type: MarkerType.Arrow },
    animated: true,   
  },
  { 
    id: '2-0a2', 
    source: '2', 
    sourceHandle: 'l', 
    target: '0a2', 
    type: 'buttonedge', 
    targetHandle: 's',
    markerEnd: { type: MarkerType.Arrow },
    animated: true,   
  },
 
  { 
    id: '1-0b1', 
    source: '1', 
    sourceHandle: 'l', 
    target: '0b1', 
    type: 'buttonedge', 
    targetHandle: 'n',
    markerEnd: { type: MarkerType.Arrow },
    animated: true,   
  },
  { 
    id: '2-0b2', 
    source: '2', 
    sourceHandle: 'l', 
    target: '0b2', 
    type: 'buttonedge', 
    targetHandle: 's',
    markerEnd: { type: MarkerType.Arrow },
    animated: true,   
  },
  { 
    id: '0a-a1', 
    source: '0a', 
    sourceHandle: 'u', 
    target: '0a1', 
    type: 'straight', 
    targetHandle: 's',
    markerStart: { type: MarkerType.ArrowClosed},
    animated: true,   
  },
  { 
    id: '0a-a2', 
    source: '0a', 
    sourceHandle: 'd', 
    target: '0a2', 
    type: 'straight', 
    targetHandle: 'n',
    markerStart: { type: MarkerType.ArrowClosed},
    animated: true,   
  },
  { 
    id: '0b-b1', 
    source: '0b', 
    sourceHandle: 'u', 
    target: '0b1', 
    type: 'straight',
    targetHandle: 's',
    markerStart: { type: MarkerType.ArrowClosed},
    animated: true,   
  },
  { 
    id: '0b-b2', 
    source: '0b', 
    sourceHandle: 'd', 
    target: '0b2', 
    type: 'straight', 
    targetHandle: 'n',
    markerStart: { type: MarkerType.ArrowClosed},
    animated: true,   
  },
  { 
    id: 'c-c1', 
    source: 'c', 
    sourceHandle: 'd', 
    target: 'c1', 
    type: 'straight', 
    targetHandle: 'n',
    animated: true,
  },
  { 
    id: '2-2a', 
    source: '2', 
    sourceHandle: 'l', 
    target: '2a', 
    type: 'straight', 
    targetHandle: 'e',
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
    genericInterface: (props) => (
        <GenericClassNode
          {...props}
          color1={'#BF4D4D'}
          color2={'#CD7F7F'}
        />),
};

const edgeTypes = {
    buttonedge: ButtonEdge,
  };


export { initialNodes, initialEdges, nodeTypes, edgeTypes };
