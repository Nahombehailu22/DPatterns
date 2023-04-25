import React, { useCallback, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, Controls } from 'reactflow';

import '../Patterns_CSS/index.css';
import 'reactflow/dist/style.css';
import '../Buttons.css';

import { AddNodes } from './AddNode';
import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './factoryMethodInit';
import { findMissingID, handleAddMethod, handleClassNameChange, handleDeleteMethod, handleMethodNameChange} from '../Interactivity/generalUtilities';
import { handleNodeDelete, updateNodeMethods } from '../Interactivity/factoryMethodUtilities';
import { stepValues, edgeValues, popValues } from './DemoSteps';
import IncrementalHiddenButton from '../Interactivity/stepByStepDemo';

const fitViewOptions = {
  padding: 0.4,
};

const FactoryMethod = (props) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [hidden, setHidden] = useState(stepValues[stepValues.length - 1]);
  const [edgeHidden, setEdgeHidden] = useState(edgeValues[edgeValues.length - 1]);
  const [popHidden, setPopHidden] = useState(popValues[popValues.length - 1])
  const demoProps = {stepValues, setHidden, edgeValues, setEdgeHidden, popValues, setPopHidden};

  useEffect(() => {
    setNodes(nds => nds.map((node, i) => {  
      return {
        ...node,
        data: {
          ...node.data,
          class_name: node.data.class_name || "default",
          methods: node.data.methods || ["defaultMethod"],
          handleChanges: handleChanges,
          codeWritten: node.id === '0b' ? productCode : concreteCreatorCode,
          pop: popHidden[i],
          
        },
        hidden: hidden[i]
      };
    }));
  
    setEdges(eds => eds.map((edge, i) => {
      return {
        ...edge,
        hidden: edgeHidden[i]
      };
    }), []);
  });

  const productCode = () => {
    const factoryNode = nodes.find(node => node.id === "0");
    const factoryMethod = factoryNode.data.methods.find(method => method.id === "2").name;

    const interfaceNode = nodes.find(node => node.id === "0a")
    const interfaceMethod = interfaceNode.data.methods.find(method => method.id === "1").name
    const interfaceClass = interfaceNode.data.class_name;

    return (
      <p>
        {interfaceClass} p = {factoryMethod}()
        <br></br>
        p.{interfaceMethod}()
      </p>
    )
  };
  
  const concreteCreatorCode = (currID) => {
    const concreteProduct = nodes.find(node => node.id === `${currID}a`).data.class_name;
    return (
      <p>
          <b>return new</b> {concreteProduct}
      </p>
    )
  };

  const handleChanges = (type, id, event, index) => {
    switch(type){
      case "className":
        handleClassNameChange(id, event, nodes, setNodes)
        break;
      case "addMethod":
        handleAddMethod(id, nodes, setNodes)
        break;
      case "deleteMethod":
        handleDeleteMethod(id, index, nodes, setNodes)
        break;
      case "deleteNode":
        handleNodeDelete(id, nodes, edges, setNodes, setEdges)
        break;
      case "changeMethodName":
        handleMethodNameChange(id, index, event, nodes, setNodes)
        updateNodeMethods(nodes,setNodes)
        break;
      case "addClass":
        const nums = nodes.filter(node => !isNaN(node.id)).map(node => parseInt(node.id));      
        const newID = findMissingID(nums) 

        AddNodes({setNodes, setEdges, setHidden, setEdgeHidden, newID})
        updateNodeMethods(nodes,setNodes)
        break;

      default:
        break;

    }
  };
  
  return (
    <div className="wrapper" style={{ height: 800 }}>
      <IncrementalHiddenButton {...demoProps} />
      <Controls className="controls" style={{position: "fixed", bottom: "0", left: "0"}} />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={fitViewOptions}
      />
    </div>
  );
};

export default FactoryMethod;
