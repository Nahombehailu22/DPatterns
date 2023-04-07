import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, useReactFlow, Controls } from 'reactflow';

import './index.css';
import 'reactflow/dist/style.css';
import '../Buttons.css';

import {initialNodes, initialEdges, nodeTypes, edgeTypes} from './SingletonMethodInit';
import IncrementalHiddenButton from './HideUnhideNodes.js';

const fitViewOptions = {
  padding: 1,
};

const SingletonMethod = (props) => {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [hidden, setHidden] = useState([false, true]);
  const popHidden = [false, false];

  const writeCode = () => {
    // const instance = nodes[0].data.attributes[0]
    // const classSingleton = nodes[0].data.class_name

    return (
      <p>
        if(instance==null) {'{'}
        <br></br>
        &nbsp;&nbsp;&nbsp;instance = new Singleton()
        <br></br>
        {'}'}
        <br></br>
        return instance
      </p>
    )
  };

  useEffect(() => {
    setNodes(nds => nds.map((node, i) => {
      return {
        ...node,
        data: {
          ...node.data,
          class_name: node.data.class_name || "default",
          methods: node.data.methods || ["defaultMethod"],
          nameClass: node.id === '0' ? handleClassNameChange : node.data.nameClass,
          nameAttribute: node.id === '0' ? handleAttributeNameChange : node.data.nameAttribute,
          nameMethod: node.id === '0' ? handleMethodNameChange : node.data.nameMethod,
          addMethod: node.id === '0' ? handleAddMethod : node.data.addMethod,
          deleteMethod: node.id === '0' ? handleDeleteMethod : node.data.deleteMethod,
          codeWritten: node.type === 'code' ? writeCode: node.data.writeCode,
          pop: popHidden[i],
        },
        hidden: hidden[i]
      };
    }));
  
    setEdges(eds => eds.map((edge, i) => {
      return {
        ...edge,
        hidden: hidden[i + 1]
      };
    }));
  });
  
  const handleClassNameChange = useCallback((id, event) => {
    setNodes(nodes => nodes.map(node => {
      if (node.id === id) {
        return {
          ...node,
          data: {
            ...node.data,
            class_name: event.target.value
          }
        };
      }
      return node;
    }));
  }, []);

  const handleMethodNameChange = (id, index, event) => {
    setNodes(nodes => nodes.map(node => {
      if (node.id === id) {
        const newMethods = [...node.data.methods];
        newMethods[index] = event.target.value;
        
        return {
          ...node,
          data: {
            ...node.data,
            methods: newMethods
          }
        };
      }
      return node;
    }));
  };

  const handleAttributeNameChange = (id, index, event) => {
    setNodes(nodes => nodes.map(node => {
      if (node.id === id) {
        const newAtrributes = [...node.data.attributes];
        newAtrributes[index] = event.target.value;
        
        return {
          ...node,
          data: {
            ...node.data,
            attributes: newAtrributes
          }
        };
      }
      return node;
    }));
  };

  const handleAddMethod = useCallback((id) => {
    setNodes(nodes => nodes.map(node => {
      if (node.id === id) {
        const nextID = node.data.methods.length + 1;
        const newMethods = [...node.data.methods, `method${nextID}`];
        
        return {
          ...node,
          data: {
            ...node.data,
            methods: newMethods
          }
        };
      }
      return node;
    }));
  }, []);

  const handleDeleteMethod = useCallback((id, index) => {
    setNodes(nodes => nodes.map(node => {
      if (node.id === id) {
        const newMethods = [...node.data.methods];
        newMethods.splice(index, 1);
  
        return {
          ...node,
          data: {
            ...node.data,
            methods: newMethods
          }
        };
      }
      return node;
    }));
  }, []);




  const { project } = useReactFlow();
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);
  const onConnectStart = useCallback((_, { nodeId }) => connectingNodeId.current = nodeId, []);


  return (
    <div className="wrapper" ref={reactFlowWrapper} style={{ height: 800 }}>
      <IncrementalHiddenButton hidden={hidden} setHidden={setHidden}/>
      <Controls className="controls" />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}

        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={fitViewOptions}
      />
    </div>
  );
};

export default SingletonMethod;


