import { useState } from "react";
import "./code.css"
import { useEffect } from "react";

const ConvertToPython = ({ nodes, setNodes, clientCode }) => {
    const nodeMap = new Map();
    nodes.map(node => {
      if (node.data.class_name){
      nodeMap.set(node.id, node.data.class_name)
      }
    })

    let pythonCode = 'from abc import ABC, abstractmethod\n\n';

    for (let node of nodes) {
      const { type } = node;
      const { class_name, attribute, methods, title, relation} = node.data;
      if (class_name && type != "client"){
        pythonCode += `# ${title} \n`
        pythonCode += `class ${class_name}`
        pythonCode += `${type === "abstract"? "(ABC):": type === "interface"? "(ABC):": ""}`
        pythonCode += `${relation[0] ? "(" + nodeMap.get(relation[1])+"):" : ""}`;
        pythonCode += `\n`;

        if (methods){
        for (let method of methods) {
          const { name, parameters, abstract, interfaceMethod, overRide, returnType, print, returnM, methodBody} = method;
          if(abstract) {
            pythonCode += "\n\t@abstractmethod\n";
          }
          pythonCode += `\tdef ${name}(self`;
          if (parameters && parameters.length) {
            pythonCode += `String ${parameters.join(', String ')}`;
          }
          pythonCode += `):`;
          
          if(methodBody){
            for(let i = 0; i < methodBody.length; i++){
                pythonCode += `\n\t\t${methodBody[i]};`;
            }
          
          }
          pythonCode += `${print? ` \n\t\tprint("${print}")`: ""}`;
          
          pythonCode += `${returnM ? `\n\t\treturn ${returnM}()`: 
          (abstract || interfaceMethod) ? "\n\t\tpass": "\n\t\treturn"}`;   
        }
      //   if (attributes.length) {
      //     javaCode += `\n\t// Attributes\n`;
      //     for (let attribute of attributes) {
      //       javaCode += `\tpublic String ${attribute};\n`;
      //     }
      //   }
      pythonCode += "\n\n"
      }
      }
    }

    pythonCode += clientCode(nodes, setNodes)
    

    

    const [copySuccess, setCopySuccess] = useState(false);

    const copyCodeToClipboard = () => {
      navigator.clipboard.writeText(pythonCode);
      setCopySuccess(true);
    };
  
    return (
      <div className="container" style={{width:"45%"}}>
        <button className="copy-button" onClick={copyCodeToClipboard}>
          {copySuccess ? "Copied!" : "Copy Code"}
        </button>
        <pre className="code-block">{pythonCode}</pre>
      </div>
    );
    
  };
  
  export default ConvertToPython;
  