import { NavLink } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    return(
        <div className="container">
            <table>
                <tr>
                    <td><NavLink to="Home">Home</NavLink></td>
                    <td><NavLink to="About">About</NavLink></td>
                    <td><NavLink to="Branch">Branch</NavLink></td>
                    <td><NavLink to="Dashboard">Dashboard</NavLink></td>
                    <td><NavLink to="Contact">Contact</NavLink></td>
                    <td><NavLink to="products">Product</NavLink></td>
                </tr>
            </table>
        </div>
    );
}
export default Navbar;