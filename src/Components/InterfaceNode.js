import React, {useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import InfoPopover from './Popover.js';

function InterfaceNode({ id, data, color1, color2 }) {
  const { class_name, methods, handles, title, description, handleChanges, nameMethod, onDelete, addMethod, deleteMethod, deletable, pop } = data;
  const backColor = color1;
  const backColorMethod = color2;

  // Calculate the width of the class and method names
  const classWidth = class_name.length * 3 + 70;
  const methodWidth = methods.reduce((acc, str) => Math.max(acc, str.length), 0) * 3 + 70;

  return (
    <div className='text-updater-node' style={{background: backColor, color:"white"}}>
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
        <label style= {{ fontSize: "12px" }}> &lt;&lt;interface&gt;&gt; </label>
        <br></br>
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
          <button type="button" style = {{ backgroundColor: backColor }} onClick={() => handleChanges("addMethod", id)}> 
            + Add method 
          </button>
        </div>
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
