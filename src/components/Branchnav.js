import React from "react";
import { NavLink } from "react-router-dom";
import './branchnav.css'

const Branchnav= () => {
    return(
        <div className="containerrs">
            <table>
                <tr>
                    <td><NavLink to="AT">AT</NavLink></td>
                    <td><NavLink to="CE">CE</NavLink></td>
                    <td><NavLink to="CS">CS</NavLink></td>
                    <td><NavLink to="EC">EC</NavLink></td>
                    <td><NavLink to="ME">ME</NavLink></td>
                </tr>
            </table>
        
        
        
        
        </div>
    );
}
export default Branchnav;