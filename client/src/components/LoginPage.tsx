import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const UserLoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		// Here you can add your login logic, e.g., send login credentials to the server.
		// For this example, we'll just log the input values to the console.
		console.log("Email:", email);
		console.log("Password:", password);
	};

	return (
		<Container className="mt-5">
			<h1>Login</h1>
			<Form>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>

				<Button variant="primary" type="submit" onClick={handleLogin}>
					Submit
				</Button>
			</Form>
		</Container>
	);
};

export default UserLoginPage;
