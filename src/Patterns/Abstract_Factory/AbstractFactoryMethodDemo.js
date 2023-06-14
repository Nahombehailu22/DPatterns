import React from 'react';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const AbstractFactoryMethodDemo = () => {
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
        <Typography variant="h5">
          Welcome to the Abstract Factory Design Pattern
        </Typography>
        <Typography variant="subtitle1">
          Here's what you need to know:
        </Typography>
        <ul>
          <li>
            The Abstract Factory pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.
          </li>
          <li>
            It uses an Abstract Factory class to define a factory method for creating product objects.
          </li>
          <li>
            Subclasses of the Abstract Factory class can implement the factory method to create different families of related or dependent product objects.
          </li>
          <li>
            The Abstract Factory pattern allows you to add new families of related or dependent product objects to your system without modifying existing code.
          </li>
        </ul>
        <Typography variant="subtitle1">
          Here's how it works:
        </Typography>
        <ol>
          <li>Create an abstract Product interface that defines the operations that all product objects must implement.</li>
          <li>Create an abstract Factory interface that declares the factory method for creating families of related or dependent product objects. The factory method should return objects that implement the Product interface.</li>
          <li>Create one or more concrete subclasses of the Factory class that implement the factory method to create specific families of related or dependent product objects.</li>
          <li>Use the factory method to create families of related or dependent product objects, without having to know their specific classes or concrete implementations.</li>
        </ol>
        <Link to="/abstractfactorymethod/demonstration">
        <Button variant="outlined" size="large" style ={{color:"black", borderColor:"black"}}> Next </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default AbstractFactoryMethodDemo;
