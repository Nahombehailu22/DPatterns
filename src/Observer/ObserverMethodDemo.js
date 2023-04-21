import React from 'react';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import '../Patterns_CSS/demo.css';

const ObserverMethodDemo = () => {
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
          Welcome to the Observer Method Design Pattern
        </Typography>
        <Typography variant="subtitle1" color="white">
          Here's what you need to know:
        </Typography>
        <Typography>
        <ul>
            <li>The Observer Method pattern involves creating an object (the subject) that maintains a list of its dependents (the observers) and notifies them automatically of any state changes, usually by calling one of their methods.</li>
            <li>Each observer is registered with the subject and gets notified every time there is a change in the subject's state.</li>
            <li>The Observer Method pattern decouples the subject from its observers, allowing for greater flexibility and reuse of code.</li>
            <li>The Observer Method pattern is especially useful when you want to decouple an abstraction from its implementation so that they can vary independently.</li>
        </ul>
        </Typography>
        <Typography variant="subtitle1" color="white">
          Here's how it works:
        </Typography>
        <Typography>
        <ol>
          <li>Create a Subject class that maintains a list of its dependents (observers) and provides methods for adding and removing observers.</li>
          <li>Create an Observer interface that defines the method(s) that the subject calls when notifying the observer of state changes.</li>
          <li>Create one or more concrete Observer classes that implement the Observer interface and provide methods for updating their state in response to notifications.</li>
          <li>In your application, create an instance of the Subject class and the concrete Observer classes, register the observers with the subject, and call the appropriate methods to trigger notifications and updates.</li>
        </ol>
        </Typography>
        <Link to="/observermethod" style={{ textDecoration: 'none' }}>
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

export default ObserverMethodDemo;
