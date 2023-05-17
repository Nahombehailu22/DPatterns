import { updateNodes } from "../../Interactivity/updateNodes";

const abstractFactoryDescription = 
`The interface that defines a set of methods for creating abstract product objects. 
The specific type of product created is not determined until runtime.`;

const concreteFactoryDescription = 
`The implementation of the Abstract Factory interface that creates concrete product objects. 
Each concrete factory corresponds to a particular variant of the product.`;

const abstractProductDescription = 
`The interface that defines a set of methods that are common to all variants of a product. 
Each concrete product implements this interface.`;

const concreteProductDescription = 
`The implementation of the Abstract Product interface that represents a specific variant of the product.`

const clientDescription = `
The class that uses the Abstract Factory interface and the Abstract Product interface to create and use product objects. 
The client code does not know the specific classes of the objects it creates, only their common interfaces.`


const defaultClasses = ['AbstractFactory', 'ConcreteFactory1', 'ConcreteFactory2', "Client", 
                        'AbstractProductA','ConcreteProductA1', 'ConcreteProductA2',
                        'AbstractProductB','ConcreteProductB1', 'ConcreteProductB2'];
const defaultMethods = [
    [{ id: 'A', name: 'createProductA', interfaceMethod: true, returnType: "0a", notDeletable: true}, { id: 'B', name: 'createProductB', interfaceMethod: true, returnType: "0b" }],
    [{ id: 'A', name: 'createProductA', overRide: true, returnType: "0a"}, { id: 'B', name: 'createProductB', overRide: true, returnType: "0b" }],
    [{ id: 'A', name: 'createProductA', overRide: true, returnType: "0a"}, { id: 'B', name: 'createProductB', overRide: true, returnType: "0b" }],
    [{ id: "1", name: 'Client'}, { id: "2", name: 'someOperation'}],
    [{ id: "1", name: 'operationA', interfaceMethod: true, notDeletable: true}],
    [{ id: "1", name: 'operationA', overRide: true}],
    [{ id: "1", name: 'operationA', overRide: true}],
    [{ id: "1", name: 'operationB', interfaceMethod: true}],
    [{ id: "1", name: 'operationB', overRide: true}],
    [{ id: "1", name: 'operationB', overRide: true}],
    [{ id: "1", name: "doStuff"}],
    [{ id: "1", name: "doStuff"}],
]
const defaultTitles = ["Abstract Factory", "Concrete Factory", "Concrete Factory", "Client", 
                       "Abstract Product", "Concrete Product", "Concrete Product",
                       "Abstract Product", "Concrete Product", "Concrete Product",
                        "Product Interface", "Concrete Product", "Concrete Product"];
const defaultDescriptions = [abstractFactoryDescription, concreteFactoryDescription, concreteFactoryDescription, clientDescription, 
                            abstractProductDescription, concreteProductDescription, concreteProductDescription,
                            abstractProductDescription, concreteProductDescription, concreteProductDescription]

const defaultRelations = [[], ["implements", "0"], ["implements", "0"], [], [], ["implements","0a"], ["implements","0a"], [], ["implements","0b"],["implements","0b"]]

//Example
const expClasses = ['FurnitureFactory', 'VictorianFurniture', 'ModernFurniture', "Client", 
                        'Chair','VictorianChair', 'ModernChair',
                        'Sofa','VictorianSofa', 'ModernSofa'];
const expMethods = [
    [{ id: 'A', name: 'createChair'}, { id: 'B', name: 'createSofa' }],
    [{ id: 'A', name: 'createChair'}, { id: 'B', name: 'createSofa' }],
    [{ id: 'A', name: 'createChair'}, { id: 'B', name: 'createSofa' }],
    [{ id: "1", name: 'Client'}, { id: "2", name: 'someOperation'}],
    [],[],[],[],[],[],
    [{ id: "1", name: "doStuff"}],
    [{ id: "1", name: "doStuff"}],
]

const defaultValues = { 
    classes: defaultClasses, 
    methods: defaultMethods, 
    titles: defaultTitles, 
    descriptions: defaultDescriptions,
    relations:defaultRelations,
};

const expValues = { 
    classes: expClasses, 
    methods: expMethods, 
    titles: defaultTitles, 
    descriptions: defaultDescriptions,
    relations:defaultRelations,
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