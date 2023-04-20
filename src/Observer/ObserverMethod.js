import React, { useCallback, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, Controls } from 'reactflow';

import '../Patterns_CSS/index.css';
import 'reactflow/dist/style.css';
import '../Buttons.css';

import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './ObserverMethodInit';
import { handleAddMethod, handleClassNameChange, handleDeleteMethod, handleMethodNameChange, handleAttributeNameChange} from '../Interactivity/generalUtilities';
import { stepValues, edgeValues } from './DemoSteps';
import IncrementalHiddenButton from '../Interactivity/stepByStepDemo';
import { AddNodes } from './AddNode';
import { handleNodeDelete } from '../Interactivity/observerMethodUtilities';

const fitViewOptions = {
  padding: 0.4,
};

const ObserverMethod = (props) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [hidden, setHidden] = useState(stepValues[stepValues.length - 1]);
  const [edgeHidden, setEdgeHidden] = useState(edgeValues[edgeValues.length - 1]);
  const popHidden = [false, true, false, false, false, true];

  useEffect(() => {
    setNodes(nds => nds.map((node, i) => {  
      return {
        ...node,
        data: {
          ...node.data,
          class_name: node.data.class_name || "default",
          methods: node.data.methods || ["defaultMethod"],
          handleChanges: handleChanges,
          codeWritten: node.id === '0c' ? publisherCode1 :node.id === '0c2' ? publisherCode2: node.id === 'cc' ? clientCode: null,
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

  const publisherCode1 = () => {
    const subscribers = nodes.find(node => node.id === "0").data.attributes[0];
    const update = nodes.find(node => node.id === "0a").data.methods[0];

    return (
      <p>
        foreach (s in {subscribers})
        <br></br>
        s.{update}(this)
      </p>
    )
  };

  const publisherCode2 = () => {
    const mainState = nodes.find(node => node.id === "0").data.attributes[1];
    const notifySubscribers = nodes.find(node => node.id === "0").data.methods[2];

    return (
      <p>
        {mainState} = newState
        <br></br>
        {notifySubscribers}()
      </p>
    )
  };

  const clientCode = () => {
    const ConcreteSubscriber1 = nodes.find(node => node.id === "1a").data.class_name;
    const subscribe = nodes.find(node => node.id === "0").data.methods[0];
    
    return (
      <p>
        s = <b>new</b> {ConcreteSubscriber1}()
        <br></br>
        publisher.{subscribe}(s)
      </p>
    )
  };


  const handleChanges = useCallback((type, id, event, index) => {
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
        case "addClass":
            AddNodes({setNodes, setEdges, setHidden, setEdgeHidden})
            break;
        case "deleteNode":
            handleNodeDelete(id, nodes, edges, setNodes, setEdges)
            break;

      default:
        break;

    }
  }, []);
  
  return (
    <div className="wrapper" style={{ height: 800 }}>
      <IncrementalHiddenButton stepValues= {stepValues} setHidden={setHidden} edgeValues={edgeValues} setEdgeHidden={setEdgeHidden}/>
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

export default ObserverMethod;
