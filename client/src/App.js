import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App(){
    return(
        <Router>
            <Nav />
            <div>
                <Switch>
                    <Route exact path={["/","/home"]}>
                        <Home />    
                    </Route>
                    <Route exact path={["/search"]}>
                        <Home />    
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
