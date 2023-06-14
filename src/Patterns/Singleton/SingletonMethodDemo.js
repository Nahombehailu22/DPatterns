import React from 'react';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const SingletonMethodDemo = () => {
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
          Welcome to the Singleton Method Design Pattern
        </Typography>
        <Typography variant="subtitle1" >
          Here's what you need to know:
        </Typography>
        <ul>
          <li>The Singleton Method pattern involves creating a single instance of a class that can be used throughout the system.</li>
          <li>It ensures that only one instance of the class is created and provides a global point of access to it.</li>
          <li>The Singleton Method pattern allows you to control object creation and ensure that only one instance of the class exists.</li>
          <li>The Singleton Method pattern is especially useful for objects that are expensive to create or need to be accessed from different parts of the system.</li>
        </ul>
        <Typography variant="subtitle1" >
          Here's how it works:
        </Typography>
        <ol>
          <li>Create a Singleton class with a private constructor that ensures no other instance of the class can be created.</li>
          <li>Create a public static method that returns the single instance of the class.</li>
          <li>Use the static method to access the single instance of the class throughout your system.</li>
        </ol>
        <Link to="/singletonmethod">
          <Button variant="outlined" size="large" style ={{color:"black", borderColor:"black"}}> Next </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default SingletonMethodDemo;