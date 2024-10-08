import  Navbar from './components/Navbar';
import ReactDOM from 'react-dom/client';
import { Routes,Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Dashboard } from './components/Dashboard';
import { Contact } from './components/Contact';
import Branch from './components/Branch';
import { AT } from './components/AT';
import { CE } from './components/CE';
import { EC } from './components/EC';
import { ME } from './components/ME';
import { CS } from './components/CS';
import { Nopage } from './components/nopage';
import {  Users } from './components/users';
import {  UserDetails } from './components/usersdetails';
import { Products } from './components/products';
import { Admin } from './components/admin';
import './App.css';

function App(){
  return(
    <div className="App">
      <Navbar/>
 
    <Routes>
      <Route index elment={<Home/>}/>
      <Route path="Home" element={<Home/>}/>
      <Route path='Branch' element={<Branch/>}>
      <Route path="AT" element={<AT/>}/>
      <Route path="CE" element={<CE/>}/>
      <Route path="EC" element={<EC/>}/>
      <Route path="ME" element={<ME/>}/>
      <Route path="CS" element={<CS/>}/>
      </Route>  
      <Route path="Dashboard" element={<Dashboard/>}/>
      <Route path="About" element={<About/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="*" element={<Nopage/>}/>
      <Route path="products" element={<Products/>}/>
      <Route path="users" element={<Users/>}>
        <Route path=":userId" element={<UserDetails/>}/>
        <Route path="admin" element={<Admin/>} />
        
      </Route>
    
    </Routes>
    </div>

  );
   
}
export default App;