# System Design Teaching Platform (DPatterns)

System Design Teaching Platform is a web-based platform designed to help users learn about various design patterns used in software engineering. This platform contains interactive diagrams and explanations for different design patterns that can be used to develop and maintain software systems.

## Getting Started

To get started with DPatterns, simply clone the repository to your local machine:

```bash
git clone https://github.com/Nahombehailu22/DPatterns.git
```

Then, navigate to the project directory and install the necessary dependencies:
```bash
cd DPatterns
npm install
```

Once the dependencies are installed, you can start the development server by running:

```bash
npm start
```
Open your web browser and navigate to http://localhost:3000

Run the following command on a separate terminal 

```bash
npx json-server --watch data/db.json --port 8000
```

This will run the JSON server on port 8000, which will allow the application to fetch pattern data from the database.

## Project Structure

The project structure is organized as follows:

```bash
DPatterns/
├── .src
│   ├── AddNode.js
│   ├── App.css
│   ├── App.js
│   ├── ButtonEdge.js
│   ├── ClassNode.js
│   ├── FactoryMethod.js
│   ├── FactoryMethodValues.js
│   ├── index.css
│   ├── index.js
│   ├── Popover.css
│   └── Popover.js
├── .gitignore
├── package.json
├── README.md

```

## Features
* Real-time manipulation of nodes and edges
* Interactive playground for experimenting with different design patterns
* Easy-to-use interface for creating and editing nodes and edges
* Support for a variety of design patterns, including Factory Method, Adapter, and Strategy
