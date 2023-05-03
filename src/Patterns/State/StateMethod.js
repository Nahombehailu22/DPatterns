import React, { useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, Controls } from 'reactflow';

import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './StateMethodInit';
import { handleAddMethod, handleClassNameChange, handleDeleteMethod, handleMethodNameChange, handleAttributeNameChange, findMissingID, handleNodeDelete} from '../../Interactivity/generalUtilities';
import { stepValues, edgeValues } from './DemoSteps';
import IncrementalHiddenButton from '../../Interactivity/stepByStepDemo';
import { AddNodes } from './AddNode';
import { updateNodeMethods } from '../../Interactivity/stateMethodUtilities';
import { clientCode, StateCode1,StateCode2 } from './nodeCodes';
import { updateNodes } from '../../Interactivity/updateNodes';

const fitViewOptions = {
    padding: 0.4,
  };

const StateMethod = (props) => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
    const [hidden, setHidden] = useState(stepValues[stepValues.length - 1]);
    const [edgeHidden, setEdgeHidden] = useState(edgeValues[edgeValues.length - 1]);
    const popHidden = [false, true, false, false, false, true];
    
    useEffect(() => { updateNodes(setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden) });
  
  
  
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
          case "changeMethodName":
              handleMethodNameChange(id, index, event, nodes, setNodes)
              updateNodeMethods(nodes,setNodes)
              break;
          case "attributeName":
              handleAttributeNameChange(id, index, event, nodes, setNodes)
              break;
          case "addClass":
            const nums = nodes
            .filter(node => node.id.endsWith('a'))
            .map(node => parseInt(node.id.slice(0, -1)));

            const newID = findMissingID(nums)
            AddNodes({setNodes, setEdges, setHidden, setEdgeHidden, newID})
            updateNodeMethods(nodes,setNodes)
            break;

          case "deleteNode":
              handleNodeDelete(id, nodes, edges, setNodes, setEdges)
              break;
  
        default:
          break;
  
      }
    };

    const codeWritten = (connectingID, id) => {
      switch(id){
        case '0c':
          return (<div>{StateCode1(nodes)}</div>)
        case '0c2':
          return (<div>{StateCode2(nodes)}</div>)
    
        default:
          return (<div>{clientCode(nodes)}</div>)
      }
     }
    
    
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
  
  export default StateMethod;
  