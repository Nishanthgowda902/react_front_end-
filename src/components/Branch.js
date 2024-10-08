import React from "react";
import Branchnav from './Branchnav';
import { Outlet } from "react-router-dom";


function Branchs() {
    return(
        <div>
            <Branchnav/>
            <Outlet/>
        </div>
        
    );
}
export default Branchs;