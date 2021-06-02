import React, { useState } from "react";
import "./Search.css";
import Covid from "./Covid.mp4";
import { Card, Form } from "react-bootstrap";
import { Row, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Search() {
	const [states, setStates] = useState([
		"AL",
		"AK",
		"AS",
		"AZ",
		"AR",
		"CA",
		"CO",
		"CT",
		"DE",
		"DC",
		"FM",
		"FL",
		"GA",
		"GU",
		"HI",
		"ID",
		"IL",
		"IN",
		"IA",
		"KS",
		"KY",
		"LA",
		"ME",
		"MH",
		"MD",
		"MA",
		"MI",
		"MN",
		"MS",
		"MO",
		"MT",
		"NE",
		"NV",
		"NH",
		"NJ",
		"NM",
		"NY",
		"NC",
		"ND",
		"MP",
		"OH",
		"OK",
		"OR",
		"PW",
		"PA",
		"PR",
		"RI",
		"SC",
		"SD",
		"TN",
		"TX",
		"UT",
		"VT",
		"VI",
		"VA",
		"WA",
		"WV",
		"WI",
		"WY",
	]);
	return (
		<div className="App">
			<body>
				{/* <video autoPlay loop muted>
					<source src={Covid} type="video/mp4" />
				</video> */}
				<Container>
					<Form>
						<Form.Group>
							<Form.Label>Search by State</Form.Label>
							<Form.Control type="state" placeholder="State..." />
							{states.map((state) => (
								<select value={state}>{state} </select>
							))}
						</Form.Group>
						<Form.Group controlId="formCity">
							<Form.Label>Search by City</Form.Label>
							<Form.Control type="city" placeholder="City..." />
						</Form.Group>
					</Form>

					<Row>
						<Col>
							<Card id="card1" className="mb-4">
								<Card.Body>
									<Card.Title>Test</Card.Title>
									<Card.Text>
										<h1>This is Card 1</h1>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card id="card2" className="mb-4">
								<Card.Body>
									<Card.Title>Test</Card.Title>
									<Card.Text>
										<h1>This is Card 2</h1>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</body>
		</div>
	);
}

export default Search;
