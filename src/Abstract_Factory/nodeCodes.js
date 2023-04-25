export const productCode = (nodes) => {
    const productA = nodes.find(node => node.id === "0a").data.class_name;

    const factory = nodes.find(node => node.id === "c")
    .data.attributes.find(attribute => attribute.id === "1").name
    
    const abstractFactoryA = nodes.find(node => node.id === "0")
    .data.methods.find(method => method.id === "A").name;    

    return (
      <p>
        {productA} pa = {factory}.{abstractFactoryA}()
      </p>
    )
  };

export const concreteFactoryCode = (nodes, currID) => {
    const concreteProduct = nodes.find(node => node.id === `0a${currID}`).data.class_name;
    return (
      <p>
          <b>return new</b> {concreteProduct}
      </p>
    )
  };
