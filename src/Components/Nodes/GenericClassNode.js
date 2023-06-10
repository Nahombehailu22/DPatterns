import React, {useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import InfoPopover from '../Popover.js';
import { motion } from 'framer-motion';

function GenericClassNode({ id, data, color1, color2 }) {
  const { class_name, handles, title, description, handleChanges, pop } = data;
  const backColor = color1 ? color1 : '#00796b';
  const backColorMethod = color2;


  const container = {
    hidden: {opacity: 0, x: -1000},
    show:{
      opacity:1,
      x:0,
      transition:{
        type:'spring',
        duration: 1.5,
        bounce:0.25,

      }
    },

    whileHover: {
      scale: 1.2,
      transition: { duration: 1 },
    }
  }

  return (
    <div className='text-updater-node' >
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      whileHover="whileHover"

      className='text-updater-node' 
      style={{background: backColor, color:"white"}}>
      <div>
       <InfoPopover 
          title = {title}
          description = {description}
          backColor={backColor} 
          hide={pop}
          />
      </div>
      <div>
        <div style={{ backgroundColor: backColor, padding: '10px'}}>
          <input
            // type="text"
            placeholder={class_name ? class_name : "Class Name"}
            value={class_name}
            onChange={(e) => {
              handleChanges("className", id, e);
            }}
            style={{ backgroundColor: backColor, width: class_name ? class_name.length * 3 + 95: 100 }}
          />
        </div>
        </div>
        </motion.div>
        <div>
          {handles[0] === 1 && <Handle type="source" position={Position.Top} id='u'/>}
          {handles[1] === 1 && <Handle type="source" position={Position.Bottom} id="d"/>}
          {handles[2] === 1 && <Handle type="source" position={Position.Right} id="r"/>}
          {handles[3] === 1 && <Handle type="source" position={Position.Left} id='l'/>}

          {handles[4] === 1 && <Handle type="target" position={Position.Top} id='n'/>}
          {handles[5] === 1 && <Handle type="target" position={Position.Bottom} id="s"/>}
          {handles[6] === 1 && <Handle type="target" position={Position.Right} id="e"/>}
          {handles[7] === 1 && <Handle type="target" position={Position.Left} id='w'/>}
          </div>
        
    
    </div>
  );
  
}

export default GenericClassNode;
