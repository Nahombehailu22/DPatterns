export const strategyCode1 = (nodes) => {
    const strategy = nodes.find(node => node.id === "0").data.attributes
    .find(attribute => attribute.id === "1").name

    const interfaceNode = nodes.find(node => node.id === "0a")
    const execute = interfaceNode.data.methods.find(method => method.id === "1").name;

    return (
      <p>
        {strategy}.{execute}()
      </p>
    )
  };

export const clientCode = (nodes) => {
    const ConcreteStrategy1 = nodes.find(node => node.id === "1a").data.class_name;
    const ConcreteStrategy2 = nodes.find(node => node.id === "2a").data.class_name;
    
    const contextNode = nodes.find(node => node.id === "0");
    const setStrategy = contextNode.data.methods.find(method => method.id === "1").name;
    const doSomething = contextNode.data.methods.find(method => method.id === "2").name;

    return (
      <p>
        str = <b>new</b> {ConcreteStrategy1}()
        <br></br>
        context.{setStrategy}(str)
        <br></br>
        context.{doSomething}()
        <br></br>
        //...
        <br></br>
        other = <b>new</b> {ConcreteStrategy2}()
        <br></br>
        context.{setStrategy}(other)
        <br></br>
        context.{doSomething}()
      </p>
    )
  };