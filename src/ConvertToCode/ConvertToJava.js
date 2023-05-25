import { useState } from "react";
import "./code.css"
import { useEffect } from "react";
import sendCodeToGPTModel from "../Assistant/ConvertLanguageAPI";
import DisplayCode from "./Display";

const ConvertToJava = (nodes, setNodes, clientCode) => {
    const nodeMap = new Map();
    nodes.map(node => {
      if (node.data.class_name){
      nodeMap.set(node.id, node.data.class_name)
      }
    })

    let javaCode = '';
    for (let node of nodes) {
      const { type } = node;
      const { class_name, attributes, constructor, methods, title, relation} = node.data;
      if (class_name && type != "client"){
        javaCode += `// ${title} \n`
        javaCode += `${type === "abstract"? "abstract class ": type === "interface"? "interface ": type === "class"? "class ": ""}`
        javaCode += `${class_name}`
        javaCode += ` ${relation[0] ? relation[0] + " " + nodeMap.get(relation[1]) : ""}{\n`;
        

        if (attributes) {
          for (let attribute of attributes) {
            const {name, returnType, status } = attribute
            javaCode += `\t${status? status: "public"} ${returnType? nodeMap.get(returnType): "String"} ${name};\n`;
          }
          if (attributes[0]) javaCode += `\n`;
        }

        if(constructor && constructor[0]){
          for(let line of constructor[0]){
            javaCode += "\t"+ line + "\n"
          }
          javaCode += "\n"
        }

        if (methods){
        for (let method of methods) {
          const { name, parameters, abstract, interfaceMethod, overRide, returnType, methodBody} = method;
          if(overRide) {
            javaCode += "\t@Override\n";
          }
          javaCode += `\tpublic ${abstract? "abstract ": ""}${returnType? nodeMap.get(returnType) + " ": "void "}${name}(`;
          if (parameters && parameters.length) {
            javaCode += `String ${parameters.join(', String ')}`;
          }
          javaCode += `)${abstract || interfaceMethod? ";\n" : " {"}`;
          
          if(methodBody){
            for(let i = 0; i < methodBody[0].length; i++){
              javaCode += `\n\t\t${methodBody[0][i]};`;
            }
          
          }
          javaCode += `${abstract || interfaceMethod? "" : "\n\t}\n"}`;         
        }

        javaCode += `}\n\n`;
      }
      }
    }

    javaCode += clientCode(nodes, setNodes)
    
    return javaCode


    // const handleSend = async () => {
    //   await sendCodeToGPTModel(javaCode, setResponse, "javascript")
    //   console.log(response)
    // };
  
    

    
  };
  
  export default ConvertToJava;
  