import React from "react";
import { Card, CardDeck, Form, Jumbotron } from "react-bootstrap";
import { Row, Container, Col } from "../components/Grid";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";

function Search() {
	return (
		<Container>
			<Form>
				<Form.Group controlId="formCity">
					<Form.Label>Search by City</Form.Label>
					<Form.Control type="city" placeholder="City..." />
				</Form.Group>
			</Form>

			<Row className="mb-6">
				<CardDeck>
					<Card size="md-6">
						<h1>This is Card 1</h1>
					</Card>
					<Card size="md-6">
						<h1>This is Card 2</h1>
					</Card>
				</CardDeck>
			</Row>

			<Row className="mb-6">
				<Card>
					<h1>This is maps Card</h1>
				</Card>
			</Row>
			<Row>
				<Col size="md-12">
					<Jumbotron></Jumbotron>
				</Col>
			</Row>
		</Container>
	);
}

export default Search;
