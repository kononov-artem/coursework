import React from 'react';
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Loading from "./Loading";

const test = props => <Link to="/test" {...props} />

class Home extends React.Component {
    render() {
        return (
            <Row>
                <Col md="12">
                    <Row>
                        <Row>
                            <Col md="12" style={{textAlign: 'center'}}>
                                <Loading interval="400"/>
                            </Col>
                        </Row>
                        <Col md-offset="1" md="10">
                            <p style={{
                                // padding: 10,
                                marginTop: 20,
                                textAlign: 'justify',
                                fontFamily: 'Oswald',
                                fontSize: 18
                            }}>
                                In the modern world, knowledge of foreign languages is very important. The most important thing in learning languages is vocabulary. The goal of this project is to help you increase your knowledge of foreign words.
                            </p>
                        </Col>
                    </Row>
                    <Row style={{
                        marginTop: '20px'
                    }}>
                        <Col md-offset="1" md="6">
                            <Button variant="outlined" component={test}
                                style={{
                                    marginBottom: '10px',
                                    width: 310
                                }}
                            >Let's go!</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default Home;
