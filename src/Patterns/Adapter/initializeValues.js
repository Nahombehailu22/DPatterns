import { updateNodes } from "../../Interactivity/updateNodes";

const clientDescription ='The Client is a class that contains the existing business logic of the program.'
const clientInterface='The Client Interface describes a protocol that other classes must follow to be able to collaborate with the client code.'
const adapterDescription = 'The Adapter is a class that’s able to work with both the client and the service: it implements the client interface, while wrapping the service object. The adapter receives calls from the client via the adapter interface and translates them into calls to the wrapped service object in a format it can understand.'
const serviceDescription = 'The Service is some useful class (usually 3rd-party or legacy). The client can’t use this class directly because it has an incompatible interface.'


const defaultClasses = ['Client', 'Client_Interface', 'Adapter', 'Service'];
const defaultMethods = [  [], // no methods for Client class
  [{ id: '1', name: 'method' }], // method for Client_Interface
  [{ id: '1', name: 'method' }], // method for Adapter
  [{ id: '1', name: 'serviceMethod' }], // method for Service
];
const defaultTitles = [  'Client Class',  'Cleint Interface',  'Adapter',  'Service',];
const defaultDescriptions = [  clientDescription,  clientInterface,  adapterDescription,  serviceDescription,];


//Example
const expClasses = ['Client', 'Client_Interface', 'Adapter', 'Service'];
const expMethods = [  [], // no methods for Client class
  [{ id: '1', name: 'method' }], // method for Client_Interface
  [{ id: '1', name: 'method' }], // method for Adapter
  [{ id: '1', name: 'serviceMethod' }], // method for Service
];

const defaultValues = { 
    classes: defaultClasses, 
    methods: defaultMethods, 
    titles: defaultTitles, 
    descriptions: defaultDescriptions
};

const expValues = { 
    classes: expClasses, 
    methods: expMethods, 
    titles: defaultTitles, 
    descriptions: defaultDescriptions
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