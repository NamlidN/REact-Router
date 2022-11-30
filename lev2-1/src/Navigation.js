
import { Link } from "react-router-dom";

import "./App.css"
function Navigation () {
    return (
        <div >
            <ul className="B">
                <li >
                
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;