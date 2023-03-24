import "./navbar.css";
import { useState } from 'react';
import Card from './Cards/CardUI';

const Navbar = () => {
    const [category, setCategory] = useState("All Patterns");
    const [searchQuery, setSearchQuery] = useState("");


    const handleClick = (category) => {
        setCategory(category);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        // TODO: Perform search based on searchQuery
        console.log(`Search for patterns with name containing: ${searchQuery}`);
    }

    return (
        <nav className="navbar">
            <button className="nav-button" type="button" onClick={() => handleClick("All Patterns")}>All Patterns</button>
            <button className="nav-button" type="button" onClick={() => handleClick("behavioral")}>Behavioral Patterns</button>
            <button className="nav-button" type="button" onClick={() => handleClick("creational")}>Creational Patterns</button>
            <button className="nav-button" type="button" onClick={() => handleClick("structural")}>Structural Patterns</button>
            {/* <button className="nav-button" type="button">Learn About Design Patterns</button> */}
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Search patterns by name" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
                <button type="submit">Search</button>
            </form>
            <br></br><br></br><br></br>
            <Card category={category} searchQuery={searchQuery} />
        </nav>
    );
}

export default Navbar;