import React, { Component } from 'react';
import './App.css';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Appbar from 'muicss/lib/react/appbar';
import Col from 'muicss/lib/react/col';
import Example from "./components/Example";
import Example2 from "./components/Example2";
// import Button from 'muicss/lib/react/button';
import Button from '@material-ui/core/Button';
import {BrowserRouter, Route, Link} from "react-router-dom"
import About from "./components/About";
import Contacts from "./components/Contacts";
import Dict from "./components/Dict";
import Home from "./components/Home";
import Traine from "./components/Traine";
import Animate from "./components/Animate";
import Dnd from "./components/Dnd";
import Sprint from "./components/Sprint";
import Test from "./components/Test";
// import createBrowserHistory from "history/createBrowserHistory"

// const history = createBrowserHistory()

// const MyLink = props => <Link to="/ex" {...props} />
// <Button component={MyLink}>Link</Button>
const home = props => <Link to="/" {...props} />

class App extends Component {
 render() {
    return (
        <BrowserRouter>
            <Container fluid={true}>
                <Row>
                    <Col md="8" md-offset="2">
                        <div style={{
                            backgroundColor: '#eeeeee',
                            height: '450px'
                        }}>
                            <Col md="12"
                                style={{
                                    backgroundColor: '#7d8f9b',
                                    height: '50px'
                                }}
                            >
                                <Button variant="outlined" component={home} fullWidth={true} color="default">Home</Button>
                            </Col>
                            <Route exact path="/" component={Home}/>
                            <Route path="/dict" component={Dict}/>
                            <Route path="/traine" component={Traine}/>
                            <Route path="/contacts" component={Contacts}/>
                            <Route path="/about" component={About}/>
                            <Route path="/animate" component={Animate}/>
                            <Route path="/dnd" component={Dnd}/>
                            <Route path="/sprint" component={Sprint}/>
                            <Route path="/test" component={Test}/>
                        </div>
                        <Col md="12"
                            style={{
                                backgroundColor: '#7d8f9b',
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
