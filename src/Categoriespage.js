import { useState } from "react";
import Navbar from './navbar.js';
import Card from './Cards/CardUI.js';


const CategoriesPage = () => {
    const [category, setCategory] = useState("All Patterns");
    const [searchQuery, setSearchQuery] = useState("");

    return ( 
        <div>
            <Navbar setCategory ={setCategory} setSearchQuery ={setSearchQuery}/>
            <Card category={category} searchQuery ={searchQuery}/>
        </div>
     );
}
 
export default CategoriesPage;