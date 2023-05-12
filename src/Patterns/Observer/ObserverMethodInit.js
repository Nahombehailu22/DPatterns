import { MarkerType } from 'reactflow';
import ButtonEdge from '../../Components/DashedEdge';
import ClassNode from '../../Components/Nodes/ClassNode';
import InterfaceNode from '../../Components/Nodes/InterfaceNode';
import CodeNode from '../../Components/Nodes/CodeNode';
import GenericClassNode from '../../Components/Nodes/GenericClassNode';


const publisherDescription = 'The Publisher issues events of interest to other objects. These events occur when the publisher changes its state or executes some behaviors. Publishers contain a subscription infrastructure that lets new subscribers join and current subscribers leave the list.'
const subscriberInterfaceDescription = 'The Subscriber interface declares the notification interface. In most cases, it consists of a single update method. The method may have several parameters that let the publisher pass some event details along with the update.'
const concreteSubscriberDescription = 'Concrete Subscribers perform some actions in response to notifications issued by the publisher. All of these classes must implement the same interface so the publisher isn’t coupled to concrete classes.'
const clientDescription = 'The Client creates publisher and subscriber objects separately and then registers subscribers for publisher updates.'


const initialNodes = [
    {
        id: '0',
        type: 'class',
        data: { 
            class_name: 'Publisher',
            attributes:[
                {
                    id: '1',
                    name: 'subscribers'
                },
                {
                    id: '2',
                    name: 'mainState'
                }
            ],
            methods: [
                {
                    id: '1',
                    name: 'subscribe'
                },
                {
                    id: '2',
                    name: 'unsubscribe'
                },
                {
                    id: '3',
                    name: 'notifySubscribers'
                },
                {
                    id: '4',
                    name: 'mainBusinessLogic'
                },
            ],
            
            handles: [0, 1, 1, 1, 0, 0, 0, 0],
            title: "Publisher",
            description: publisherDescription,
            deletable: false,
        },
        position: { x: 0, y: 0 },
    },

    {
        id: '0a',
        type: 'interface',
        data: { 
            class_name: 'Subscriber',
            methods: [
                {
                    id: '1',
                    name: 'update',
                }
            ],
            handles: [0, 1, 0, 0, 0, 0, 0, 1],
            title: "Subscriber interface",
            description: subscriberInterfaceDescription,
            deletable: false,
            connectable: true
        },
        position: { x: 385, y: 0 },
      },

      {
        id: '1a',
        type: 'class',
        data: { 
            class_name: 'ConcreteSubscriber1',
            methods: [
                {
                    id: '1',
                    name: 'update',
                }
            ],
            handles: [0, 0, 0, 0, 1, 0, 0, 0],
            title: "Concrete Subscriber",
            description: concreteSubscriberDescription,
            deletable: false,
        },
        position: { x: 275, y: 250 },
      },
      {
        id: '2a',
        type: 'class',
        data: { 
            class_name: 'ConcreteSubscriber2',
            methods: [
                {
                    id: '1',
                    name: 'update',
                }
            ],
            handles: [0, 0, 0, 0, 1, 0, 0, 0],
            title: "Concrete Subscriber",
            description: concreteSubscriberDescription,
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
      position: { x: 0, y: 400},
    },
    {
        id: '0c',
        type: 'code',
        data: { 
            handles: [0, 0, 0, 0, 0, 0, 1, 0],
            connectedId: '0',
        },
        position: { x: -250, y: 100 },
      },
      {
        id: '0c2',
        type: 'code',
        data: { 
            handles: [0, 0, 0, 0, 0, 0, 1, 0],
            connectedId: '0',
        },
        position: { x: -250, y: 200 },
      },
      {
        id: 'cc',
        type: 'code',
        data: { 
            handles: [0, 0, 0, 0, 0, 0, 1, 0],
            connectedId: '0',
        },
        position: { x: -250, y: 375 },
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
        id: '0-0c2', 
        source: '0', 
        sourceHandle: 'l', 
        target: '0c2', 
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