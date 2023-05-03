import useFetch from "../useFetch";
import "./card-style.css"
import { Link } from 'react-router-dom';

const Card = ({ category, searchQuery }) => {
    const { data: patterns, isPending, error } = useFetch('http://localhost:8000/patterns')

    const filteredPatterns = patterns && patterns.filter(pattern => {
        if (category === "All Patterns") {
            return pattern.name.toLowerCase().includes(searchQuery.toLowerCase());
        } else {
            return pattern.category === category && pattern.name.toLowerCase().includes(searchQuery.toLowerCase());
        }
    });

    return (
        <div className='row d-flex container-fluid justify-content-center' bg-gray>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {filteredPatterns && filteredPatterns.map(pattern => {
                
                return (
                    
                    <div className="card text-center col-md-3 m-3 bg-dark" key={pattern.id}>
                        <Link to={pattern.name === "Factory Method" ? "/factorymethoddemo" :
                                pattern.name === "Singleton Method" ? "/singletonmethoddemo" :
                                pattern.name === "Adapter Method" ? "/adaptermethoddemo" :
                                pattern.name === "Abstract Factory Method" ? "/abstractfactorymethoddemo" : 
                                pattern.name === "Observer Method" ? "/observermethoddemo" :
                                pattern.name === "Bridge Method" ? "/bridgemethoddemo" :
                                pattern.name === "Strategy Method" ? "/strategymethoddemo" :
                                pattern.name === "State Method" ? "/statemethoddemo" :

                        '#'} style = {{textDecoration: 'none'}}>
                        <div className="overflow" >
                            <img className='card-img-top' src={pattern.image} />
                            <br />
                        </div>
                        <div className="card-body text-light">
                                <h1 className="card-title font">{pattern.name}</h1>
                            
                            <p className="card-description">{pattern.description}</p>
                        </div>
                        </Link>
                    </div>
                    
                )
            })}
        </div>
    );

}

export default Card;