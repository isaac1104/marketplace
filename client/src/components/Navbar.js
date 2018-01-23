import React from "react";
import { Link } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";

const Navbar = () => {

  const style = {
   navbar: {
     height: "80px"
   }
 }

 return (
     <Segment inverted style={style.navbar}>
       <Menu inverted pointing secondary>
         <Link to="/">
           <Menu.Item name='MARKETPLACE'/>
         </Link>
         <Link to="/home">
           <Menu.Item name="HOME"/>
         </Link>
         <a href="/" onClick={() => localStorage.clear()}>
           <Menu.Item name="LOGOUT"/>
         </a>
       </Menu>
     </Segment>
 );
}

export default Navbar;
