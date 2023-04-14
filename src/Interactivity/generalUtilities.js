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


export const handleAddMethod = (id, nodes, setNodes) => {
    setNodes(nodes => nodes.map(node => {
      if (node.id === id) {
        const nextID = node.data.methods.length + 1;
        const newMethods = [...node.data.methods, `method${nextID}`];
        
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


export const handleMethodNameChange = (id, index, event, nodes, setNodes) => {
    setNodes(nodes => nodes.map(node => {
        if (node.id === id) {
            const newMethods = [...node.data.methods];
            newMethods[index] = event.target.value;
            
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
  
  export const handleAttributeNameChange = (id, index, event, nodes, setNodes) => {
      setNodes(nodes => nodes.map(node => {
        if (node.id === id) {
          const newAtrributes = [...node.data.attributes];
          newAtrributes[index] = event.target.value;
          
          return {
            ...node,
            data: {
              ...node.data,
              attributes: newAtrributes
            }
          };
        }
        return node;
      }));
    };
  