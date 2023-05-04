import { useState } from "react";
import "./code.css"

const ConvertToJava = ({ nodes }) => {
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
      if (class_name){
        javaCode += `// ${title} \n`
        javaCode += `public ${type === "abstract"? "abstract ": type === "interface"? "interface ":  ""}`
        javaCode += `class ${class_name}`
        javaCode += ` ${relation[0] ? relation[0] + " " + nodeMap.get(relation[1]) : ""}{\n`;

        for (let method of methods) {
          const { name, parameters, abstract, interfaceMethod, overRide, returnType} = method;
          if(overRide) {
            javaCode += "\t@Override\n";
          }
          console.log(name, returnType)
          javaCode += `\tpublic ${abstract? "abstract ": ""}${returnType? nodeMap.get(returnType) + " ": "void "}${name}(`;
          if (parameters && parameters.length) {
            javaCode += `String ${parameters.join(', String ')}`;
          }
          javaCode += `)${abstract || interfaceMethod? ";\n\n" :" {\n\t\t// Method body\n\t}\n\n"}`;
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
  