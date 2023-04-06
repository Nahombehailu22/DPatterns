import React, {useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import InfoPopover from './Popover.js';

function ClientClassNode({ id, data, color1, color2 }) {
  const { class_name, handles, title, description, nameClass, pop } = data;
  const backColor = color1;
  const backColorMethod = color2;

  // Calculate the width of the class and method names
  const classWidth = class_name.length * 3 + 70;

  return (
    <div className='text-updater-node' style={{background: backColor, color:"white"}}>
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
            type="text"
            placeholder={class_name ? class_name : "Class Name"}
            value={class_name}
            onChange={(e) => {
              nameClass(id, e);
            }}
            style={{ backgroundColor: backColor, width: classWidth }}
          />
        </div>

          {handles[0] === 1 && <Handle type="target" position={Position.Top} id='u'/>}
          {handles[1] === 1 && <Handle type="source" position={Position.Bottom} id="b" />}
          {handles[2] === 1 && <Handle type="source" position={Position.Right} id="r" />}
          {handles[3] === 1 && <Handle type="target" position={Position.Left} id='l'/>}
        </div>
    </div>
  );
  
}

export default ClientClassNode;
