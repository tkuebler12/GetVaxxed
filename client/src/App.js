import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";


function App() {
	return (
		<Router>
			<Nav />
			<div>
				<Switch>
					<Route exact path={["/", "/home"]}>
						<Home />
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
