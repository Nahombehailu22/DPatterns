import React, {useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import InfoPopover from '../Popover.js';
import { motion } from 'framer-motion';
import { AddClassButton, DeleteButton, DisplayClass, DisplayMethods, SetHandles } from './NodeComponents.js';

const container = {
  hidden: {opacity: 0, scale: 0.5},
  show: {
    opacity: 1,
    scale: 1,
    transition:{
      duration: 1.5,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001
      }
    }
  },
  whileHover: {
    scale: 1.2,
    transition: { duration: 1 },
  }
  
}

const InterfaceNode = ({
  id,
  data: {
    class_name,
    methods,
    handles,
    title,
    description,
    deletable,
    pop,
    connectable,
    handleChanges,
  },
  color1,
  color2
}) => {
  const backColor = color1 ? color1 : '#C75353';  // Lighter Red
  const backColorMethod = color2 ? color2 : '#D88F8F';  // Lighter Pink
  

  // const backColor = color1? color1: '#BF4D4D';
  // const backColorMethod = color2? color2: '#CD7F7F';

  const statusMap = new Map([["protected", "#"],["private", "-"]])
  const classProps = {id, class_name, backColor, handleChanges}
  const methodsProps = {id, methods, backColor, backColorMethod, handleChanges, statusMap}

  const deleteProps = {id, deletable, handleChanges}
  const addClassProps = {id, connectable, backColorMethod, handleChanges}

  return (
    <div className='text-updater-node' >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        whileHover="whileHover"
        style={{background: backColor, color:"white"}}
      >
        <DeleteButton {...deleteProps}/>
        <InfoPopover title={title} description={description} backColor={backColor} hide={pop} />

        <DisplayClass {...classProps}/>
        <DisplayMethods {...methodsProps}/>

        <AddClassButton {...addClassProps}/>
      </motion.div>
      <SetHandles handles = {handles}/>        
    
    </div>
  );
  
}

export default InterfaceNode;
