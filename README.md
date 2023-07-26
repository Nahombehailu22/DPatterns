# DPatterns - Interactive UML-Guided Design Patterns Learning & Code Conversion

System Design Teaching Platform is a web-based platform designed to help users learn about various design patterns used in software engineering. This platform contains interactive diagrams and explanations for different design patterns that can be used to develop and maintain software systems.

## Getting Started(Guide to Running the Website)

The instructions below provide a guide to running the DPatterns website on your local machine. Follow these steps to set up the website:

**1. Clone the Repository**: Open your terminal and execute the following command to clone the DPatterns repository from GitHub to your local machine:

```bash
git clone https://github.com/Nahombehailu22/DPatterns.git
```

**2. Navigate to Project Directory**: Change the current directory in the terminal to the DPatterns directory that was created when you cloned the repository. Use the following command:

```bash
cd DPatterns
```

**3. Install Dependencies**: Install the necessary dependencies for the DPatterns website to run on your local machine using the following command:

```bash
npm install
```

**4. Start the Development Server**: Launch the development server for the DPatterns website with the following command:

```bash
npm start
```

**5. Access the Website**: Open your web browser and navigate to http://localhost:3000 to view and interact with the DPatterns website.

**6. Run the JSON server**: Run the JSON server on port 8000, which will allow the application to fetch pattern data from the database. Run the following command on a separate terminal:

```bash
npx json-server --watch data/db.json --port 8000
```



# User Manual
This user manual provides a comprehensive guide on effectively utilizing the features and options available on the DPatterns website. Please carefully review the instructions below to maximize your learning experience.

## 1. Homepage
Upon accessing the website, you will find two primary options:

Get Pattern Recommendation: Select this option to be redirected to an interactive assistant that will ask questions about your project specifications. Based on your responses, the assistant will provide recommendations for suitable design patterns.

Explore Categories: Choose this option to explore different categories of design patterns, including Creational, Behavioral, and Structural.

## 2. Get Pattern Recommendation
Selecting the "Get Pattern Recommendation" option will initiate an interactive assistant that guides you through a series of questions related to your project requirements. Based on your responses, the assistant will suggest an appropriate design pattern that aligns with your needs. The assistant will also provide a link to access detailed information about the suggested pattern.

## 3. Pattern Explanation
Clicking on the provided link from the "Get Pattern Recommendation" section will redirect you to a concise explanation of what the selected pattern is and how it works. You will be provided with a clear understanding of the pattern's purpose and practical implications.

## 4. Pattern Demo
The pattern demonstration section illustrates the components of the Unified Modeling Language (UML) diagram associated with the selected pattern. Step-by-step guidance, supported by informative visuals, will help you understand the pattern's structure and flow.

The demonstration showcases the implementation and inheritance functionalities of object-oriented programming, as reflected in the UML diagram. You will observe how classes and their relationships are represented, how inheritance is used to define common behaviors, and how the pattern can be applied to specific scenarios.

Upon completion of the demonstration, you can click the "Example" button to explore a practical implementation of the pattern.

## 5. Modifying UML Diagram
Within the example view, you have the option to modify the UML diagram according to your specific requirements. The UML diagram displayed here is specific and characteristic of the design pattern you have selected.

You can add classes, rename them, add or delete methods, and rename existing methods as needed. Any changes made to the UML diagram will be automatically reflected and tailored to the selected design pattern.

When working with interfaces, adding a method to the interface will automatically update the classes that implement it. Similarly, modifying an inherited method in the superclass will propagate the changes to the subclasses, ensuring that the UML diagram accurately represents the relationships and interactions unique to the chosen pattern.

Experimenting with the UML diagram allows you to visualize and fine-tune the design pattern to suit your specific application or project requirements. It empowers you to explore different variations and understand how changes impact the overall structure of the pattern.

## 6. Converting to Code
Once you have reviewed the example and made any desired modifications to the UML diagram, you can convert the diagram into code.

Click on the "Code" button and select either Python or Java as the desired programming language. The UML diagram will be transformed into code, providing you with a blueprint to follow. Please note that the code will primarily consist of print statements, and it is your responsibility to implement the actual functionality of the methods.

You can copy the generated code and execute it within your preferred Integrated Development Environment (IDE) or Visual Studio. The code will compile successfully, allowing you to observe the intended behavior of the pattern.

## 7. Explore Categories
If you choose to explore categories from the homepage, you will gain access to distinct categories of design patterns, such as Creational, Behavioral, and Structural. Select the category of interest, and you will be able to choose a specific pattern within that category.

## 8. Pattern Explanation (Category)
After selecting a pattern from your chosen category, you will be directed to a dedicated pattern explanation page, similar to the one described in Step 3. Here, you can explore detailed information and specifics regarding the selected pattern.

# Congratulations!
You now possess a comprehensive understanding of how to navigate and leverage the features offered by our System Design Patterns Teaching Website. We trust that this user manual will enable you to embark on a seamless and enriching learning journey.

Thank you for choosing DPatterns! Happy learning! 🚀








