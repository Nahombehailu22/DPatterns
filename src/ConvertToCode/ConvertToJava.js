import { useState } from "react";
import "./code.css"

const ConvertToJava = ({ nodes }) => {
    let javaCode = '';
    for (let node of nodes) {
      const { class_name, attributes, methods } = node.data;
      if (class_name){;
      javaCode += `public class ${class_name} {\n`;
      for (let method of methods) {
        const { name, parameters } = method;
        javaCode += `\tpublic void ${name}(`;
        if (parameters && parameters.length) {
          javaCode += `String ${parameters.join(', String ')}`;
        }
        javaCode += `) {\n\t\t// Method body\n\t}\n`;
      }
    //   if (attributes.length) {
    //     javaCode += `\n\t// Attributes\n`;
    //     for (let attribute of attributes) {
    //       javaCode += `\tpublic String ${attribute};\n`;
    //     }
    //   }
      javaCode += `}\n\n`;
    }
    }
    const [copySuccess, setCopySuccess] = useState(false);

    const copyCodeToClipboard = () => {
      navigator.clipboard.writeText(javaCode);
      setCopySuccess(true);
    };
  
    return (
      <div className="container" style={{width:"40%"}}>
        <button className="copy-button" onClick={copyCodeToClipboard}>
          {copySuccess ? "Copied!" : "Copy Code"}
        </button>
        <pre className="code-block">{javaCode}</pre>
      </div>
    );
    
  };
  
  export default ConvertToJava;
  