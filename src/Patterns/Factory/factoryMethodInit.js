import { MarkerType } from 'reactflow';
import ButtonEdge from '../Components/DashedEdge';
import ClassNode from '../Components/ClassNodeCopy';
import InterfaceNode from '../Components/InterfaceNodeCopy';
import CodeNode from '../Components/CodeNode';


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
        methods: [
          { 
            id: '1',
            name: 'someOperation'
          },
          {
            id: '2',
            name: 'createProduct'
          }
        ],
        handles: [0, 1, 1, 0, 0, 0, 0, 1],
        title: "Creator Class",
        description: creatorDescription,
        deletable: false,
        connectable: true,
    },
    position: { x: 0, y: 0 },
  },
  {
    id: '1',
    type: 'class',
    data: { 
        class_name: 'ConcreteCreator1',
        methods: [
          {
            id: '1',
            name: 'createProduct'
          },
          {
            id: '2',
            name: 'method2'
          }
        ],

        handles: [0, 1, 0, 0, 1, 0, 0, 0],
        title: "Concrete Creator Class",
        description: concreteCreatorDescription,
        deletable: false,
    },
    position: { x: -100, y: 280 },
  },
  {
    id: '2',
    type: 'class',
    data: { 
        class_name: 'ConcreteCreator2',
        methods: [
          {
            id: '1',
            name: 'createProduct'
          },
          {
            id: '2',
            name: 'method2'
          }
        ],
        handles: [0, 1, 0, 0, 1, 0, 0, 0],
        title: "Concrete Creator Class",
        description: concreteCreatorDescription,
        deletable: false,
    },
    position: { x: 100, y: 280 },
  },
  {
    id: '0a',
    type: 'interface',
    data: { 
        class_name: 'Product',
        methods: [
          {
            id: '1',
            name: 'doStuff'
          }
          ],
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
        methods: [
          {
            id: '1',
            name: 'doStuff'
          }
          ],
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
        methods: [
          {
            id: '1',
            name: 'doStuff'
          }
          ],
        handles: [0, 0, 0, 0, 1, 0, 0, 0],
        title: "Concrete Product",
        description: concreteProductDescription,
        deletable: false,
    },
    position: { x: 450, y: 250 },
  },
  {
    id: '0b',
    type: 'code',
    data: { 
        handles: [0, 1, 0, 0, 0, 0, 0, 0],
        connectedId: '0',
    },
    position: { x: -200, y: 0 },
  },
  {
    id: '1b',
    type: 'code',
    data: { 
        handles: [0, 0, 0, 0, 1, 0, 0, 0],
        connectedId: '1',
    },
    position: { x: -100, y: 510 },
  },
  {
    id: '2b',
    type: 'code',
    data: { 
        handles: [0, 0, 0, 0, 1, 0, 0, 0],
        connectedId: '2',
    },
    position: { x: 100, y: 510 },
  },
];

const initialEdges = [
  { 
    id: '0-1', 
    source: '0', 
    sourceHandle: 'd', 
    target: '1', 
    type: 'smoothstep', 
    targetHandle: 'n',
    markerStart: { type: MarkerType.ArrowClosed }    

  },
  { 
    id: '0-2',
    source: '0',
    sourceHandle: 'd',
    target: '2', 
    targetHandle: 'n', 
    type: 'smoothstep',  
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
    markerStart: { type: MarkerType.ArrowClosed }
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
  { 
    id: '0-0b',
    source: '0b',  
    target: '0', 
    sourceHandle: 'd', 
    type: 'step', 
    targetHandle: 'w',
    animated: true,
  },
  { 
    id: '1-1b',
    source: '1',  
    target: '1b', 
    sourceHandle: 'd', 
    type: 'straight', 
    targetHandle: 'n',
    animated: true,
  },
  { 
    id: '2-2b',
    source: '2',  
    target: '2b', 
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
};

const edgeTypes = {
    buttonedge: ButtonEdge,
  };


export { initialNodes, initialEdges, nodeTypes, edgeTypes };
