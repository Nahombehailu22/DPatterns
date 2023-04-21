import { MarkerType } from 'reactflow';
import ButtonEdge from '../Components/DashedEdge';
import ClassNode from '../Components/ClassNode';
import InterfaceNode from '../Components/InterfaceNode';
import CodeNode from '../Components/CodeNode';


const bridgeMethodDescription = `The Bridge Method pattern separates the abstraction of an object from its implementation. It uses an Abstraction class to define the interface for the object and a Implementor interface to specify the implementation details. Implementations of the Implementor interface can be interchanged without affecting the Abstraction class. The Bridge Method pattern allows you to add new implementations to your system without modifying existing code.`;
const abstractionDescription = `The Abstraction defines the interface that the client will use to interact with the object. This interface typically includes a set of methods that the client code can use to interact with the object. By using an interface, the Abstraction class and the RefinedAbstracion class can create and use different implementations of the Implementor interface without affecting the client code.`;
const implementorInterfaceDescription = `The Implementor Interface defines the interface that the Abstraction class will use to implement the object. This interface typically includes a set of methods that the Abstraction class can use to delegate to the appropriate implementation of the object. By using an interface, the Abstraction class and the RefinedAbstraction class can create and use different implementations of the Implementor interface without affecting the client code.`;
const concreteImplementorDescription = `The Concrete Implementor class implements the Implementor interface and defines the specific behavior for a particular implementation of the object. Each Concrete Implementor class is responsible for implementing a specific type of behavior for the object.`;
const refinedAbstractionDescription = `Refined Abstractions provide variants of control logic. Like their parent, they work with different implementations via the general implementation interface.`;

const initialNodes = [

  {
    id: '0',
    type: 'class',
    data: { 
        class_name: 'Abstraction',
        attributes: ['imp'],
        methods: ['operation'],
        handles: [0, 1, 1, 0, 0, 0, 0, 1],
        title: "Abstraction",
        description: abstractionDescription,
        deletable: false,
        connectable: true,
    },
    position: { x: 0, y: 0 },
  },
  {
    id: '1',
    type: 'class',
    data: { 
        class_name: 'RefinedAbstraction1',
        methods: ['featureN'],
        handles: [0, 1, 0, 0, 1, 0, 0, 0],
        title: "Refined Abstraction",
        description: refinedAbstractionDescription,
        deletable: false,
    },
    position: { x: 0, y: 280 },
  },

  {
    id: '0a',
    type: 'interface',
    data: { 
        class_name: 'Implementation',
        methods: ['operationImp1'],
        handles: [0, 1, 0, 0, 0, 0, 0, 1],
        title: "Implementer",
        description: implementorInterfaceDescription,
        connectable: true,
        deletable: false,
    },
    position: { x: 350, y: 0 },
  },
  {
    id: '1a',
    type: 'class',
    data: { 
        class_name: 'ConcreteImp1',
        methods: ['operationImp1'],
        handles: [0, 0, 0, 0, 1, 0, 0, 0],
        title: "Concrete Implementer",
        description: concreteImplementorDescription,
        deletable: false,
    },
    position: { x: 250, y: 250 },
  },
  {
    id: '2a',
    type: 'class',
    data: { 
      class_name: 'ConcreteImp2',
      methods: ['operationImp1'],
      handles: [0, 0, 0, 0, 1, 0, 0, 0],
      title: "Concrete Implementer",
      description: concreteImplementorDescription,
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
    position: { x: 0, y: 510 },
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