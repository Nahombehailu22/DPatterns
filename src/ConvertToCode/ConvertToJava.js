import { useState } from "react";
import "./code.css"
import { useEffect } from "react";

const ConvertToJava = ({ nodes, clientCode }) => {
    const nodeMap = new Map();
    nodes.map(node => {
      if (node.data.class_name){
      nodeMap.set(node.id, node.data.class_name)
      }
    })

    let javaCode = '';
    for (let node of nodes) {
      const { type } = node;
      const { class_name, attribute, methods, title, relation} = node.data;
      if (class_name && type != "client"){
        javaCode += `// ${title} \n`
        javaCode += `public ${type === "abstract"? "abstract class ": type === "interface"? "interface ": type === "class"? "class ": ""}`
        javaCode += `${class_name}`
        javaCode += ` ${relation[0] ? relation[0] + " " + nodeMap.get(relation[1]) : ""}{\n`;

        if (methods){
        for (let method of methods) {
          const { name, parameters, abstract, interfaceMethod, overRide, returnType, print, returnM} = method;
          if(overRide) {
            javaCode += "\t@Override\n";
          }
          javaCode += `\tpublic ${abstract? "abstract ": ""}${returnType? nodeMap.get(returnType) + " ": "void "}${name}(`;
          if (parameters && parameters.length) {
            javaCode += `String ${parameters.join(', String ')}`;
          }
          javaCode += `)${abstract || interfaceMethod? ";\n" : " {"}`;
          javaCode += `${print? ` \n\t\tSystem.out.println("${print}");`: ""}`;
          javaCode += `${returnM? `\n\t\treturn ${returnM};`: ""}`;
          javaCode += `${abstract || interfaceMethod? "" : "\n\t}\n"}`;         
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
    }

    javaCode += clientCode(nodes)
    

    

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
  