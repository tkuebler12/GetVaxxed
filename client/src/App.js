import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";



function App() {
    const [loggedIn, setLoggedIn] = useState(false);
	

	return (
		<Router>
			<Nav loggedIn={loggedIn} />
			<div>
				<Switch>
					<Route exact path={["/", "/home"]}>
						{loggedIn ? <Home /> : <Login />}
					</Route>
					<Route exact path={["/search"]}>
						<Search />
					</Route>
				</Switch>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
