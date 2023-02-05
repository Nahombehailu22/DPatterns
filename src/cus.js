import React from 'react';

const RectangleNode = () => {
  return (
    <div style={{ width: 100, height: 50 }}>
      <div style={{ backgroundColor: 'cyan', width: '100%', height: '50%' }} />
      <div style={{ backgroundColor: 'red', width: '100%', height: '50%' }} />
    </div>
  );
};

export default RectangleNode;