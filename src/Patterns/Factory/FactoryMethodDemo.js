import React from 'react';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const FactoryMethodDemo = () => {
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
        <Typography variant="h5" color="white">
          Welcome to the Factory Method Design Pattern
        </Typography>
        <Typography variant="subtitle1" color="white">
          Here's what you need to know:
        </Typography>
        <ul>
          <li>The Factory Method pattern separates the creation of objects from their implementation.</li>
          <li>It uses a Creator class to define the factory method and a Product interface to specify the product objects.</li>
          <li>Subclasses of the Creator class can implement the factory method to create different types of product objects.</li>
          <li>The Factory Method pattern allows you to add new product types to your system without modifying existing code.</li>
        </ul>
        <Typography variant="subtitle1" color="white">
          Here's how it works:
        </Typography>
        <ol>
          <li>Create an abstract Product interface that defines the operations that all product objects must implement.</li>
          <li>Create a Creator class that declares the factory method for creating product objects. The factory method should return an object that implements the Product interface.</li>
          <li>Create one or more concrete subclasses of the Creator class that implement the factory method to create specific types of product objects.</li>
          <li>Use the factory method to create product objects, without having to know their specific class or implementation details.</li>
        </ol>
        <Link to="/factorymethod">
          <button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              bottom: '20px',
              right: '20px',
              padding: '10px 20px',
              background: '#4a4a4a',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
            }}
          >
            Next
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default FactoryMethodDemo;
