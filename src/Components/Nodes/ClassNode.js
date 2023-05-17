import React, {useState, useEffect } from 'react';

import InfoPopover from '../Popover.js';
import { motion } from 'framer-motion';
import { TextField } from '@mui/material';
import { AddClassButton, DeleteButton, DisplayAttributes, DisplayClass, DisplayMethods, SetHandles } from './NodeComponents.js';


const container = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5
    }
  },
  whileHover: {
    scale: 1.2,
    transition: { duration: 1 },
  }
}

const ClassNode = ({
  id,
  data: {
    class_name,
    attributes,
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
  const backColor = color1? color1: '#009688';
  const backColorMethod = color2? color2: '#4DB6AC';
  
  const statusMap = new Map([["protected", "#"],["private", "-"]])
  const classProps = {id, class_name, backColor, handleChanges}
  const attributesProps = {id, attributes, backColor, backColorMethod, handleChanges, statusMap}
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
        <DisplayAttributes {...attributesProps}/>
        <DisplayMethods {...methodsProps}/>

        <AddClassButton {...addClassProps}/>
      </motion.div>
      <SetHandles handles = {handles}/>
    </div>
  );
  
}

export default ClassNode;
