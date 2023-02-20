import FactoryMethod from "./FactoryMethod";
import { MarkerType } from 'reactflow';
import ButtonEdge from './ButtonEdge.js';
import ClassNode from './ClassNode.js';
import { useState } from "react";


const creatorDescription = `The creator class declares the factory method that returns new product objects. It separates the construction of the product objects from their implementation, allowing for greater flexibility and extensibility in the system. The return type of the factory method must match the product interface. By using the Factory Method design pattern and the creator class, you can easily add new product types to your system without modifying existing code.`;
const concreteCreatorDescription = `The concrete creator class implements the factory method to return a specific type of product object. It may have additional methods for configuring the product object before returning it. The concreteCreator class provides the implementation for the factory method declared in the creator class.`;
const productInterfaceDescription = `The product Interface defines the interface that all product objects must implement. This interface typically includes a set of methods that the client code can use to interact with the product objects. By using an interface, the creator class and concreteCreator classes can create and return different types of product objects that are still compatible with the client code.`;
const concreteProductDescription = `The concrete Product class implements the productInterface and defines the specific behavior for a particular type of product object. Each concreteCreator class is responsible for creating and returning a specific type of concreteProduct. This separation of concerns allows for greater flexibility and modularity in the system.`;


const initialNodes = [
  {
    id: '0',
    type: 'creator',
    data: { label: 'Node' },
    position: { x: 0, y: 0 },
  },
  {
    id: '1',
    type: 'concreteCreator1',
    data: { label: 'Node2' },
    position: { x: -100, y: 200 },
  },
  {
    id: '2',
    type: 'concreteCreator2',
    data: { label: 'Node 3' },
    position: { x: 100, y: 200 },
  },
  {
    id: '0a',
    type: 'product',
    data: { label: 'Node 1A' },
    position: { x: 350, y: 0 },
  },
  {
    id: '1a',
    type: 'concreteProduct1',
    data: { label: 'Node 2A' },
    position: { x: 275, y: 250 },
  },
  {
    id: '2a',
    type: 'concreteProduct2',
    data: { label: 'Node 3A' },
    position: { x: 450, y: 250 },
  },
];


const initialEdges = [
  { 
    id: '0-1', 
    source: '0', 
    sourceHandle: 'b', 
    target: '1', 
    type: 'buttonedge', 
    targetHandle: 'u',
    markerStart: { type: MarkerType.Arrow }       
  },
  { 
    id: '0-2',
    source: '0',
    sourceHandle: 'b',
    target: '2', 
    targetHandle: 'u', 
    type: 'buttonedge' 
  },
  { 
    id: 'e1-1a',
    source: '0',  
    target: '0a', 
    sourceHandle: 'r', 
    type: 'straight', 
    animated: 'true', 
    targetHandle: 'l',
    markerEnd: { type: MarkerType.Arrow }, 
  },
  { 
    id: 'e1a-2a',
    source: '0a',  
    sourceHandle: 'b', 
    target: '1a', 
    type: 'buttonedge', 
    animated: 'true', 
    targetHandle: 'u',   
    markerStart: { type: MarkerType.Arrow }
  },
  { 
    id: 'e1a-3a',
    source: '0a',  
    sourceHandle: 'b', 
    target: '2a', 
    type: 'buttonedge', 
    animated: 'true', 
    targetHandle: 'u'
  },
];

const nodeTypes = {
  creator: (props) => (
    <ClassNode
      {...props}
      color1={'#009688'}
      color2={'#4DB6AC'}
      className={nodeTypes['creator'].className}
      methods={nodeTypes['creator'].methods}
      activeHandles={[0, 1, 1, 0]}
      id="0"
      title="Creator Class"
      description ={creatorDescription}
      nameChange={nodeTypes['creator'].nameChange}
    />
  ),

  concreteCreator: (props) => (
    <ClassNode
      {...props}
      color1={'#009688'}
      color2={'#4DB6AC'}
      className={nodeTypes['concreteCreator'].className}
      methods={nodeTypes['concreteCreator'].methods}
      activeHandles={[1, 0, 0, 0]}
      id={nodeTypes['concreteCreator'].id}
      onDelete={nodeTypes['concreteCreator'].onDelete}
      title="Concrete Creator Class"
      description ={concreteCreatorDescription}
    />
  ),
  concreteCreator1: (props) => (
    <ClassNode
      {...props}
      color1={'#009688'}
      color2={'#4DB6AC'}
      className={nodeTypes['concreteCreator1'].className}
      methods={nodeTypes['concreteCreator1'].methods}
      activeHandles={[1, 0, 0, 0]}
      id="1"
      title="Concrete Creator Class"
      description ={concreteCreatorDescription}
      nameChange={nodeTypes['concreteCreator1'].nameChange}
    />
  ),
  concreteCreator2: (props) => (
    <ClassNode
      {...props}
      color1={'#009688'}
      color2={'#4DB6AC'}
      className={nodeTypes['concreteCreator2'].className}
      methods={nodeTypes['concreteCreator2'].methods}
      activeHandles={[1, 0, 0, 0]}
      id="2"
      title="Concrete Creator Class"
      description ={concreteCreatorDescription}
      nameChange={nodeTypes['concreteCreator2'].nameChange}
    />
  ),
  product: (props) => (
    <ClassNode
      {...props}
      color1={'#BF4D4D'}
      color2={'#CD7F7F'}
      className={nodeTypes['product'].className}
      methods={nodeTypes['product'].methods}
      activeHandles={[0, 1, 0, 1]}
      id="0a"
      title="Product Interface"
      description ={productInterfaceDescription}
      nameChange={nodeTypes['product'].nameChange}
    />
  ),
  concreteProduct: (props) => (
    <ClassNode
      {...props}
      color1={'#009688'}
      color2={'#4DB6AC'}
      className={nodeTypes['concreteProduct'].className}
      methods={[]}
      activeHandles={[1, 0, 0, 0]}
      id={nodeTypes['concreteProduct'].id}
      onDelete={nodeTypes['concreteProduct'].onDelete}
      title="Concrete Product"
      description ={concreteProductDescription}
      nameChange={nodeTypes['concreteProduct'].nameChange}
  />
  ),
  concreteProduct1: (props) => (
    <ClassNode
      {...props}
      color1={'#009688'}
      color2={'#4DB6AC'}
      className={nodeTypes['concreteProduct1'].className}
      methods={nodeTypes['concreteProduct1'].methods}
      activeHandles={[1, 0, 0, 0]}
      id="1a"
      title="Concrete Product"
      description ={concreteProductDescription}
      nameChange={nodeTypes['concreteProduct1'].nameChange}
    />
  ),
    concreteProduct2: (props) => (
      <ClassNode
        {...props}
        color1={'#009688'}
        color2={'#4DB6AC'}
        className={nodeTypes['concreteProduct2'].className}
        methods={nodeTypes['concreteProduct1'].methods}
        activeHandles={[1, 0, 0, 0]}
        id="2a"
        title="Concrete Product"
        description ={concreteProductDescription}
        nameChange={nodeTypes['concreteProduct2'].nameChange}
      />
    ),
  };
  function handleDelete() {}
  const handleClassNameChange = (e) => {};
  
  //Classes
  nodeTypes['creator'].className = "Creator";
  nodeTypes['concreteCreator'].className = "concreteCreator";
  nodeTypes['concreteCreator1'].className = 'ConcreteCreator1';
  nodeTypes['concreteCreator2'].className = 'ConcreteCreator2';
  nodeTypes['product'].className = 'Product';
  nodeTypes['concreteProduct'].className = "concreteProduct";
  nodeTypes['concreteProduct1'].className = 'ConcreteProduct1';
  nodeTypes['concreteProduct2'].className = 'ConcreteProduct2';
 
  //Methods
  nodeTypes['creator'].methods = ['createProduct'];
  nodeTypes['concreteCreator'].methods = ['createProduct', 'method2'];
  nodeTypes['concreteCreator1'].methods = ['createProduct', 'method2'];
  nodeTypes['concreteCreator2'].methods = ['createProduct', 'method2'];
  nodeTypes['product'].methods = ["doSuff"];
  nodeTypes['concreteProduct1'].methods = ["doSuff"];
  nodeTypes['concreteProduct2'].methods = ["doSuff"];

  //ids
  nodeTypes['concreteCreator'].id = "100";
  nodeTypes['concreteProduct'].id = "101";
  
  //Deletable
  nodeTypes['concreteCreator'].onDelete = handleDelete;
  nodeTypes['concreteProduct'].onDelete = handleDelete;
  
  
  for (const key in nodeTypes) {
    if (Object.prototype.hasOwnProperty.call(nodeTypes, key)) {
      const nodeType = nodeTypes[key];
      nodeType.nameChange = handleClassNameChange;
    }
  }


  const edgeTypes = {
    buttonedge: ButtonEdge,
  };

export { initialNodes, initialEdges, nodeTypes, edgeTypes };
