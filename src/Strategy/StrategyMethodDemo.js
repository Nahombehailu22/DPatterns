import React from 'react';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import '../Patterns_CSS/demo.css';

const StrategyMethodDemo = () => {
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
          Welcome to the Strategy Method Design Pattern
        </Typography>
        <Typography variant="subtitle1" color="white">
          Here's what you need to know:
        </Typography>
        <Typography>
        <ul>
            <li>The Strategy pattern suggests that you take a class that does something specific in a lot of different ways and extract all of these algorithms into separate classes called strategies.</li>
            <li>The original class, called context, must have a field for storing a reference to one of the strategies. The context delegates the work to a linked strategy object instead of executing it on its own.</li>
            <li>The context isn’t responsible for selecting an appropriate algorithm for the job. Instead, the client passes the desired strategy to the context. In fact, the context doesn’t know much about strategies. It works with all strategies through the same generic interface, which only exposes a single method for triggering the algorithm encapsulated within the selected strategy.</li>
            <li>This way the context becomes independent of concrete strategies, so you can add new algorithms or modify existing ones without changing the code of the context or other strategies.</li>
        </ul>
        </Typography>
        {/* <Typography variant="subtitle1" color="white">
          Here's how it works:
        </Typography> */}
        {/* <Typography>
        <ol>
          <li>Create a Subject class that maintains a list of its dependents (observers) and provides methods for adding and removing observers.</li>
          <li>Create an Observer interface that defines the method(s) that the subject calls when notifying the observer of state changes.</li>
          <li>Create one or more concrete Observer classes that implement the Observer interface and provide methods for updating their state in response to notifications.</li>
          <li>In your application, create an instance of the Subject class and the concrete Observer classes, register the observers with the subject, and call the appropriate methods to trigger notifications and updates.</li>
        </ol>
        </Typography> */}
        <Link to="/strategymethod" style={{ textDecoration: 'none' }}>
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

export default StrategyMethodDemo;
