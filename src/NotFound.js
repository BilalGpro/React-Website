import { Link } from "react-router-dom";


const NotFound = () => {
    return ( 
        <div>
            <h2>SORRY PAGE NOT FOUND</h2><br /><br />
            <Link to='/'>
                <div>back to homepage</div>
             </Link>
        </div>
     );
}
 
export default NotFound;