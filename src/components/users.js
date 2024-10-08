import { Outlet, useSearchParams } from "react-router-dom";
export const Users = () =>{
    const [SearchParams, setSearchParams] =useSearchParams();
    
    return(
        <div>
            <h1>USERS 1</h1>
            <h1>USERS 2</h1>
            <h1>USERS 3</h1>
            <Outlet/>
            <div>
                <button onClick={() => setSearchParams({filter: 'active'})}>Active users</button>
                <button onClick={() => setSearchParams({})}>reset filter</button>
            </div>
           
        </div>
    );
}