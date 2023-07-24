import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import React from "react";
import UserLoginPage from "./LoginPage";
import "../App.css";

const App: React.FC = () => {
	return (
		<Container>
			<Navbar className="navbar-custom">
				<Navbar.Brand href="/">
					User Authentication Example
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav>
						<Nav.Link href="/">Login</Nav.Link>
						<Nav.Link href="#">Sign Up</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<BrowserRouter>
				<Routes>
					<Route path="/" Component={UserLoginPage} />
					{/* <Route path="/signup" Component={SignUpComponent} /> */}
					{/* Add other routes and components */}
				</Routes>
			</BrowserRouter>
		</Container>
	);
};

export default App;
