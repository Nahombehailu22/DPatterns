import React from 'react';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const StateMethodDemo = () => {
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
          Welcome to the State Method Design Pattern
        </Typography>
        <Typography variant="subtitle1" color="white">
          Here's what you need to know:
        </Typography>
        <Typography>
        <ul>
            <li>The state pattern is a behavioral design pattern that allows an object to alter its behavior when its internal state changes.</li>
            <li>The state pattern is similar to the concept of finite-state machines.</li>
            <li>The state pattern is used in computer programming to encapsulate varying behavior for the same object, based on its internal state.</li>
            <li>The state pattern is set to solve two main problems:
                <ul>An object should change its behavior when its internal state changes.</ul>
                <ul>State-specific behavior should be defined independently. That is, adding new states should not affect the behavior of existing states.</ul></li>
        </ul>
        </Typography>
        <Typography variant="subtitle1" color="white">
          Here's how it works:
        </Typography>
        <Typography>
        <ol>
          <li>Define a state interface. The state interface defines the behavior of each state. This behavior can include methods that are called when the state is entered, exited, or when a specific event occurs.</li>
          <li>Create a concrete state class for each state. Each concrete state class implements the state interface and provides the specific behavior for that state.</li>
          <li>Create a context object. The context object is responsible for managing the state of the object. It keeps track of the current state and provides methods for changing the state.</li>
          <li>When the state of the object changes, the context object changes the state of the object to the appropriate concrete state class. The concrete state class then provides the behavior for the new state.</li>
        </ol>
        </Typography>
        <Link to="/statemethod" style={{ textDecoration: 'none' }}>
          <motion.button
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
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default StateMethodDemo;
