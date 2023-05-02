export const adapterCode = (nodes) => {
    const adapteeNode = nodes.find(node => node.id === "1");
    const adaptee = adapteeNode.data.attributes.find(attribute => attribute.id == "1").name;

    const serviceNode = nodes.find(node => node.id === "2")
    const serviceMethod = serviceNode.data.methods.find(method => method.id === "1").name;
    const dataMethod = nodes.find(node => node.id === "0").data.methods
    .find(method => method.id === "1")
    const data = dataMethod.parameters? dataMethod.parameters[0]:""
    

    return (
      <p>
        specialData = convertToServiceFormat({data})
        <br></br>
        return {adaptee}.{serviceMethod}(specialData)
      </p>
    )
  };