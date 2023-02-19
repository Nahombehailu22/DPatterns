import React, {useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import InfoPopover from './Popover.js';

const ClassNode = React.memo(props => {
  // Define state variables
  const [className, setClassName] = useState(props.className);
  const [methods, setMethods] = useState(props.methods || []);
  const title = props.title;
  const description = props.description;

  // Extract properties from props
  const handles = props.activeHandles;
  const backColor = props.color1;
  const backColorMethod = props.color2;

  // Calculate the width of the class and method names
  const classWidth = className.length * 3 + 70;
  const methodWidth = methods.reduce((acc, str) => Math.max(acc, str.length), 0) * 3 + 70;

  // Set the onDelete function, if it exists
  const onDelete = props.onDelete !== undefined ? props.onDelete : undefined;
  const handleClassNameChange = props.nameChange !== undefined ? props.nameChange : undefined;
  
  if (!handleClassNameChange) {
    const handleClassNameChange = (e) => {
      setClassName(e.target.value);
    };
  }

  // Define the event handlers for input changes
  // const handleClassNameChange = (e) => {
  //   setClassName(e.target.value);
  // };

  const handleMethodNameChange = (idx, e) => {
    const newMethods = methods.map((method, sidx) => {
      if (idx !== sidx) return method;
      return e.target.value;
    });
    setMethods(newMethods);
  };

  // Define the event handlers for adding and removing methods
  const handleAddMethod = () => {
    const nextID = methods.length + 1;
    setMethods(methods.concat(`method${nextID}`));
  };

  const handleRemoveMethod = (idx) => {
    setMethods(methods.filter((s, sidx) => idx !== sidx));
  };

  return (
    <div className='text-updater-node' style={{background: backColor}}>
      <div>
        {typeof onDelete === 'function' && (
          <button className="delete-button" onClick={() => onDelete(props.id)}>
            X
          </button>
        )}
        <InfoPopover 
          title = {title}
          description = {description}
          backColor={backColor} />
      </div>
      <div>
        <div style={{ backgroundColor: backColor, padding: '10px'}}>
          <input
            type="text"
            placeholder={className ? className : "Class Name"}
            value={className}
            onChange={(e) => {
              setClassName(e.target.value);
              handleClassNameChange(props.id, e);
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
                onChange={handleMethodNameChange.bind(null, idx)}
                style={{ backgroundColor: backColorMethod, width: methodWidth }}
              />
              <button type="button" 
                style = {{ backgroundColor: backColorMethod }} 
                onClick={handleRemoveMethod.bind(null, idx)}> 
                - 
              </button>
            </div>
          ))}
          <button type="button" style = {{ backgroundColor: backColor }} onClick={handleAddMethod}> 
            + Add method 
          </button>
        </div>
          {handles[0] === 1 && <Handle type="target" position={Position.Top} id='u'/>}
          {handles[1] === 1 && <Handle type="source" position={Position.Bottom} id="b" />}
          {handles[2] === 1 && <Handle type="source" position={Position.Right} id="r" />}
          {handles[3] === 1 && <Handle type="target" position={Position.Left} id='l'/>}
        </div>
    </div>
  );
  
});

export default ClassNode;
