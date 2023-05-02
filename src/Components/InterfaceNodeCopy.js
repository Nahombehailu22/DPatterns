import React, {useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import InfoPopover from './Popover.js';
import { motion } from 'framer-motion';

function InterfaceNode({ id, data, color1, color2 }) {
  const { class_name, methods, handles, title, description, handleChanges, connectable, onDelete, deleteMethod, deletable, pop } = data;
  const backColor = color1? color1: '#BF4D4D';
  const backColorMethod = color2? color2: '#CD7F7F';

  const container = {
    hidden: {opacity: 0, scale: 0.5},
    show: {
      opacity: 1,
      scale: 1,
      transition:{
        duration: 1.5,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
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
        {deletable && (
          <button className="delete-button" onClick={() => onDelete(id)}>
            X
          </button>
        )}
       <InfoPopover 
          title = {title}
          description = {description}
          backColor={backColor} 
          hide={pop}
          />
      </div>
      <div>
        
        <div style={{ backgroundColor: backColor, padding: '10px'}}>
        <label style= {{ fontSize: "12px" }}> {"<<"}interface{">>"} </label>
        <br></br>
          <input
            // type="text"
            placeholder={class_name ? class_name : "Class Name"}
            value={class_name}
            onChange={(e) => {
              handleChanges("className", id, e);
            }}
            style={{ backgroundColor: backColor, width: class_name? class_name.length *6 + 20: 70 }}
          />
      </div>
        <div style={{ backgroundColor: backColorMethod, borderRadius: '0 0 10px 10px' }}> 
          {methods && methods.map((method, idx) => (
            <div key={idx} style={{ margin: 0 }}>
              <label>+</label>
              <input
                // type="text"
                placeholder="method"
                value={method.name}
                onChange={(e) => handleChanges("changeMethodName", id, e, method.id)}
                style={{ backgroundColor: backColorMethod, width: method.name? method.name.length*6 + 20: 70 }}
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
              <button type="button" 
                style = {{ backgroundColor: backColorMethod }} 
                onClick={(e) => handleChanges("deleteMethod", id, e, idx, method.id)}
                > 
                - 
              </button>
            </div>
          ))}
          <button type="button" style = {{ backgroundColor: backColor }} onClick={() => handleChanges("addMethod", id)}> 
            + Add method 
          </button>
          <br></br>
          {connectable && 
              <button type="button" style = {{ backgroundColor: backColor, position: 'relative', left: '50px',height: '20px' }} onClick={() => handleChanges("addClass", id)} > 
                Add Class</button>}
        </div>
        </div>
        </motion.div>
        <div>
            {['u', 'd', 'r', 'l', 'n', 's', 'e', 'w'].map((id, index) => (
              handles[index] === 1 && (
                <Handle 
                  key={id} 
                  type={index < 4 ? "source" : "target"} 
                  position={index % 4 === 0 ? Position.Top 
                          : index % 4 === 1 ? Position.Bottom 
                          : index % 4 === 2 ? Position.Right 
                                            : Position.Left} 
                  id={id} 
                />
              )
            ))}
          </div>
        
    
    </div>
  );
  
}

export default InterfaceNode;
