import React, {useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import InfoPopover from './Popover.js';

function GenericClassNode({ id, data, color1, color2 }) {
  const { class_name, handles, title, description, nameClass, pop } = data;
  const backColor = color1;
  const backColorMethod = color2;

  // Calculate the width of the class and method names
  const classWidth = class_name.length * 3 + 75;

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
