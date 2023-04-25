import { useState } from "react";
import { Navbar } from "react-bootstrap";
import CardUI from "./Cards/CardUI";

const Homepage = () => {
    const [category, setCategory] = useState("All Patterns");
    const [searchQuery, setSearchQuery] = useState("");
    
    const navProps = {setCategory, setSearchQuery}
    return ( 
        <div>          
            <Navbar setCategory={setCategory} setSearchQuery={setSearchQuery} />
            <CardUI category={category} searchQuery={searchQuery} />
        </div>
     );
}
 
export default Homepage;
