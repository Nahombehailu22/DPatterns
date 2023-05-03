export const clientCode = (nodes) => {
    const ConcreteState1 = nodes.find(node => node.id === "1a").data.class_name;
    
    const contextNode = nodes.find(node => node.id === "0");
    const Context = contextNode.data.methods.find(method => method.id === "1").name;
    const stateInterface = nodes.find(node => node.id === "0a");
    const doThis = stateInterface.data.methods.find(method => method.id === "1").name;



    return (
      <p>
        intialState = <b>new</b> {ConcreteState1}()
        <br></br>
        context = new {Context}(initialState)
        <br></br>
        context.{doThis}()
    </p>
    )
};

export const StateCode1 = (nodes) => {
  const state = nodes.find(node => node.id === "0").data.attributes
  .find(attribute => attribute.id === "1").name

    return (
      <p>
        this.{state}() = {state}
        <br></br>
        {state}.setContext(this)
      </p>
    )
};

export const StateCode2 = (nodes) => {
    const state = nodes.find(node => node.id === "0").data.attributes
    .find(attribute => attribute.id === "1").name

    const stateInterface = nodes.find(node => node.id === "0a");
    const doThis = stateInterface.data.methods.find(method => method.id === "1").name;
    const doThat = stateInterface.data.methods.find(method => method.id === "2").name;

    return (
      <p>
        
        {state}.{doThis}()
        <br></br>
        //...
        <br></br>
        {state}.{doThat}()
      </p>
    )
};
