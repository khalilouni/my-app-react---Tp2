import { Link } from 'react-router-dom'
import Button from './Button';

const Navbar = ({onAdd, showAdd}) => {

    const linkStyle = {
        margin: "2rem",
        textDecoration: "none",
        color: 'white'
      };


    return  (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
                    <div className="container-fluid">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            <li className="nav-item">
                                <Link to="/build" style={linkStyle} >Liste de produit</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" style={linkStyle} >About</Link>
                            </li>
                        </ul>
                        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
                    </div>
                </nav>
            </>
       
    );
}

export default Navbar;
