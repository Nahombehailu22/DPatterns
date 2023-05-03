import React from 'react';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const TemplateMethodDemo = () => {
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
          Welcome to the Template Method Design Pattern
        </Typography>
        <Typography variant="subtitle1" color="white">
          Here's what you need to know:
        </Typography>
        <Typography>
        <ul>
            <li>The template method pattern is a behavioral design pattern that defines the skeleton of an algorithm in an operation, deferring some steps to subclasses. It lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.</li>
            <li>The template method pattern is used to implement the common behavior of a group of classes, while allowing subclasses to vary the implementation of certain steps.</li>
            <li>The template method pattern is often used in conjunction with the Strategy pattern, which allows subclasses to specify the algorithm's steps.</li>
            <li>The template method pattern is a powerful tool that can help you to write more reusable and maintainable code.</li>        
        </ul>
        </Typography>
        <Typography variant="subtitle1" color="white">
          Here's how it works:
        </Typography> 
        <Typography>
        <ol>
          <li>Define an abstract class with a template method. The template method is a skeleton of an algorithm that defines the overall structure of the algorithm, but leaves some steps to be implemented by subclasses.</li>
          <li>Define concrete classes that extend the abstract class and implement the steps of the algorithm that are left abstract.</li>
          <li>The client code creates an instance of a concrete class and calls the template method. The template method then calls the steps of the algorithm, which are implemented by the concrete class.</li>
          <li>The client code can override the steps of the algorithm in the concrete class to customize the behavior of the algorithm.</li>
        </ol>
        </Typography>
        <Link to="/templatemethod" style={{ textDecoration: 'none' }}>
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

export default TemplateMethodDemo;
