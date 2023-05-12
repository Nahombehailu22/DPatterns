import { Handle, Position } from 'reactflow';

export const SetHandles = ({handles}) => {
    return ( 
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
     );
  }

export const DeleteButton = ({id, deletable, handleChanges}) => {
    return ( 
      <div>
        {deletable && (
          <button className="delete-button" onClick={() => handleChanges("deleteNode", id)}>
            X
          </button>
        )}
      </div>
     );
  }
  
export const AddClassButton = ({id, connectable, backColor, handleChanges}) => {
    return ( 
      <div>
        {connectable && 
          <button type="button" style = {{ backgroundColor: backColor, position: 'relative', left: '40px' }} onClick={() => handleChanges("addClass",id)} > 
            Add Class
          </button>
        }
      </div>
     );
  }
  
  
export const DisplayClass = ({id, class_name, backColor, handleChanges}) => {
    return ( 
      <div style={{ backgroundColor: backColor, padding: '10px'}}>
        <input
          placeholder={class_name ? class_name : "Class Name"}
          value={class_name}
          onChange={(e) => { handleChanges("className", id, e); }}
          style={{ backgroundColor: backColor, width: class_name? class_name.length *6 + 20: 70 }}
        />
      </div>
     );
  }
  
export const DisplayAttributes = ({id, attributes, backColor, backColorMethod, handleChanges, statusMap}) => {
    return ( 
      <div style={{ backgroundColor: backColorMethod, borderBottom: `2px solid ${backColor}` }}> 
        {!attributes ? <label style ={{ fontSize: "20px"}}>...</label> :
          attributes.map((attribute, idx) => (
            <div key={idx} style={{ margin: 0 }}>
              <label>{attribute.status ? statusMap.get(attribute.status) : "+"}</label>
              <input
                placeholder="instance"
                value={attribute.name}
                onChange={(e) => handleChanges("attributeName", id, e, attribute.id)}
                style={{ backgroundColor: backColorMethod, width: attribute.name.length*6 + 20 }}
              />
            </div>
          ))
        }
      </div>
     );
  }
  
export const DisplayMethods = ({id, methods, backColor, backColorMethod, handleChanges, statusMap}) => {
    return ( 
      <div style={{ backgroundColor: backColorMethod, borderRadius: '0 0 10px 10px', paddingRight:'5px' }}> 
        {methods && methods.map((method, idx) => (
          <div key={idx} style={{ margin: 0 }}>
            <label>{method.status ? statusMap.get(method.status) : "+"}</label>
            <input
              placeholder="method"
              value={method.name}
              onChange={(e) => handleChanges("changeMethodName", id, e, method.id)}
              style={{backgroundColor: backColorMethod, width: method.name? method.name.length*5 + 35: 70 }}
            /><span>(
              {method.parameters && method.parameters.map((param, pId) => (
              <div style={{ display: "inline-block" }}>
                <input
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
      </div>
     );
  }
   