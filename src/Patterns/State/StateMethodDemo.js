import React from 'react';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const StateMethodDemo = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="center">
      <motion.div initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="box">
        <Typography variant="h5">Welcome to the State Method Design Pattern</Typography>
        <Typography variant="subtitle1">Here's what you need to know:</Typography>
        <ul>
          <li>The state pattern allows an object to alter its behavior when its internal state changes.</li>
          <li>It's similar to the concept of finite-state machines.</li>
          <li>The state pattern encapsulates varying behavior for the same object based on its internal state.</li>
          <li>It solves two main problems: behavior change with internal state change and independent definition of state-specific behavior.</li>
        </ul>
        <Typography variant="subtitle1">Here's how it works:</Typography>
        <ol>
          <li>Define a state interface that defines the behavior for each state.</li>
          <li>Create concrete state classes for each state that implement the state interface.</li>
          <li>Create a context object responsible for managing the object's state and providing methods for state changes.</li>
          <li>When the state changes, the context object switches to the appropriate concrete state class.</li>
        </ol>
        <Link to="/statemethod" style={{ textDecoration: 'none' }}>
          <Button variant="outlined" size="large" style={{ color: 'black', borderColor: 'black' }}>Next</Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default StateMethodDemo;
