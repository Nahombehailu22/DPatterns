export const implementationCode = (nodes) => {
    const imp = nodes.find(node => node.id === "0")
    .data.attributes.find(attribute => attribute.id === "1").name;
    
    const operationImp1 = nodes.find(node => node.id === "0a")
    .data.methods.find(method => method.id === "1").name;
  
    return (
      <p>
        {imp}.{operationImp1}
      </p>
    )
  };
  
export const refinedAbstractionCode = (nodes) => {
    const imp =  nodes.find(node =>(node.id === "0"))
    .data.attributes.find(attribute => attribute.id === "1").name;
  
    return (
      <p>
          {imp}.methodN()
          <br></br>
          {imp}.methodM()
      </p>
    )
  };
  
export const clientCode = (nodes) => {
  
    const abstractNode = nodes.find(node => node.id === "0");
    const operation = abstractNode.data.methods.find(method => method.id === "1").name
  
    return (
      <p>abstraction.{operation}()</p>
    )
  }