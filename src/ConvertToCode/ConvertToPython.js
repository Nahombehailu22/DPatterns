import { useState } from "react";
import "./code.css"
import { useEffect } from "react";
import DisplayCode from "./Display";

const ConvertToPython = (nodes, setNodes, clientCode) => {
    const nodeMap = new Map();
    nodes.map(node => {
      if (node.data.class_name){
      nodeMap.set(node.id, node.data.class_name)
      }
    })

    let pythonCode = 'from abc import ABC, abstractmethod\n\n';

    for (let node of nodes) {
      const { type } = node;
      const { class_name, constructor, attribute, methods, title, relation} = node.data;
      if (class_name && type != "client"){
        pythonCode += `# ${title} \n`
        pythonCode += `class ${class_name}`
        pythonCode += `${type === "abstract"? "(ABC):": type === "interface"? "(ABC):": !relation[0]? ":":""}`
        pythonCode += `${relation[0] ? "(" + nodeMap.get(relation[1])+"):" : ""}`;
        pythonCode += `\n`;

        if(constructor && constructor[1]){
          for(let line of constructor[1]){
            pythonCode += "\t"+ line + "\n"
          }
          pythonCode += "\n"
        }

        if (methods){
        for (let method of methods) {
          const { name, parameters, abstract, interfaceMethod, methodBody} = method;
          if(abstract) {
            pythonCode += "\n\t@abstractmethod\n";
          }
          pythonCode += `\tdef ${name}(self`;
          if (parameters && parameters.length) {
            pythonCode += `String ${parameters.join(', String ')}`;
          }
          pythonCode += `):`;
          
          if(methodBody){
            for(let i = 0; i < methodBody[1].length; i++){
                pythonCode += `\n\t\t${methodBody[1][i]}`;
            } 
          }
          pythonCode += `${ (abstract || interfaceMethod || !methodBody) ? "\n\t\tpass\n": "\n"}`;   
        }

      pythonCode += "\n\n"
      }
      }
    }

    pythonCode += clientCode(nodes, setNodes)
    
    return pythonCode
    
  };
  
  export default ConvertToPython;
  