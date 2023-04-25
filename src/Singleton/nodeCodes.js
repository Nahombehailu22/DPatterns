export const singletonCode = (nodes) => {
    const instanceNode = nodes.find(node => node.id === "0")
    const instance = instanceNode.data.attributes.find(attribute => attribute.id === "1").name
  
    const classSingleton = nodes.find(node => node.id === "0").data.class_name;

    return (
      <p>
        if({instance}==null) {'{'}
        <br></br>
        &nbsp;&nbsp;&nbsp;instance = new {classSingleton}()
        <br></br>
        {'}'}
        <br></br>
        return {instance}
      </p>
    )
  };