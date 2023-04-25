import { motion } from 'framer-motion';
import React from 'react';
import { Handle, Position } from 'reactflow';

const CodeNode = ({ id, data: { codeWritten, handles, connectedId }, color1: backColor }) => {
  const container = {
    hidden: {opactity: 0, y: -1000},
    show: {
      rotate: [0, 0, 270, 270, 0],
      opacity: 1,
      y: 0,
      transition:{
        duration: 1.5,
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }
    }
  }

  return (
    <div>
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div
        style={{
          backgroundColor: backColor,
          padding: '5px',
          fontSize: '10px',
          paddingRight: '20px',
          position: 'relative',
          borderTopRightRadius: '20px',
          overflow: 'hidden',
          border: '1px solid black',
        }}
      >
        {codeWritten && codeWritten(connectedId, id)}
      </div>
      </motion.div>

      <div>
        {handles[0] === 1 && <Handle type="source" position={Position.Top} id="u" />}
        {handles[1] === 1 && <Handle type="source" position={Position.Bottom} id="d" />}
        {handles[2] === 1 && <Handle type="source" position={Position.Right} id="r" />}
        {handles[3] === 1 && <Handle type="source" position={Position.Left} id="l" />}

        {handles[4] === 1 && <Handle type="target" position={Position.Top} id="n" />}
        {handles[5] === 1 && <Handle type="target" position={Position.Bottom} id="s" />}
        {handles[6] === 1 && <Handle type="target" position={Position.Right} id="e" />}
        {handles[7] === 1 && <Handle type="target" position={Position.Left} id="w" />}
      </div>
    </div>
    
  );
};

export default CodeNode;
