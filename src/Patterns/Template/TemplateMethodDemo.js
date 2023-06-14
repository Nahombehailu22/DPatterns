import React from 'react';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const TemplateMethodDemo = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="center">
      <motion.div initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="box">
        <Typography variant="h5">Welcome to the Template Method Design Pattern</Typography>
        <Typography variant="subtitle1">Here's what you need to know:</Typography>
        <ul>
          <li>The template method pattern defines the skeleton of an algorithm, allowing subclasses to redefine certain steps without changing the structure.</li>
          <li>It's used to implement common behavior among classes while enabling variation in specific steps.</li>
          <li>It often complements the Strategy pattern, allowing subclasses to specify algorithm steps.</li>
          <li>The template method pattern promotes code reusability and maintainability.</li>
        </ul>
        <Typography variant="subtitle1">Here's how it works:</Typography>
        <ol>
          <li>Define an abstract class with a template method that serves as the algorithm's skeleton.</li>
          <li>Create concrete classes that extend the abstract class and implement the abstract steps of the algorithm.</li>
          <li>Instantiate a concrete class and call the template method, which executes the algorithm by invoking the implemented steps.</li>
          <li>The client code can override specific steps in the concrete class to customize the algorithm's behavior.</li>
        </ol>
        <Link to="/templatemethod" style={{ textDecoration: 'none' }}>
          <Button variant="outlined" size="large" style={{ color: 'black', borderColor: 'black' }}>Next</Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default TemplateMethodDemo;
