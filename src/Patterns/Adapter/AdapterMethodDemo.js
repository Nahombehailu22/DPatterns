import React from 'react';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const AdapterMethodDemo = () => {
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
          Welcome to the Adapter Method Design Pattern.
        </Typography>
        <Typography variant="subtitle1">
          Here's what you need to know:
        </Typography>
        <Typography>
          <ul>
          <li>The Adapter Method pattern allows objects with incompatible interfaces to work together.</li>
          <li>The pattern uses an adapter class as a wrapper to translate requests from one class to another.</li>
          <li>The Adapter Method pattern is useful when an existing class needs to collaborate with other classes with incompatible interfaces.</li>
          <li>It is also useful when it's too costly or impossible to modify the interface of an existing class.</li>
          </ul>
        </Typography>
        <Typography variant="subtitle1">
          Here's how it works:
        </Typography>
        <Typography>
        <ol>
          <li>Create an adapter class that implements the interface required by the client.</li>
          <li>Within the adapter class, translate requests from the existing class to be compatible with the client's interface.</li>
          <li>The existing class sends requests to the adapter class, which in turn forwards them to the client.</li>
        </ol>
        </Typography>
        <Link to="/adaptermethod/demonstration">
          <Button variant="outlined" size="large" style ={{color:"black", borderColor:"black"}}> Next </Button>
        </Link>       
      </motion.div>
    </motion.div>
  );
};

export default AdapterMethodDemo;
