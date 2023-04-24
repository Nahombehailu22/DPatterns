import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, useReactFlow, Controls } from 'reactflow';

import '../Patterns_CSS/index.css';
import 'reactflow/dist/style.css';
import '../Buttons.css';
import '../Patterns_CSS/demo.css';

import { AddNodes } from '../Abstract_Factory/AddNode';
import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './AbstractFactoryMethodInit';
import { handleAddMethod, handleClassNameChange, handleDeleteMethod, handleMethodNameChange, handleAttributeNameChange} from '../Interactivity/generalUtilities';
import { handleNodeDelete, updateNodeMethods } from '../Interactivity/abstractFactoryUtilities';
import { edgeValues, stepValues } from './DemoSteps';
import IncrementalHiddenButton from '../Interactivity/stepByStepDemo';

const fitViewOptions = {
  padding: 0.2,
};


const AbstractFactoryMethod = (props) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  const [hidden, setHidden] = useState(stepValues[stepValues.length - 1]);
  const [edgeHidden, setEdgeHidden] = useState(edgeValues[edgeValues.length - 1]);
  const popHidden = [true, true, true, true, true, true];

  const findMissing = (methods) => {
    const nums = methods.map(method => method.id.charCodeAt() - 65);

    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== i + 1 && nums[i] > 0) {
            const idx = nums[i] - 1;
            if (nums[i] > nums.length || nums[idx] === nums[i]) {
                nums[i] = -1;
            } else {
                [nums[nums[i]-1 ], nums[i]] = [nums[i], nums[nums[i]-1]];
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= 0) {
            return i + 1;
        }
    }

    return nums.length + 1;
}

  useEffect(() => {
    setNodes(nds => nds.map((node, i) => {  
      return {
        ...node,
        data: {
          ...node.data,
          class_name: node.data.class_name || "default",
          methods: node.data.methods || ["defaultMethod"],
          handleChanges: handleChanges,
          codeWritten: node.id === "c1"? productCode: node.id === "2a" ? concreteFactoryCode: null,
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
    const productA = nodes.find(node => node.id === "0a").data.class_name;

    const factoryNode = nodes.find(node => node.id === "c")
    const factory = factoryNode.data.attributes.find(attribute => attribute.id === "1").name
    
    const node = nodes.find(node => node.id === "0");
    const abstractFactoryA = node.data.methods.find(method => method.id === "A").name;    

    return (
      <p>
        {productA} pa = {factory}.{abstractFactoryA}()
      </p>
    )
  };

  const concreteFactoryCode = (currID) => {
    const concreteProduct = nodes.find(node => node.id === `0a${currID}`).data.class_name;
    return (
      <p>
          <b>return new</b> {concreteProduct}
      </p>
    )
  };
  
  const handleChanges = (type, id, event, index, methodId) => {
    switch(type){
      case "className":
        handleClassNameChange(id, event, nodes, setNodes)
        break;
      case "addMethod":
       
        const methods = nodes.find(node => node.id === id).data.methods;
        const nextID = findMissing(methods) + 65
        const newID = String.fromCharCode(nextID)

        handleAddMethod(id, nodes, setNodes, "createProduct", newID)
        if (id == '0'){
          handleAddMethod("1", nodes, setNodes, "createProduct",newID)
          handleAddMethod("2", nodes, setNodes, "createProduct",newID)
        }
        AddNodes({ setNodes, setEdges, setHidden, setEdgeHidden, nextID })
        break;
      case "deleteMethod":
        handleDeleteMethod(id, index, nodes, setNodes)
        updateNodeMethods(nodes, setNodes)
        handleNodeDelete(index, nodes, edges, setNodes, setEdges, methodId)
        break;
      case "changeMethodName":
        handleMethodNameChange(id, index, event, nodes, setNodes)
        updateNodeMethods(nodes, setNodes)
        break;
      case "attributeName":
        handleAttributeNameChange(id, index, event, nodes, setNodes)
        break;

      default:
        break;

    }
  };




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

export default AbstractFactoryMethod;
