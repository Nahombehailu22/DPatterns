import { motion } from 'framer-motion';
import React from 'react';
import { Handle, Position } from 'reactflow';
import { SetHandles } from './NodeComponents';

const CodeNode = ({ id, data: { codeWritten, handles, connectedId }, color1 }) => {
  const backColor = color1? color1: '#333333';

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
        <SetHandles handles = {handles}/> 
    </div>
    
  );
};

export default CodeNode;
