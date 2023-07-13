import { Link } from "react-router-dom";
import "../css/Back.css"

const Back = () => {
    return ( 
        <div className="back">
            <Link to='/'>BACK</Link>
        </div>
    );
}

export default Back;