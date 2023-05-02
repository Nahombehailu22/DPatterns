import React, { useCallback, useRef, useState, useEffect } from 'react';

export const handleClassNameChange = (id, event, nodes, setNodes) => {
    setNodes(nodes => nodes.map(node => {
      if (node.id === id) {
        return {
          ...node,
          data: {
            ...node.data,
            class_name: event.target.value
          }
        };
      }
      return node;
    }));
  };


// export const handleAddMethod = (id, nodes, setNodes, methodName, next) => {
//     setNodes(nodes => nodes.map(node => {
//       const nameMethod = methodName? methodName: "method";
//       if (node.id === id) {
//         const nextID = next? next :node.data.methods.length + 1;
//         const newMethods = [...node.data.methods, `${nameMethod}${nextID}`];
        
//         return {
//           ...node,
//           data: {
//             ...node.data,
//             methods: newMethods
//           }
//         };
//       }
//       return node;
//     }));
//   };

  export const handleAddMethod = (id, nodes, setNodes, methodName, next) => {
    setNodes(nodes => nodes.map(node => {
      const nameMethod = methodName? methodName: "method";
      if (node.id === id) {
        const nextID = next? next :node.data.methods.length + 1;
        const newMethods = [
          ...node.data.methods, 
          {
            id: `${nextID}`,
            name: `${nameMethod}${nextID}`,
          }
        ];
        
        return {
          ...node,
          data: {
            ...node.data,
            methods: newMethods
          }
        };
      }
      return node;
    }));
  };
  
export const handleDeleteMethod = (id, index, nodes, setNodes) => {
    setNodes(nodes => nodes.map(node => {
      if (node.id === id) {
        const newMethods = [...node.data.methods];
        newMethods.splice(index, 1);
  
        return {
          ...node,
          data: {
            ...node.data,
            methods: newMethods
          }
        };
      }
      return node;
    }));
  };


  export const handleParameterChange = (id, idMethod, idParam, event, nodes, setNodes) => {
    setNodes(prevNodes => prevNodes.map(node => {
      if (node.id === id) {
        const newMethods = node.data.methods.map(method => {
          if (method.id === idMethod) {
            const parameters = method.parameters || [];
            const newParameters = [...parameters];
            newParameters[idParam] = event.target.value;
    
            return {
              ...method,
              parameters: newParameters,         
            };
          }
          return method;
        });
    
        return {
          ...node,
          data: {
            ...node.data,
            methods: newMethods,
          },
        };
      }
      return node;
    }));
  };
  
  

export const handleMethodNameChange = (id, idMethod, event, nodes, setNodes) => {
  setNodes(nodes => nodes.map(node => {
    if (node.id === id) {
      const newMethods = node.data.methods.map(method => {
        if (method.id === idMethod) {
          return {
            ...method,
            name: event.target.value,
          };
        }
        return method;
      });
      
      return {
        ...node,
        data: {
          ...node.data,
          methods: newMethods,
        },
      };
    }
    return node;
  }));
};

export const handleAttributeNameChange = (id, idAttribute, event, nodes, setNodes) => {
  setNodes(nodes => nodes.map(node => {
    if (node.id === id) {
      const newAtrributes = node.data.attributes.map(attribute => {
        if (attribute.id === idAttribute) {
          return {
            ...attribute,
            name: event.target.value,
          };
        }
        return attribute;
      });
      
      return {
        ...node,
        data: {
          ...node.data,
          attributes: newAtrributes,
        },
      };
    }
    return node;
  }));
};

  
  // export const handleAttributeNameChange = (id, index, event, nodes, setNodes) => {
  //     setNodes(nodes => nodes.map(node => {
  //       if (node.id === id) {
  //         const newAtrributes = [...node.data.attributes];
  //         newAtrributes[index] = event.target.value;
          
  //         return {
  //           ...node,
  //           data: {
  //             ...node.data,
  //             attributes: newAtrributes
  //           }
  //         };
  //       }
  //       return node;
  //     }));
  //   };
  

  export const findMissingID = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== i + 1 && nums[i] > 0) {
            const idx = nums[i] - 1;
            if (nums[i] > nums.length || nums[idx] === nums[i]) {
                nums[i] = -1;
            } else {
                [nums[nums[i]-1 ], nums[i]] = [nums[i], nums[nums[i]-1]];
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= 0) {
            return i + 1;
        }
    }

    return nums.length + 1;
}

export const handleNodeDelete = (id, nodes, edges, setNodes, setEdges) => {
  setNodes(nodes => nodes.filter(node => node.id !== id));
  setEdges((edges) => edges.filter((edge) => edge.source !== id && edge.target !== id));

};