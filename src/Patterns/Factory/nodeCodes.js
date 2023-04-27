export const productCode = (nodes) => {
    const factoryMethod = nodes.find(node => node.id === "0").data.methods.
    find(method => method.id === "2").name;

    const interfaceNode = nodes.find(node => node.id === "0a")
    const interfaceMethod = interfaceNode.data.methods.find(method => method.id === "1").name
    const interfaceClass = interfaceNode.data.class_name;

    return (
      <p>
        {interfaceClass} p = {factoryMethod}()
        <br></br>
        p.{interfaceMethod}()
      </p>
    )
  };
  
 export const concreteCreatorCode = (nodes, currID) => {
    const concreteProduct = nodes.find(node => node.id === `${currID}a`).data.class_name;
    return (
      <p>
          <b>return new</b> {concreteProduct}
      </p>
    )
  };