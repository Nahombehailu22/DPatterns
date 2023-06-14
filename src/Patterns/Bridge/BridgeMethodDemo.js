import React from 'react';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const BridgeMethodDemo = () => {
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
          Welcome to the Bridge Method Design Pattern
        </Typography>
        <Typography variant="subtitle1">
            Here's what you need to know:
        </Typography>
        <ul>
          <li>The Bridge Method pattern separates the abstraction of an object from its implementation.</li>
          <li>It uses an Abstraction class to define the interface for the object and a Implementor interface to specify the implementation details.</li>
          <li>Implementations of the Implementor interface can be interchanged without affecting the Abstraction class.</li>
          <li>The Bridge Method pattern allows you to add new implementations to your system without modifying existing code.</li>
        </ul>
        <Typography variant="subtitle1">
          Here's how it works:
        </Typography>
        <ol>
          <li>Create an abstraction interface that defines the methods that the client will use to access the object.</li>
          <li>Create an implementor interface that defines the methods that the abstraction will use to implement the object.</li>
          <li>Create concrete implementations of the implementor interface.</li>
          <li>Create a refined abstraction that extends the abstraction interface.</li>
          <li>Use the refined abstraction to access the object, which will delegate to the appropriate implementation of the implementor interface.</li>
        </ol>
        <Link to="/bridgemethod">
          <Button variant="outlined" size="large" style ={{color:"black", borderColor:"black"}}> Next </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default BridgeMethodDemo;
