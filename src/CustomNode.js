import React, { memo } from 'react';
import { Handle } from 'reactflow';

export default memo(({ data }) => {
  return (
    <>
      {data.label}
      <Handle type="source" position="right" id="r" />
      <Handle type="source" position="bottom" id="b" />
    </>
  );
});
