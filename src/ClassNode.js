import React, {useState, memo } from 'react';
import { Handle, Position } from 'reactflow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('root'));

const ClassNode = React.memo(props => { 

  const [className, setClassName] = useState(props.className); 
  const [methods, setMethods] = useState(props.methods || []);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const handles = props.activeHandles
  const backColor = props.color1
  const backColorMethod = props.color2

  const handleClassNameChange = (e) => { 
      setClassName(e.target.value);
    }; 

  
  const handleMethodNameChange = (idx, e) => {
      const newMethods = methods.map((method, sidx) => {
        if (idx !== sidx) return method;
        return {
          name: e.target.value
        };
      });
      setMethods(newMethods);
    };


  const handleAddMethod = () => { 
    setMethods(methods.concat([{ name: 'method' }])); 
  }; 

  const handleRemoveMethod = (idx) => { 
    setMethods(methods.filter((s, sidx) => idx !== sidx)); 
  }; 


  return (
<div className='text-updater-node' style={{background: backColor}}>
  <div>
    <button style={{background: backColor, marginLeft: '70px'}} onClick={() => setModalIsOpen(true)}>
      <FontAwesomeIcon icon={faInfoCircle} />
    </button>
    <div className="modal" style={{background: 'red', borderRadius: '20px'}}>
      <div className="modal-content">
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          <h2>Introduction</h2>
          <p>I'm nothing if not fair. Of course, an introduction. A beginning. Where are my manners? I could introduce myself properly, but…</p>
        </Modal>
      </div>
    </div>
  </div>
  <div>
    <div style={{ backgroundColor: backColor, padding: '10px'}}>
      <input type="text" 
        placeholder={className ? className : "Class Name"} 
        value={className} 
        onChange={handleClassNameChange} 
        style={{ backgroundColor: backColor}} 
    />
  </div>
  
  <div style={{ backgroundColor: backColorMethod, borderRadius: '0 0 10px 10px' }}> 
  {methods.map((method, idx) => (
      <div key={idx} style={{ margin: 0 }}>
          <input
            type="text"
            placeholder="method"
            value={method.name}
            onChange={handleMethodNameChange.bind(null, idx)}
            style={{ backgroundColor: backColorMethod }}
          />
          <button type="button" style = {{ backgroundColor: backColorMethod }} onClick={handleRemoveMethod.bind(null, idx)}> 
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
