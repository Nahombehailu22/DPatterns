import React, {useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import InfoPopover from './Popover.js';

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
  color1: backColor,
  color2: backColorMethod,
}) => {

  const classWidth = class_name.length * 3 + 70;
  const methodWidth = methods.reduce((acc, str) => Math.max(acc, str.length), 0) * 3 + 70;

  return (
    <div className='text-updater-node' style={{background: backColor, color:"white", border: '1px solid black'}}>
      <div>
        {deletable && (
          <button className="delete-button" onClick={() => handleChanges("deleteNode", id)}>
            X
          </button>
        )}
        <InfoPopover title={title} description={description} backColor={backColor} hide={pop} />
      </div>
      <div>
        <div style={{ backgroundColor: backColor, padding: '10px'}}>
          <input
            type="text"
            placeholder={class_name ? class_name : "Class Name"}
            value={class_name}
            onChange={(e) => {
              handleChanges("className", id, e);
            }}
            style={{ backgroundColor: backColor, width: classWidth }}
          />
        </div>

        <div style={{ backgroundColor: backColorMethod, borderBottom: `2px solid ${backColor}` }}> 
          {!attributes ? <label style ={{ fontSize: "20px"}}>...</label> :
            attributes.map((attribute, idx) => (
              <div key={idx} style={{ margin: 0 }}>
                <label>-</label>
                <input
                  type="text"
                  placeholder="instance"
                  value={attribute}
                  onChange={(e) => handleChanges("attributeName", id, e, idx)}
                  style={{ backgroundColor: backColorMethod, width: methodWidth }}
                />
              </div>
            ))
          }
        </div>

          <div style={{ backgroundColor: backColorMethod, borderRadius: '0 0 10px 10px' }}> 
            {methods.map((method, idx) => (
              <div key={idx} style={{ margin: 0 }}>
                <label>+</label>
                <input
                  type="text"
                  placeholder="method"
                  value={method}
                  onChange={(e) => handleChanges("changeMethodName", id, e, idx)}
                  style={{ backgroundColor: backColorMethod, width: methodWidth }}
                />
                <button type="button" 
                  style = {{ backgroundColor: backColorMethod }} 
                  onClick={(e) => handleChanges("deleteMethod", id, e, idx)}
                  > 
                  - 
                </button>
            </div>
          ))}
          <button type="button" style = {{ backgroundColor: backColor , borderRadius: '10px'}} onClick={() => handleChanges("addMethod", id)} > 
            + Add method 
          </button>

        </div>
          {handles[0] === 1 && 
            <Handle type="source" position={Position.Top} id='u'/>
            }
          {handles[1] === 1 && 
            <div>
              <Handle type="source" position={Position.Bottom} id="d" />
              {connectable && 
              <button type="button" style = {{ backgroundColor: backColorMethod, position: 'relative', left: '50px',height: '20px' }} onClick={() => handleChanges("addClass")} > 
                Add Class</button>}
          </div>
          }
           
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
