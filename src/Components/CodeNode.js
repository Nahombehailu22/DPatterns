import React from 'react';
import { Handle, Position } from 'reactflow';

const CodeNode = ({ id, data: { codeWritten, handles, connectedId }, color1: backColor }) => {

  return (
    <div>
      <div
        style={{
          backgroundColor: backColor,
          padding: '5px',
          fontSize: '10px',
          paddingRight: '20px',
          position: 'relative',
          borderTopRightRadius: '20px',
          overflow: 'hidden',
          border: '1px solid black',
        }}
      >
        {codeWritten && codeWritten(connectedId)}
      </div>

      <div>
        {handles[0] === 1 && <Handle type="source" position={Position.Top} id="u" />}
        {handles[1] === 1 && <Handle type="source" position={Position.Bottom} id="d" />}
        {handles[2] === 1 && <Handle type="source" position={Position.Right} id="r" />}
        {handles[3] === 1 && <Handle type="source" position={Position.Left} id="l" />}

        {handles[4] === 1 && <Handle type="target" position={Position.Top} id="n" />}
        {handles[5] === 1 && <Handle type="target" position={Position.Bottom} id="s" />}
        {handles[6] === 1 && <Handle type="target" position={Position.Right} id="e" />}
        {handles[7] === 1 && <Handle type="target" position={Position.Left} id="w" />}
      </div>
    </div>
  );
};

export default CodeNode;
