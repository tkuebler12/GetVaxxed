import React,{useState} from "react";
import "./Search.css";
import { Card, Form, Jumbotron } from "react-bootstrap";
import { Row, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Search() {
	const [states,setStates]=useState([ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ])
	return (
		<div>
			<header>
				<Container>
					<Form id="search" className="mb-4">
					<label for="state">Choose your state:</label>
                        <select  name="state" id="state">
                            {states.map(state => (
                                    <option value={state}>{state} </option>
                                ))}
                        </select>
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

					<Row>
						<Card id="mapCard" className="mb-4" size="justify-content-center">
							<Card.Body>
								<Card.Title>Test</Card.Title>
								<Card.Text>
									<h1>This is map card</h1>
								</Card.Text>
							</Card.Body>
						</Card>
					</Row>
					<Row>
						<Col size="md-12">
							<Jumbotron id="jumbotron">This is a test</Jumbotron>
						</Col>
					</Row>
				</Container>
			</header>
		</div>
	);
}

export default Search;
