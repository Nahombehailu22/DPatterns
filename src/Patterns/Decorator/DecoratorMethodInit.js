import { MarkerType } from 'reactflow';
import ButtonEdge from '../../Components/DashedEdge';
import ClassNode from '../../Components/ClassNodeCopy';
import InterfaceNode from '../../Components/InterfaceNodeCopy';
import CodeNode from '../../Components/CodeNode';
import GenericClassNode from '../../Components/GenericClassNode';


const clientClassDescription = `The Client can wrap components in multiple layers of decorators, as long as it works with all objects via the component interface.`
const componentDescription = `The Component declares the common interface for both wrappers and wrapped objects.`
const concreteComponentDescription = `Concrete Component is a class of objects being wrapped. It defines the basic behavior, which can be altered by decorators.`
const decoratorDescription = `The Base Decorator class has a field for referencing a wrapped object. The field’s type should be declared as the component interface so it can contain both concrete components and decorators. The base decorator delegates all operations to the wrapped object.`
const concreteDecoratorDescription = `Concrete Decorators define extra behaviors that can be added to components dynamically. Concrete decorators override methods of the base decorator and execute their behavior either before or after calling the parent method.`

const initialNodes = [
  {
    id: 'c',
    type: 'client',
    data: { 
        class_name: 'Client',
        handles: [0, 0, 1, 1],
        title: "Client Class",
        description: clientClassDescription,
    },
    position: { x: -300, y: 60 },
  },
  {
    id: '0',
    type: 'interface',
    data: { 
        class_name: 'Component',
        methods: [
          { 
            id: '1',
            name: 'execute'
          },
        ],
        handles: [0, 1, 1, 0, 0, 0, 0, 1],
        title: "Creator Class",
        description: componentDescription,
        deletable: false,
    },
    position: { x: 0, y: 0 },
  },

  {
    id: '1',
    type: 'class',
    data: { 
        class_name: 'ConcComponent',
        methods: [
          { 
            id: '1',
            name: 'execute'
          },
        ],

        handles: [0, 0, 0, 0, 1, 0, 0, 0],
        title: "Concrete Component",
        description: concreteComponentDescription,
        deletable: false,
    },
    position: { x: -150, y: 275 },
  },
  {
    id: '2',
    type: 'class',
    data: { 
        class_name: 'Decorator',
        attributes: [
          {
            id: '1',
            name: 'wrappee'
          }
        ],
        methods: [
          {
            id: '1',
            name: "BaseDecorator"
          },
          { 
            id: '2',
            name: 'execute'
          },
        ],

        handles: [0, 1, 1, 0, 1, 0, 1, 0],
        title: "Base Decorator",
        description: decoratorDescription,
        deletable: false,
        connectable: true
    },
    position: { x: 150, y: 275 },
  },
  {
    id: '1a',
    type: 'class',
    data: { 
        class_name: 'ConcDecorator1',
        methods: [
          { 
            id: '1',
            name: 'execute'
          },
          {
            id: '2',
            name: 'extra'
          }
        ],

        handles: [0, 0, 0, 1, 1, 0, 0, 0],
        title: "Concrete Decorator",
        description: concreteDecoratorDescription,
        deletable: false,
    },
    position: { x: 0, y: 600 },
  },
  {
    id: '2a',
    type: 'class',
    data: { 
      class_name: 'ConcDecorator2',
      methods: [
        { 
          id: '1',
          name: 'execute'
        },
        {
          id: '2',
          name: 'extra'
        }
      ],

        handles: [0, 1, 0, 0, 1, 0, 0, 0],
        title: "Concrete Decorator",
        description: concreteDecoratorDescription,
        deletable: false,
    },
    position: { x: 250, y: 600 },
  },
  {
    id: 'cc',
    type: 'code',
    data: { 
        handles: [0, 0, 0, 0, 0, 0, 1, 0],
    },
    position: { x: -550, y: 60 },
  },

  {
    id: '2c1',
    type: 'code',
    data: { 
        handles: [0, 0, 0, 0, 0, 0, 0, 1],
    },
    position: { x: 375, y: 375 },
  },
  {
    id: '2c2',
    type: 'code',
    data: { 
        handles: [0, 0, 0, 0, 0, 0, 0, 1],
    },
    position: { x: 375, y: 425 },
  },
  {
    id: '0ac',
    type: 'code',
    data: { 
        handles: [0, 0, 0, 0, 0, 0, 1, 0],
    },
    position: { x: -200, y: 700 },
  },

];

const initialEdges = [
  { 
    id: 'c-0',
    source: 'c',  
    target: '0', 
    sourceHandle: 'r', 
    type: 'straight', 
    targetHandle: 'w',
    markerEnd: {type: MarkerType. Arrow}
  },

  { 
    id: '0-1', 
    source: '0', 
    sourceHandle: 'd', 
    target: '1', 
    type: 'smoothstep', 
    targetHandle: 'n',
    markerStart: { type: MarkerType.ArrowClosed },  
    animated: true, 

  },
  { 
    id: '0-2',
    source: '0',
    sourceHandle: 'd',
    target: '2', 
    targetHandle: 'n', 
    type: 'smoothstep', 
    animated: true,

  },
  { 
    id: '0-21',
    source: '0',
    sourceHandle: 'r',
    target: '2', 
    targetHandle: 'e', 
    type: 'smoothstep', 
    markerStart: { type: MarkerType.Arrow },  

  },
  { 
    id: '2-1a', 
    source: '2', 
    sourceHandle: 'd', 
    target: '1a', 
    type: 'smoothstep', 
    targetHandle: 'n',
    markerStart: { type: MarkerType.ArrowClosed },  

  },
  { 
    id: '2-2a',
    source: '2',
    sourceHandle: 'd',
    target: '2a', 
    targetHandle: 'n', 
    type: 'smoothstep', 

  },
  { 
    id: 'c-cc',
    source: 'c',
    sourceHandle: 'l',
    target: 'cc', 
    targetHandle: 'e', 
    type: 'straight', 
    animated: true

  },
  { 
    id: '2-2c1',
    source: '2',
    sourceHandle: 'r',
    target: '2c1', 
    targetHandle: 'w', 
    type: 'straight', 
    animated: true

  },
  { 
    id: '2-2c2',
    source: '2',
    sourceHandle: 'r',
    target: '2c2', 
    targetHandle: 'w', 
    type: 'straight', 
    animated: true

  },

  { 
    id: '1a-0ac',
    source: '1a',
    sourceHandle: 'l',
    target: '0ac', 
    targetHandle: 'e', 
    type: 'straight', 
    animated: true

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
    client: (props) => (
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
