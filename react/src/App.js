import React, { Component } from 'react';
import './App.css';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Button from '@material-ui/core/Button';
import {BrowserRouter, Route, Link} from "react-router-dom"
import Home from "./components/Home";
import Test from "./components/Test";
const home = props => <Link to="/" {...props} />

class App extends Component {
 render() {
    return (
        <BrowserRouter>
            <Container fluid={true}>
                <Row>
                    <Col md="6" md-offset="3">
                        <div style={{
                            backgroundColor: 'blue',
                            height: '450px',
                            borderRadius: '10px',
                            marginTop: 40,

                        }}>
                            <Col md="12"
                                style={{
                                    backgroundColor: '#9b3103',
                                    height: '50px',
                                }}
                            >
                                <Button variant="outlined" component={home} fullWidth={true} color="default">Home</Button>
                            </Col>
                            <Route exact path="/" component={Home}/>
                            <Route path="/test" component={Test}/>
                        </div>
                        <Col md="12"
                            style={{
                                backgroundColor: '#9b1b38',
                                height: '50px'
                            }}
                        >
                        </Col>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    );
  }}


export default App;
