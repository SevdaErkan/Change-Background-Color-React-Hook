import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <nav>
         <h4>Color Flipper</h4>
         <ul>
            <Link to="/" style={{ textDecoration: "none" }}>
               <li>Simple</li>
            </Link>
            <Link to="/hex" style={{ textDecoration: "none" }}>
               <li>Hex</li>
            </Link>
         </ul>
      </nav>
   );
};
export default Navbar;
