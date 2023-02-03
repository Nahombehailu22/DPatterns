import { useCallback, useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';


const ClassNode = (props) => { 
  const [className, setClassName] = useState('Class'); 
  const [methods, setMethods] = useState(['method1', 'method2']);
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
        return { ...method, name: e.target.value }; 
      }); 
  setMethods(newMethods); 
  }; 

  const handleAddMethod = () => { 
    setMethods(methods.concat([{ name: '' }])); 
  }; 

  const handleRemoveMethod = (idx) => { 
    setMethods(methods.filter((s, sidx) => idx !== sidx)); 
  }; 

  return (
<div className='text-updater-node' style={{background: backColor}}>
  <div  >
    <button style ={{background : backColor, marginLeft: '70px'}} onClick={() => setModalIsOpen(true)}>
      <FontAwesomeIcon icon={faInfoCircle} />
    </button>
    <div id="myModal" class="modal" style={{background: 'red', borderRadius: '20px'}}>
      <div class="modal-content">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <h2>Introduction</h2>
          <p>I'm nothing if not fair. Of course, an introduction. A beginning. Where are my manners? I could introduce myself properly, but...</p>
        </Modal>
      </div>
    </div>
</div>
      <input type="text" 
      placeholder={className ? className : "Class Name"} 
      value={className} 
      onChange={handleClassNameChange} 
      style={{ backgroundColor: backColor}} 
      />
      <div > 
  
      {methods.map((method, idx) => (
        <div key={idx} style={{ margin: 0 }}>
          <input
            type="text"
            placeholder="none"
            value={method.name}
            onChange={handleMethodNameChange.bind(this, idx)}
            style={{ backgroundColor: backColorMethod }}
          />
          <button type="button" onClick={handleRemoveMethod.bind(this, idx)}> 
              - 
            </button>
        </div>
      ))}
        <button type="button" onClick={handleAddMethod}> 
          +Add method 
        </button>
  
      </div>
      {handles[0] === 1 && <Handle type="target" position={Position.Top} id='u'/>}
      {handles[1] === 1 && <Handle type="source" position={Position.Bottom} id="b" />}
      {handles[2] === 1 && <Handle type="source" position={Position.Right} id="r" />}
      {handles[3] === 1 && <Handle type="target" position={Position.Left} id='l'/>}
      
    </div>
  );
}

export default ClassNode;
