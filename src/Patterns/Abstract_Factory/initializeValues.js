import { updateNodes } from "../../Interactivity/updateNodes";

const abstractFactoryDescription = `
The Abstract Factory is an interface that defines a set of methods for creating abstract product objects.
It provides a way to create families of related products without specifying their concrete classes.
The specific type of product created is not determined until runtime, allowing for flexibility in selecting the appropriate product variant based on certain conditions or configurations.
The Abstract Factory encapsulates the creation logic, abstracting it from the client code that uses the created products.
By utilizing the Abstract Factory pattern, the system can easily switch between different families of products by simply changing the concrete factory implementation.
`;

const concreteFactoryDescription = `
A Concrete Factory is an implementation of the Abstract Factory interface that creates concrete product objects.
Each concrete factory corresponds to a particular variant of the product.
It encapsulates the details of creating the product objects, including the logic and parameters specific to the product variant.
By implementing the Abstract Factory interface, a concrete factory provides a consistent way to create products that belong to a specific family or variant.
This allows the client code to create products without being tightly coupled to their concrete classes, promoting flexibility and extensibility in the system.
Different concrete factories can be easily swapped to create different product variants.
`;

const abstractProductDescription = `
The Abstract Product is an interface that defines a set of methods that are common to all variants of a product.
It represents the shared behavior and contract that each product variant must adhere to.
The abstract product provides a high-level interface for the client code to interact with the products without being concerned about their specific implementations.
By defining a common interface, the abstract product enables the client code to work with different product variants interchangeably, as long as they conform to the abstract product interface.
This promotes code reuse, simplifies the client code, and allows the system to easily introduce new product variants without impacting the client code.
`;

const concreteProductDescription = `
A Concrete Product is the implementation of the Abstract Product interface that represents a specific variant of the product.
Each concrete product provides the concrete implementation for the methods defined in the abstract product interface.
Concrete products encapsulate the details of their specific behavior and functionality.
They can have different internal structures, configurations, and algorithms while still adhering to the common interface defined by the abstract product.
The client code interacts with concrete products through the abstract product interface, treating different product variants uniformly.
By utilizing concrete products, the system can provide specific features and behavior tailored to different product variants without compromising the overall structure and usage of the product.
`;

const clientDescription = `
The Client is a class or module that uses the Abstract Factory interface and the Abstract Product interface to create and use product objects.
The client code does not know the specific classes of the objects it creates; it only knows about their common interfaces defined by the abstract factory and abstract product.
The client code interacts with the abstract factory to create product objects, and then uses these objects through the abstract product interface, without being concerned about their specific implementations.
This decoupling allows the client code to be independent of the specific product classes, promoting modularity, maintainability, and the ability to switch between different product families or variants seamlessly.
`;


const expAbstractFactoryDescription = `
The Abstract Factory is an interface that defines a set of methods for creating furniture objects.
It provides an abstraction layer between the client code and the creation of furniture, allowing the client code to work with furniture objects without tightly coupling it to specific implementations.
The Abstract Factory pattern is suitable for the furniture factory problem, as it enables the creation of various furniture items, such as beds, without the need to know their concrete classes.
By utilizing the Abstract Factory pattern, different families or types of furniture factories can be created by implementing new concrete factories while keeping the client code unaffected.
`;

const expConcreteFactoryDescription = `
A Concrete Factory is an implementation of the Abstract Factory interface that creates concrete furniture objects.
Each concrete factory represents a specific type or family of furniture factories, such as 'VictorianFurniture' and 'ModernFurniture'.
Concrete factories encapsulate the logic and details of creating furniture objects of a particular family or type.
By implementing the abstract factory interface, concrete factories provide a consistent way to create furniture objects that share common features defined by the abstract product interface.
Different concrete factories can be easily added to introduce new families or types of furniture, enhancing the flexibility and extensibility of the system.
`;

const expAbstractProductDescription = `
The Abstract Product is an interface that defines common features and behaviors that all furniture objects must support.
It serves as a contract that specifies a set of methods that every furniture object, regardless of its concrete type, must implement.
Abstract products, such as 'Bed', define common operations or functionalities that are applicable to all furniture objects, like 'sleepOn()' or 'adjustHeight()'.
By relying on the abstract product interface, the client code can interact with different furniture objects interchangeably without being tightly coupled to their concrete classes.
This promotes flexibility and allows the system to easily introduce new concrete products or variants without modifying the client code.
`;

const expConcreteProductDescription = `
A Concrete Product is the implementation of the Abstract Product interface that represents a specific furniture object.
Each concrete product, such as 'VictorianBed' or 'ModernBed', corresponds to a particular variant or type of furniture object.
Concrete products encapsulate the specific behavior and details of their respective furniture types.
They provide the concrete implementation for the methods defined in the abstract product interface.
By separating the product interface from its implementation, the Abstract Factory pattern enables the furniture factory to produce different types of furniture objects while maintaining a consistent interaction interface for the client code.
`;

const expClientDescription = `
The Client is a class or module that utilizes the Abstract Factory interface and the Abstract Product interface to create and interact with furniture objects.
The client code does not depend on the specific furniture classes but relies on the abstract factory interface and the abstract product interface instead.
This allows the client code to create and work with furniture objects without being tightly coupled to their concrete classes.
The decoupling achieved through the Abstract Factory pattern promotes modularity, maintainability, and the ability to switch between different furniture families or types seamlessly.
The client code can easily integrate new families or types of furniture by utilizing different concrete factories that adhere to the abstract factory interface and create concrete products conforming to the abstract product interface.
`;



const defaultClasses = ['AbstractFactory', 'ConcreteFactory1', 'ConcreteFactory2', "Client", 
                        'AbstractProductA','ConcreteProductA1', 'ConcreteProductA2',
                        'AbstractProductB','ConcreteProductB1', 'ConcreteProductB2'];

const defaultAttributes = [[] * defaultClasses.length]
defaultAttributes[3] =   [{ id: '1',name: 'factory', status: 'private' }]
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
                        'Bed','VictorianBed', 'ModernBed'];


const expMethods = [
    [{ id: 'A', name: 'createChair', interfaceMethod: true, returnType: "0a", notDeletable: true}, { id: 'B', name: 'createBed', interfaceMethod: true, returnType: "0b"  }],
    [{ id: 'A', name: 'createChair', overRide: true, returnType: "0a"}, { id: 'B', name: 'createBed', overRide: true, returnType: "0b" }],
    [{ id: 'A', name: 'createChair', overRide: true, returnType: "0a"}, { id: 'B', name: 'createBed', overRide: true, returnType: "0b"  }],
    [{ id: "1", name: 'Client'}, { id: "2", name: 'someOperation'}],
    [{ id: "1", name: 'sitOn', interfaceMethod: true, notDeletable: true}],
    [{ id: "1", name: 'sitOn', overRide: true}],
    [{ id: "1", name: 'sitOn', overRide: true}],
    [{ id: "1", name: 'sleepOn', interfaceMethod: true}],
    [{ id: "1", name: 'sleepOn', overRide: true}],
    [{ id: "1", name: 'sleepOn', overRide: true}],
]

const expDefaultDescriptions = [
    expAbstractFactoryDescription,
    expConcreteFactoryDescription,
    expConcreteFactoryDescription,
    expClientDescription,
    expAbstractProductDescription,
    expConcreteProductDescription,
    expConcreteProductDescription,
    expAbstractProductDescription,
    expConcreteProductDescription,
    expConcreteProductDescription,
  ];
  

const defaultValues = { 
    classes: defaultClasses, 
    attributes: defaultAttributes,
    methods: defaultMethods, 
    titles: defaultTitles, 
    descriptions: defaultDescriptions,
    relations:defaultRelations,
};

const expValues = { 
    classes: expClasses, 
    attributes: defaultAttributes,
    methods: expMethods, 
    titles: defaultTitles, 
    descriptions: expDefaultDescriptions,
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