import React from 'react';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const StrategyMethodDemo = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="center">
      <motion.div initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="box">
        <Typography variant="h5">Welcome to the Strategy Method Design Pattern</Typography>
        <Typography variant="subtitle1">Here's what you need to know:</Typography>
        <ul>
          <li>The Strategy pattern suggests extracting different algorithms into separate classes called strategies.</li>
          <li>The context delegates the work to a linked strategy object instead of executing it on its own.</li>
          <li>The context works with strategies through a generic interface, allowing easy swapping of strategies.</li>
          <li>This makes the context independent of concrete strategies, facilitating new algorithm additions or modifications.</li>
        </ul>
        <Typography variant="subtitle1">Here's how it works:</Typography>
        <ol>
          <li>Create a Subject class that maintains a list of observers and provides methods for managing them.</li>
          <li>Create an Observer interface defining the method(s) that the subject calls when notifying observers.</li>
          <li>Create concrete Observer classes that implement the Observer interface and update their state in response to notifications.</li>
          <li>Register observers with the subject, trigger notifications, and update the state as needed.</li>
        </ol>
        <Link to="/strategymethod" style={{ textDecoration: 'none' }}>
          <Button variant="outlined" size="large" style={{ color: 'black', borderColor: 'black' }}>Next</Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default StrategyMethodDemo;
