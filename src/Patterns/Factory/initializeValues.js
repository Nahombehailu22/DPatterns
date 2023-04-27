import { updateNodes } from "../../Interactivity/updateNodes";

const expClasses = ["Logistics", "RoadLogistics", "SeaLogistics", "Transport", "Truck", "Ship"]
const expMethods = [
    [{ id: "1", name: "planDelivery" }, { id: "2", name: "createTransport"}], 
    [{ id: "1", name: "createTransport"}], 
    [{ id: "1", name: "createTransport"}], 
    [{ id: "1", name: "deliver"}],
    [{ id: "1", name: "deliver"}],
    [{ id: "1", name: "deliver"}],
]

const defaultClasses = ["Creator", "ConcCreator1", "ConcCreator2", "Product", "ConcProduct1", "ConcProduct2"];
const defaultMethods = [
    [{ id: "1", name: "someOperation" }, { id: "2", name: "createProduct"}], 
    [{ id: "1", name: "createProduct"}], 
    [{ id: "1", name: "createProduct"}], 
    [{ id: "1", name: "doStuff"}],
    [{ id: "1", name: "doStuff"}],
    [{ id: "1", name: "doStuff"}],
]

const initialize = (setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden, type) => {
    if (type === "example"){
        updateNodes(setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden, expClasses, expMethods);
    }
    else{
        updateNodes(setNodes, setEdges, handleChanges, codeWritten, popHidden, hidden, edgeHidden, defaultClasses, defaultMethods);
    }
    
}
 
export default initialize;