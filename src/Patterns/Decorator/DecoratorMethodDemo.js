import React from 'react';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const DecoratorMethodDemo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="center"
    >
      <motion.div
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="box"
      >
        <Typography variant="h5" >
          Welcome to the Decorator Method Design Pattern
        </Typography>
        <Typography variant="subtitle1" >
          Here's what you need to know:
        </Typography>
        <ul>
          <li>The Decorator Method pattern allows you to add new functionality to an object at runtime.</li>
          <li>It uses a decorator method to decorate the object with the new functionality.</li>
          <li>The decorator method should return an object that has the same interface as the original object.</li>
          <li>The Decorator Method pattern allows you to add new functionality to an object without modifying the object's original code.</li>
        </ul>
        <Typography variant="subtitle1" >
          Here's how it works:
        </Typography>
        <ol>
          <li>Create an abstract Object interface that defines the operations that all objects must implement.</li>
          <li>Create a decorator method that decorates an object with the new functionality. The decorator method should return an object that implements the Object interface.</li>
          <li>Create one or more concrete subclasses of the Object interface that implement the decorator method to add new functionality to specific types of objects.</li>
          <li>Use the decorator method to add new functionality to objects, without having to know their specific class or implementation details.</li>
        </ol>
        <Link to="/decoratormethod">
          <Button variant="outlined" size="large" style ={{color:"black", borderColor:"black"}}> Next </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default DecoratorMethodDemo;
