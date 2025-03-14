import React from "react";
import { Button } from "react-bootstrap";
import { Row, Container, Col } from "react-bootstrap";
import "./App.css";
import lemons from "./assets/images/lemons.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <header className="App-header">
                            UM COS420 with React Hooks and TypeScript
                        </header>
                        <h1>Hello, World!</h1>
                        <img src={lemons} alt="h" />
                        <p>edited by Jaron</p>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                    </Col>
                    <Col>
                        <p>
                            You should really consider clicking that button.
                            Also, here is a list:
                        </p>
                        <ul>
                            <li>First</li>
                            <li>Another</li>
                            <li>A third</li>
                        </ul>
                        <div
                            style={{
                                width: 500,
                                height: 60,
                                backgroundColor: "red",
                            }}
                        >
                            help i am trapped inside a rectangle aaaaahhhh
                        </div>
                        <div
                            style={{ border: "1px solid blue", padding: "4px" }}
                        >
                            this will be surrounded by a border and padding. And
                            this is{" "}
                            <span style={{ color: "red" }}>colored text</span>.
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default App;
