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


const defaultClasses = ["Creator", "ConcreteCreator1", "ConcreteCreator2", "Product", "ConcreteProduct1", "ConcreteProduct2"];
const defaultMethods = [
    [{ id: "1", name: "someOperation"}, { id: "2", name: "createProduct", abstract: true}], 
    [{ id: "1", name: "createProduct", overRide: true}], 
    [{ id: "1", name: "createProduct", overRide: true}], 
    [{ id: "1", name: "displayProductInfo", interfaceMethod: true}],
    [{ id: "1", name: "displayProductInfo", overRide: true}],
    [{ id: "1", name: "displayProductInfo", overRide: true}],
]
const defaultTitles = ["Creator Class", "Concrete Creator Class", "Concrete Creator Class", 
                        "Product Interface", "Concrete Product", "Concrete Product"];
const defaultDescriptions = [creatorDescription, concreteCreatorDescription, concreteCreatorDescription, 
                            productInterfaceDescription, concreteProductDescription, concreteProductDescription]


//Example
const expClasses = ["Logistics", "RoadLogistics", "SeaLogistics", "Transport", "Truck", "Ship"]
const expMethods = [
    [{ id: "1", name: "planDelivery" }, { id: "2", name: "createTransport"}], 
    [{ id: "1", name: "createTransport"}], 
    [{ id: "1", name: "createTransport"}], 
    [{ id: "1", name: "deliver"}],
    [{ id: "1", name: "deliver"}],
    [{ id: "1", name: "deliver"}],
]

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