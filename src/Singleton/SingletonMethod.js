import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, useReactFlow, Controls } from 'reactflow';

import '../Patterns_CSS/index.css';
import 'reactflow/dist/style.css';
import '../Buttons.css';

import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './SingletonMethodInit';
import IncrementalHiddenButton from '../Interactivity/stepByStepDemo';
import { handleAddMethod, handleClassNameChange, handleDeleteMethod, handleMethodNameChange, handleAttributeNameChange} from '../Interactivity/generalUtilities';
import { stepValues, edgeValues } from './DemoSteps';

const fitViewOptions = {
  padding: 1,
};

const SingletonMethod = (props) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [hidden, setHidden] = useState(stepValues[stepValues.length - 1]);
  const [edgeHidden, setEdgeHidden] = useState(edgeValues[edgeValues.length - 1]);
  const popHidden = [false, false];

  useEffect(() => {
    setNodes(nds => nds.map((node, i) => {
      return {
        ...node,
        data: {
          ...node.data,
          class_name: node.data.class_name || "default",
          methods: node.data.methods || ["defaultMethod"],
          handleChanges: handleChanges,
          codeWritten: node.type === 'code' ? writeCode: node.data.writeCode,
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
    }));
  });
  
  const writeCode = () => {
    const instanceNode = nodes.find(node => node.id === "0")
    const instance = instanceNode.data.attributes.find(attribute => attribute.id === "1").name
    // const instance = nodes[0].data.attributes[0]
    const classSingleton = nodes.find(node => node.id === "0").data.class_name;

    return (
      <p>
        if({instance}==null) {'{'}
        <br></br>
        &nbsp;&nbsp;&nbsp;instance = new {classSingleton}()
        <br></br>
        {'}'}
        <br></br>
        return {instance}
      </p>
    )
  };

  const handleChanges = useCallback((type, id, event, index) => {

    if (id === "0"){
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
        case "changeMethodName":
          handleMethodNameChange(id, index, event, nodes, setNodes)
          break;
        case "attributeName":
          handleAttributeNameChange(id, index, event, nodes, setNodes)
          break;
        default:
          break;
      }
    }
  
  }, []);

 
  return (
    <div className="wrapper" style={{ height: 800 }}>
      <IncrementalHiddenButton stepValues={stepValues} setHidden={setHidden} edgeValues={edgeValues} setEdgeHidden={setEdgeHidden}/>
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

export default SingletonMethod;


