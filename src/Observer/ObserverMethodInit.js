import { MarkerType } from 'reactflow';
import ButtonEdge from '../Components/DashedEdge';
import ClassNode from '../Components/ClassNode';
import InterfaceNode from '../Components/InterfaceNode';
import CodeNode from '../Components/CodeNode';
import GenericClassNode from '../Components/GenericClassNode';


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
            attributes:['subscribers', 'mainState'],
            methods: ['subscribe','unsubscribe', 'notifySubscribers','mainBusinessLogic'],
            handles: [0, 1, 1, 0, 0, 0, 0, 0],
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
            methods: ['update'],
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
            methods: ['update'],
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
            methods: ['update'],
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
          handles: [0, 0, 0, 0, 1],
          title: "Client",
          description: clientDescription,
      },
      position: { x: 0, y: 350},
    }
    

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
    )
}


const edgeTypes = {

}


export { initialNodes, initialEdges, nodeTypes, edgeTypes }