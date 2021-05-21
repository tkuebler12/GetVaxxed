import React from "react";
import "./search.css";
import { Card, Form, Jumbotron } from "react-bootstrap";
import { Row, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Search() {
	return (
		<div>
			<header>
				<Container>
					<Form id="search" className="mb-4">
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
						<Card id="mapCard" className="mb-4">
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
