export const clientCode = (nodes) => {
    const ConcComponent = nodes.find(node => node.id === "1").data.class_name;
    const ConcDecorator1 = nodes.find(node => node.id === "1a").data.class_name;
    const ConcDecorator2 = nodes.find(node => node.id === "2a").data.class_name;

    const execute = nodes.find(node => node.id === "0").data.methods
    .find(method => method.id === "1").name

    return ( 
        <p>
            a = <b>new</b> {ConcComponent}()<br/>
            b = <b>new</b> {ConcDecorator1}(a)<br/>
            c = <b>new</b> {ConcDecorator2}(b)<br/>
            c.{execute}()
        </p>
     );
}
 
export const decoratorCode1 = (nodes) => {
    const wrappee = nodes.find(node => node.id === "2").data.attributes
    .find(attribute => attribute.id === "1").name

    return ( <p> {wrappee} = c </p>);
}

export const decoratorCode2 = (nodes) => {
    const wrappee = nodes.find(node => node.id === "2").data.attributes
    .find(attribute => attribute.id === "1").name

    const execute = nodes.find(node => node.id === "0").data.methods
    .find(method => method.id === "1").name

    return ( 
        <p>{wrappee}.{execute}()</p>
     );
}

export const concreteDecoratorCode = (nodes) => {
    const execute = nodes.find(node => node.id === "0").data.methods
    .find(method => method.id === "1").name

    const extra1 = nodes.find(node => node.id === "1a").data.methods
    .find(method => method.id === "2").name

    return ( 
        <p>
            <b>super</b>::{execute}()<br/>
            {extra1}()
        </p>
     );
}
 
 

