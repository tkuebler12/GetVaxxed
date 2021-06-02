import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Signup from "./pages/Signup";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	function login(userData) {
		console.log("USERDATA",userData)
		setLoggedIn(true)
	};

	function logout() {
		setLoggedIn(false)

	};


	return (
		<Router>
			<Nav loggedIn={loggedIn} logout={logout} />
			<div>
				<Switch>
					<Route exact path={["/", "/home"]}>
						{loggedIn ? <Home /> : <Redirect to="/login" />}
					</Route>
					<Route exact path={"/login"}>
					{loggedIn ?<Redirect to="/home" />:<Login login={login} /> }
					</Route>
					<Route exact path={"/signup"}>
					{loggedIn ?<Redirect to="/home" />:<Signup  login={login}/> }
					{/* <Signup  login={login}/>  */}
					</Route>
					
					<Route exact path={["/search"]}>
						{loggedIn ? <Search /> : <Redirect to="/login" />}
					</Route>
				</Switch>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
