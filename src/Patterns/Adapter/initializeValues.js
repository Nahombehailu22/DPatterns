import { updateNodes } from "../../Interactivity/updateNodes";

const clientDescription ='The Client is a class that contains the existing business logic of the program.'
const clientInterface='The Client Interface describes a protocol that other classes must follow to be able to collaborate with the client code.'
const adapterDescription = 'The Adapter is a class that’s able to work with both the client and the service: it implements the client interface, while wrapping the service object. The adapter receives calls from the client via the adapter interface and translates them into calls to the wrapped service object in a format it can understand.'
const serviceDescription = 'The Service is some useful class (usually 3rd-party or legacy). The client can’t use this class directly because it has an incompatible interface.'


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
const expAttributes = [[], [], [{id: '1', name:'text'}], []]
const expMethods = [  [], 
  [{ id: '1', name: 'boundingBox' }, { id: '2', name: 'createManipulator' }], 
  [{ id: '1', name: 'boundingBox' }, { id: '2', name: 'createManipulator' }],
  [{ id: '1', name: 'getExtent' }],
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
    descriptions: defaultDescriptions,
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