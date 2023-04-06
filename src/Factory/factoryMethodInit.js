import { MarkerType } from 'reactflow';
import ButtonEdge from '../Components/ButtonEdge';
import ClassNode from '../Components/ClassNode';
import InterfaceNode from '../Components/InterfaceNode';



const creatorDescription = `The creator class declares the factory method that returns new product objects. It separates the construction of the product objects from their implementation, allowing for greater flexibility and extensibility in the system. The return type of the factory method must match the product interface. By using the Factory Method design pattern and the creator class, you can easily add new product types to your system without modifying existing code.`;
const concreteCreatorDescription = `The concrete creator class implements the factory method to return a specific type of product object. It may have additional methods for configuring the product object before returning it. The concreteCreator class provides the implementation for the factory method declared in the creator class.`;
const productInterfaceDescription = `The product Interface defines the interface that all product objects must implement. This interface typically includes a set of methods that the client code can use to interact with the product objects. By using an interface, the creator class and concreteCreator classes can create and return different types of product objects that are still compatible with the client code.`;
const concreteProductDescription = `The concrete Product class implements the productInterface and defines the specific behavior for a particular type of product object. Each concreteCreator class is responsible for creating and returning a specific type of concreteProduct. This separation of concerns allows for greater flexibility and modularity in the system.`;


const initialNodes = [
  {
    id: '0',
    type: 'class',
    data: { 
        class_name: 'Creator',
        methods: ['createProduct'],
        handles: [0, 1, 1, 0, 0, 0, 0, 0],
        title: "Creator Class",
        description: creatorDescription,
        deletable: false,
    },
    position: { x: 0, y: 0 },
  },
  {
    id: '1',
    type: 'class',
    data: { 
        class_name: 'ConcreteCreator1',
        methods: ['createProduct', 'method2'],
        handles: [0, 0, 0, 0, 1, 0, 0, 0],
        title: "Concrete Creator Class",
        description: concreteCreatorDescription,
        deletable: false,
    },
    position: { x: -100, y: 200 },
  },
  {
    id: '2',
    type: 'class',
    data: { 
        class_name: 'ConcreteCreator2',
        methods: ['createProduct', 'method2'],
        handles: [0, 0, 0, 0, 1, 0, 0, 0],
        title: "Concrete Creator Class",
        description: concreteCreatorDescription,
        deletable: false,
    },
    position: { x: 100, y: 200 },
  },
  {
    id: '0a',
    type: 'interface',
    data: { 
        class_name: 'Product',
        methods: ['doStuff'],
        handles: [0, 1, 0, 0, 0, 0, 0, 1],
        title: "Product Interface",
        description: productInterfaceDescription,
        deletable: false,
    },
    position: { x: 350, y: 0 },
  },
  {
    id: '1a',
    type: 'class',
    data: { 
        class_name: 'ConcreteProduct1',
        methods: ['doStuff'],
        handles: [0, 0, 0, 0, 1, 0, 0, 0],
        title: "Concrete Product",
        description: concreteProductDescription,
        deletable: false,
    },
    position: { x: 275, y: 250 },
  },
  {
    id: '2a',
    type: 'class',
    data: { 
        class_name: 'ConcreteProduct2',
        methods: ['doStuff'],
        handles: [0, 0, 0, 0, 1, 0, 0, 0],
        title: "Concrete Product",
        description: concreteProductDescription,
        deletable: false,
    },
    position: { x: 450, y: 250 },
  },
];


const initialEdges = [
  { 
    id: '0-1', 
    source: '0', 
    sourceHandle: 'd', 
    target: '1', 
    type: 'buttonedge', 
    targetHandle: 'n',
    markerStart: { type: MarkerType.Arrow }       
  },
  { 
    id: '0-2',
    source: '0',
    sourceHandle: 'd',
    target: '2', 
    targetHandle: 'n', 
    type: 'buttonedge' 
  },
  { 
    id: 'e1-1a',
    source: '0',  
    target: '0a', 
    sourceHandle: 'r', 
    type: 'straight', 
    animated: 'true', 
    targetHandle: 'w',
    markerEnd: { type: MarkerType.Arrow }, 
  },
  { 
    id: 'e1a-2a',
    source: '0a',  
    sourceHandle: 'd', 
    target: '1a', 
    type: 'buttonedge', 
    animated: 'true', 
    targetHandle: 'n',   
    markerStart: { type: MarkerType.Arrow }
  },
  { 
    id: 'e1a-3a',
    source: '0a',  
    sourceHandle: 'd', 
    target: '2a', 
    type: 'buttonedge', 
    animated: 'true', 
    targetHandle: 'n'
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
};

const edgeTypes = {
    buttonedge: ButtonEdge,
  };


export { initialNodes, initialEdges, nodeTypes, edgeTypes };
