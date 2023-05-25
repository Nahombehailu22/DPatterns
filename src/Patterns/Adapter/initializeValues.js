import { updateNodes } from "../../Interactivity/updateNodes";

const clientDescription = 
`The Client is a class that contains the existing business logic of the program. 
It represents the core component that utilizes various objects and services to achieve its functionality. 
The Client class interacts with other classes, making requests and receiving responses or performing actions based on the results. 
It acts as the entry point for executing the program and orchestrates the flow of operations. 
The Client class typically encapsulates the application\'s main logic, coordinating the interactions between different components and making use of their functionalities to achieve the desired outcomes.`

const clientInterface = 
`The Client Interface describes a protocol that other classes must follow to be able to collaborate with the client code. 
It defines a set of methods or contracts that classes need to implement in order to be compatible with the client\'s expectations. 
By adhering to the client interface, classes can interact with the client seamlessly and participate in the client\'s operations. 
The client interface provides a level of abstraction and decoupling, allowing different implementations to be interchangeable without affecting the client code. 
This promotes flexibility, extensibility, and the ability to introduce new implementations or adapt existing ones to work with the client without modifying the client itself.`

const adapterDescription = 
`The Adapter is a class that’s able to work with both the client and the service: it implements the client interface while wrapping the service object. 
The adapter receives calls from the client via the adapter interface and translates them into calls to the wrapped service object in a format it can understand. 
It acts as a bridge between the incompatible client and service interfaces, enabling them to collaborate effectively. 
The adapter pattern allows the client to use the service object indirectly through the adapter, even if the service\'s interface doesn\'t match the client\'s requirements. 
The adapter encapsulates the necessary logic to convert and adapt the client\'s requests into a format that the service can process and provide the desired results.`

const serviceDescription = 
`The Service is some useful class (usually 3rd-party or legacy). 
The client can’t use this class directly because it has an incompatible interface. 
The service encapsulates a specific set of functionalities or operations that are required by the client but are provided by an external or existing class. 
It represents a separate entity that the client needs to interact with to fulfill its requirements. 
However, the service\'s interface might not be compatible with the client\'s expectations, making it difficult for the client to directly use the service.
The service class often comes from a third-party library or legacy system, and its interface may not align with the client\'s needs. 
It requires adaptation or translation to be effectively utilized by the client, which is where the adapter pattern comes into play.`



const expClientDescription = `
The Client is a class that contains the existing business logic of the program.
It represents the core component of the DrawingEditor application, responsible for interacting with graphical shapes and text.
The Client class utilizes various objects and services to perform its operations and achieve its functionality.
It orchestrates the flow of operations and acts as the entry point for executing the program.
The Client class encapsulates the main logic of the DrawingEditor, coordinating the interactions between different components and making use of their functionalities to accomplish tasks related to drawing and editing graphical elements.
`;

const expClientInterface = `
The Client Interface describes a protocol that other classes must follow to collaborate with the client code.
In the context of the DrawingEditor, the Client Interface is represented by the Shape class, which defines a set of methods that the client expects when working with graphical shapes.
Any class that wants to participate in the DrawingEditor application as a shape must adhere to this interface by implementing the required methods.
By adhering to the client interface, classes can seamlessly integrate with the DrawingEditor and be treated uniformly by the client code, promoting flexibility, extensibility, and the ability to introduce new shapes without modifying the client logic.
`;

const expAdapterDescription = `
The Adapter is a class that enables the DrawingEditor application to work with both shapes and a specific Adaptee called TextView, which provides a different interface for displaying text.
In the context of the DrawingEditor, the Adapter is known as TextShape.
It implements the Shape interface (Client Interface) and wraps the TextView object, translating calls from the client into calls that the TextView can understand.
The TextShape acts as a bridge between the Shape interface expected by the client and the incompatible interface of TextView, adapting the TextView methods to conform to the Shape interface.
This allows the DrawingEditor to seamlessly integrate text as if it were a shape, providing a unified interface for the client code to work with both shapes and text.
`;

const expServiceDescription = `
The Service is represented by the TextView class in the context of the DrawingEditor.
It provides a different interface for displaying text, which is incompatible with the Shape interface used by the client.
The client cannot directly use the TextView class because of this interface mismatch.
However, the TextView class is a useful class that contains functionality for text display.
To overcome the interface incompatibility, the Adapter Method is employed, and the TextView class becomes the Adaptee.
The TextView class represents an external or existing class that the client code needs to work with, but it requires adaptation through the adapter to be effectively utilized within the DrawingEditor application.
The adapter translates and adapts the client's requests into a format that the TextView can process, enabling the DrawingEditor to handle text as if it were a shape.
`;


const defaultClasses = ['Client', 'Target', 'ObjectAdapter', 'Adaptee'];
const defaultAttributes = [[], [], [{id: '1', name:'adaptee', status:'private', returnType:"2"}], []]
const defaultMethods = [  [], 
  [{ id: '1', name: 'request', interfaceMethod: true, notDeletable: 'true'}], 
  [{ id: '1', name: 'request', overRide: true}], 
  [{ id: '1', name: 'specificRequest' }], 
];
const defaultTitles = [  'Client Class',  'Client Interface',  'Adapter',  'Service',];
const defaultDescriptions = [  clientDescription,  clientInterface,  adapterDescription,  serviceDescription];
const defaultRelations = [[], [], ["implements", "0"], []]


//Example
const expClasses = ['DrawingEditor', 'Shape', 'TextShape', 'TextView'];
const expAttributes = [[], [], [{id: '1', name:'textview', status:'private', returnType:"2"}], [], []]
const expMethods = [  [], 
  [{ id: '1', name: 'draw', interfaceMethod: true, notDeletable: 'true' }, { id: '2', name: 'resize' }], 
  [{ id: '1', name: 'draw', overRide: true }, { id: '2', name: 'resize', overRide: true }],
  [{ id: '1', name: 'displayText' }, { id: '2', name: 'adjustTextSize' }],
];

const expDefaultDescriptions = [
    expClientDescription,
    expClientInterface,
    expAdapterDescription,
    expServiceDescription,
  ];
  

const defaultValues = { 
    classes: defaultClasses, 
    attributes:defaultAttributes,
    methods: defaultMethods, 
    titles: defaultTitles, 
    descriptions: defaultDescriptions,
    relations: defaultRelations
};

const expValues = { 
    classes: expClasses,
    attributes:expAttributes,
    methods: expMethods, 
    titles: defaultTitles, 
    descriptions: expDefaultDescriptions,
    relations: defaultRelations
};

const initialize = (setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden, type, initialValues) => {
    if (type === "example"){
        updateNodes(setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden, expValues, initialValues);
    }
    else{
        updateNodes(setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden, defaultValues, initialValues);
    }
    
}
 
export default initialize;