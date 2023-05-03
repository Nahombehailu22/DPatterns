import { MarkerType } from 'reactflow';
import ClassNode from '../../Components/ClassNodeCopy';
import InterfaceNode from '../../Components/InterfaceNodeCopy';
import CodeNode from '../../Components/CodeNode';
import GenericClassNode from '../../Components/GenericClassNode';


const abstractClassDescription = 'The Abstract Class declares methods that act as steps of an algorithm, as well as the actual template method which calls these methods in a specific order. The steps may either be declared abstract or have some default implementation.'
const concreteClassDescription = 'Concrete Strategies implement different variations of an algorithm the context uses.'


const initialNodes = [
    {
        id: '0',
        type: 'class',
        data: { 
            class_name: 'abstractClass',
            
            methods: [
                {
                    id:'1',
                    name: 'Template Method'
                },
                {
                    id: '2',
                    name: 'step1'
                },
                {
                    id: '3',
                    name: 'step2'
                },
                {
                    id: '4',
                    name: 'step3'
                },
                {
                    id: '5',
                    name: 'step4'
                }
            ],
            handles: [0, 1, 1, 1, 0, 0, 0, 0],
            title: "Abstract Class",
            description: abstractClassDescription,
            deletable: false,
        },
        position: { x: 0, y: -125 },
    },

    {
        id: '1a',
        type: 'class',
        data: { 
            class_name: 'ConcreteClass1',
            methods: [
                {
                    id: '1',
                    name: 'step1'
                },
                {
                    id: '2',
                    name: 'step3'
                },
            ],
            handles: [0, 0, 0, 0, 1, 0, 0, 0],
            title: "Concrete Class",
            description: concreteClassDescription,
            deletable: false,
        },
        position: { x: -100, y: 350 },
      },
      {
        id: '2a',
        type: 'class',
        data: { 
            class_name: 'ConcreteClass2',
            methods: [
                {
                    id: '1',
                    name: 'step1'
                },
                {
                    id: '2',
                    name: 'step2'
                },
                {
                    id: '3',
                    name: 'step4'
                }
            ],
            handles: [0, 0, 0, 0, 1, 0, 0, 0],
            title: "Concrete Class",
            description: concreteClassDescription,
            deletable: false,
        },
            position: {x: 110, y: 350},
    },
  
    {
        id: '0c',
        type: 'code',
        data: { 
            handles: [0, 0, 0, 0, 0, 0, 1, 0],
            connectedId: '0',
        },
        position: { x: -250, y: -35 },
      },
]

const initialEdges = [

    
    { 
        id: '0-1a', 
        source: '0', 
        sourceHandle: 'd', 
        target: '1a', 
        type: 'smoothstep',  
        targetHandle: 'n',
        markerStart: { type: MarkerType.ArrowClosed },    
       
    },

    { 
        id: '0-2a', 
        source: '0', 
        sourceHandle: 'd', 
        target: '2a', 
        type: 'smoothstep',  
        targetHandle: 'n',
        markerStart: { type: MarkerType.ArrowClosed },    
        
    },
  
    { 
        id: '0-0c', 
        source: '0', 
        sourceHandle: 'l', 
        target: '0c', 
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