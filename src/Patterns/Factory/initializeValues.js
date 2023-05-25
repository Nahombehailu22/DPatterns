import { updateNodes } from "../../Interactivity/updateNodes";

const creatorDescription = 
`The Creator class is a fundamental component of the Factory Method design pattern. 
It declares the factory method that returns new product objects, separating the construction of the product objects from their implementation, allowing greater flexibility and extensibility in the system. 
The Creator doesn't know what specific type of product it will create - this knowledge is delegated to the Concrete Creator. The return type of the factory method must match the product interface. 
By using the Factory Method design pattern and the Creator class, you can easily add new product types to your system without modifying the existing code, as long as these new products conform to the product interface.`

const concreteCreatorDescription = 
`The Concrete Creator is a subclass of the Creator, and its main responsibility is the implementation of the factory method that creates a particular type of product. 
Each Concrete Creator generates a type of product which is defined by the concreteProduct class. 
By implementing the factory method, the Concrete Creator provides the specific behavior for a particular product type that the Creator class can use to generate product objects. 
In some cases, a Concrete Creator may have additional methods for configuring or modifying product objects before returning them to the Creator.`;

const productInterfaceDescription = 
`The Product Interface defines the interface that all product objects must implement. 
This interface typically includes a set of methods that the client code can use to interact with the product objects. 
The Creator and Concrete Creator classes can create and return different types of product objects that are still compatible with the client code by using the common interface. 
The primary advantage of using an interface is that it enforces a contract between the Creator, Concrete Creator, and the product objects. 
This approach makes the system more flexible and easier to maintain because it allows new concrete product classes to be added easily.`;

const concreteProductDescription = 
`The Concrete Product is the class that implements the Product Interface, and it defines the specific behavior for a particular type of product object. 
Each Concrete Creator class is responsible for creating and returning a specific type of Concrete Product. 
By separating the product interface from the product implementation, the Factory Method design pattern enables the system to be adaptive to change. 
It is much easier to add new product types and modify the behavior of existing products in a modular fashion. 
The Concrete Product is the component of the system that the client code is primarily interested in, even though it's created by the Creator and Concrete Creator.`;


const expCreatorDescription = 
`The Creator (LogisticsFactory) class is a fundamental component of the Factory Method design pattern specific to the logistics management factory. 
It declares the factory method, createTransportation, which returns new transportation objects. 
The LogisticsFactory separates the construction of transportation objects from their implementation, allowing greater flexibility and extensibility in the logistics management system. 
The LogisticsFactory doesn't know the specific type of transportation it will create; this knowledge is delegated to the Concrete Creator. 
The return type of the factory method must match the transportation interface. 
By using the Factory Method design pattern and the LogisticsFactory, new transportation types can be easily added to the system without modifying the existing code, as long as these new transportation types conform to the transportation interface.
`;

const expConcreteCreatorDescription = 
`The Concrete Creator (RoadLogisticsFactory, SeaLogisticsFactory, etc.) classes are subclasses of the LogisticsFactory. 
Their main responsibility is the implementation of the factory method (createTransportation) that creates a particular type of transportation object. 
Each Concrete Creator generates a type of transportation object that is defined by the concrete transportation class. 
By implementing the factory method, the Concrete Creator provides the specific behavior for a particular transportation type that the LogisticsFactory can use to generate transportation objects. 
In some cases, a Concrete Creator may have additional methods for configuring or modifying transportation objects before returning them to the LogisticsFactory.
`;

const expProductInterfaceDescription = 
`The Product Interface (Transport) defines the interface that all transportation objects must implement. 
This interface typically includes a set of methods that the client code can use to interact with the transportation objects. 
The LogisticsFactory and Concrete Creator classes can create and return different types of transportation objects that are still compatible with the client code by using the common interface. 
The primary advantage of using an interface is that it enforces a contract between the LogisticsFactory, Concrete Creators, and the transportation objects. 
This approach makes the logistics management system more flexible and easier to maintain because it allows new concrete transportation classes to be added easily.
`;

const expConcreteProductDescription = 
`The Concrete Product (Truck, Ship, etc.) classes are the classes that implement the Transport interface. 
They define the specific behavior for a particular type of transportation object. 
Each Concrete Creator class is responsible for creating and returning a specific type of Concrete Product. 
By separating the transportation interface from the transportation implementation, the Factory Method design pattern enables the logistics management system to be adaptive to change. 
It is much easier to add new transportation types and modify the behavior of existing transportation objects in a modular fashion. 
The Concrete Product is the component of the system that the client code is primarily interested in, even though it's created by the LogisticsFactory and Concrete Creators.
`;


const defaultClasses = ["Creator", "ConcreteCreator1", "ConcreteCreator2", "Product", "ConcreteProduct1", "ConcreteProduct2"];
const defaultAttributes = [] * defaultClasses.length
const defaultMethods = [
    [{ id: "1", name: "someOperation", notDeletable: 'true'}, { id: "2", name: "createProduct", abstract: true, returnType: "0a", notDeletable: true}], 
    [{ id: "1", name: "createProduct", overRide: true, returnType: "0a"}], 
    [{ id: "1", name: "createProduct", overRide: true, returnType: "0a"}], 
    [{ id: "1", name: "displayProductInfo", interfaceMethod: true, notDeletable: true}],
    [{ id: "1", name: "displayProductInfo", overRide: true}],
    [{ id: "1", name: "displayProductInfo", overRide: true}],
]
const defaultTitles = ["Creator Class", "Concrete Creator Class", "Concrete Creator Class", 
                        "Product Interface", "Concrete Product", "Concrete Product"];
const defaultDescriptions = [creatorDescription, concreteCreatorDescription, concreteCreatorDescription, 
                            productInterfaceDescription, concreteProductDescription, concreteProductDescription]

const defaultRelations = [[], ["extends", "0"], ["extends", "0"], [], ["implements", "0a"], ["implements", "0a"]]


//Example
const expClasses = ["Logistics", "RoadLogistics", "SeaLogistics", "Transport", "Truck", "Ship"]
const expMethods = [
    [{ id: "1", name: "planDelivery", notDeletable: 'true' }, { id: "2", name: "createTransport", abstract: true, returnType: "0a", notDeletable: 'true'}], 
    [{ id: "1", name: "createTransport", overRide: true, returnType: "0a"}], 
    [{ id: "1", name: "createTransport", overRide: true, returnType: "0a"}], 
    [{ id: "1", name: "deliver", interfaceMethod: true, notDeletable: true}],
    [{ id: "1", name: "deliver", overRide: true}],
    [{ id: "1", name: "deliver", overRide: true}],
]

const expDescriptions = [expCreatorDescription, expConcreteCreatorDescription, expConcreteCreatorDescription, 
    expProductInterfaceDescription, expConcreteProductDescription, expConcreteProductDescription]

const defaultValues = { 
    classes: defaultClasses, 
    attributes: defaultAttributes,
    methods: defaultMethods, 
    titles: defaultTitles, 
    descriptions: defaultDescriptions,
    relations: defaultRelations
};

const expValues = { 
    classes: expClasses, 
    attributes: defaultAttributes,
    methods: expMethods, 
    titles: defaultTitles, 
    descriptions: expDescriptions,
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