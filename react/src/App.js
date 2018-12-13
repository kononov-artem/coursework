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
                            // backgroundColor: '#ffffff',
                            height: '400px',
                            marginTop: 40,
                            borderRadius: '5px',
                            border: '1px solid #cccccc'
                        }}>
                            <Row>
                                <Col md-offset="1" md="7" style={{
                                    marginTop: 15
                                }}>
                                    <p style={{
                                        // marginLeft: 25,
                                        fontSize: '30px',
                                        fontStyle: 'Muli',
                                        fontFamily: 'Oswald',
                                        fontWeight: 500
                                    }}
                                    ><b>Words</b></p>
                                </Col>
                                <Col md="3" style={{
                                    marginTop: 15
                                }}>
                                    <Button variant="outlined" component={home} >Home</Button>
                                </Col>
                            </Row>
                            <hr style={{
                                margin: 0
                            }}/>

                            <Route exact path="/" component={Home}/>
                            <Route path="/test" component={Test}/>

                            {/*<hr style={{*/}
                                {/*margin: 0*/}
                            {/*}}/>*/}
                            {/*<Row>*/}
                                {/*<Col md-offset="1" md="7" style={{*/}
                                    {/*// marginTop: 15*/}
                                {/*}}>*/}
                                    {/*<p style={{*/}
                                        {/*// marginLeft: 25,*/}
                                        {/*fontSize: 12,*/}
                                        {/*// fontStyle: 'Muli',*/}
                                        {/*// fontFamily: 'Oswald',*/}
                                        {/*// fontWeight: 500*/}
                                    {/*}}*/}
                                    {/*>Words</p>*/}
                                {/*</Col>*/}
                            {/*</Row>*/}
                        </div>

                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    );
  }}


export default App;
