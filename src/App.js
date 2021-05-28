import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hex from "./components/HexColors";
import Navbar from "./components/Navbar";
import Simple from "./components/Simple";
import "./styles.css";

export default function App() {
   return (
      <Router>
         <Navbar />
         <div className="App">
            <Switch>
               <Switch>
                  <Route exact path="/index.html" component={Simple} />
                  <Route path="/hex" component={Hex} />
               </Switch>
            </Switch>
         </div>
      </Router>
   );
}
