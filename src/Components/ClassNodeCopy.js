import React, {useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import InfoPopover from './Popover.js';
import { motion } from 'framer-motion';
import { TextField } from '@mui/material';


const container = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5
    }
  },
  whileHover: {
    scale: 1.2,
    transition: { duration: 1 },
  }
}


const ClassNode = ({
  id,
  data: {
    class_name,
    attributes,
    methods,
    handles,
    title,
    description,
    deletable,
    pop,
    connectable,
    handleChanges,
  },
  color1,
  color2
}) => {
  const backColor = color1? color1: '#009688';
  const backColorMethod = color2? color2: '#4DB6AC';
  
  const statusMap = new Map([["protected", "#"],["private", "-"]])
  
  return (
    <div className='text-updater-node' >
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      whileHover="whileHover"
      style={{background: backColor, color:"white"}}>
      {deletable && (
        <button className="delete-button" onClick={() => handleChanges("deleteNode", id)}>
          X
        </button>
      )}
      <InfoPopover title={title} description={description} backColor={backColor} hide={pop} />
      <div>
        <div style={{ backgroundColor: backColor, padding: '10px'}}>
          <input
            // type="text"
            placeholder={class_name ? class_name : "Class Name"}
            value={class_name}
            onChange={(e) => { handleChanges("className", id, e); }}
            style={{ backgroundColor: backColor, width: class_name? class_name.length *6 + 20: 70 }}
          />
        </div>

        <div style={{ backgroundColor: backColorMethod, borderBottom: `2px solid ${backColor}` }}> 
          {!attributes ? <label style ={{ fontSize: "20px"}}>...</label> :
            attributes.map((attribute, idx) => (
              <div key={idx} style={{ margin: 0 }}>
                <label>{attribute.status ? statusMap.get(attribute.status) : "+"}</label>
                <input
                  // type="text"
                  placeholder="instance"
                  value={attribute.name}
                  onChange={(e) => handleChanges("attributeName", id, e, attribute.id)}
                  style={{ backgroundColor: backColorMethod, width: attribute.name.length*6 + 20 }}
                />
              </div>
            ))
          }
        </div>

        <div style={{ backgroundColor: backColorMethod, borderRadius: '0 0 10px 10px', paddingRight:'5px' }}> 
          {methods && methods.map((method, idx) => (
            <div key={idx} style={{ margin: 0 }}>
              <label>{method.status ? statusMap.get(method.status) : "+"}</label>
              <input
                // type="text"
                placeholder="method"
                value={method.name}
                onChange={(e) => handleChanges("changeMethodName", id, e, method.id)}
                style={{backgroundColor: backColorMethod, width: method.name? method.name.length*5 + 35: 70 }}
              /><span>(
                {method.parameters && method.parameters.map((param, pId) => (
                <div style={{ display: "inline-block" }}>
                <input
                // type="text"
                placeholder="method"
                value={param}
                onChange={(e) => handleChanges("changeParameter", id, e, method.id, pId)}
                style={{backgroundColor: backColorMethod, width: param? param.length*5+15: 70 }}
                />{pId < method.parameters.length - 1 ? ",":"" }
                </div>
                ))}
              )</span>
              {!method.notDeletable &&
                <button type="button" 
                  style = {{ backgroundColor: backColorMethod }} 
                  onClick={(e) => handleChanges("deleteMethod", id, e, idx, method.id)}
                  > 
                  - 
                </button>
              }         
              
          </div>
          ))}
          <button type="button" style = {{ backgroundColor: backColor}} onClick={() => handleChanges("addMethod", id)} > 
            + Add method 
          </button>
          <br/>
          {connectable && 
              <button type="button" style = {{ backgroundColor: backColor, position: 'relative', left: '40px' }} onClick={() => handleChanges("addClass",id)} > 
                Add Class</button>}
          </div>
        </div>
        </motion.div>
        <div>
          {handles[0] === 1 && <Handle type="source" position={Position.Top} id='u'/>}
          {handles[1] === 1 && <Handle type="source" position={Position.Bottom} id="d"
          />}
           
          {handles[2] === 1 && <Handle type="source" position={Position.Right} id="r" 
            style={{ top: 100}}/>}
          {handles[3] === 1 && <Handle type="source" position={Position.Left} id='l'/>}

          {handles[4] === 1 && <Handle type="target" position={Position.Top} id='n'/>}
          {handles[5] === 1 && <Handle type="target" position={Position.Bottom} id="s" />}
          {handles[6] === 1 && <Handle type="target" position={Position.Right} id="e" 
            style={{ top: 50}}
          />}
          {handles[7] === 1 && <Handle type="target" position={Position.Left} id='w'/>}
        </div>
    
    </div>
  );
  
}

export default ClassNode;
