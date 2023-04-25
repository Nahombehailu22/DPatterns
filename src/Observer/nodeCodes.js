export const publisherCode1 = (nodes) => {
    const publisherNode = nodes.find(node => node.id === "0");
    const subscribers = publisherNode.data.attributes.find(attribute => attribute.id === "1").name

    const updateNode = nodes.find(node => node.id === "0a");
    const update = updateNode.data.methods.find(method => method.id === "1").name;

    return (
      <p>
        foreach (s in {subscribers})
        <br></br>
        s.{update}(this)
      </p>
    )
  };

export const publisherCode2 = (nodes) => {
    const publisherNode = nodes.find(node => node.id === "0");
    const mainState = publisherNode.data.attributes.find(attribute => attribute.id === "2").name
    const notifySubscribers = publisherNode.data.methods.find(method => method.id === "3").name

    return (
      <p>
        {mainState} = newState
        <br></br>
        {notifySubscribers}()
      </p>
    )
  };

export const clientCode = (nodes) => {

    const publisherNode = nodes.find(node => node.id === "0");
    const subscribe = publisherNode.data.methods.find(method => method.id === "1").name

    const ConcreteSubscriber1 = nodes.find(node => node.id === "1a").data.class_name;

    return (
      <p>
        s = <b>new</b> {ConcreteSubscriber1}()
        <br></br>
        publisher.{subscribe}(s)
      </p>
    )
  };