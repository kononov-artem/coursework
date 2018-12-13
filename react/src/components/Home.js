import React from 'react';
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

const test = props => <Link to="/test" {...props} />

class Home extends React.Component {
    render() {
        return (
            <Row>
                <Col md="12">
                    <Row>
                        <Col md-offset="1" md="10">
                            <p style={{
                                // padding: 10,
                                marginTop: 20,
                                textAlign: 'justify',
                                fontFamily: 'Oswald',
                                fontSize: 18
                            }}>
                                This is a basic Bootstrap 4 modal. The modal also comes in a smaller and larger sizes.
                                What will you put in your modal? Lorem ipsum dolor sit amet, consectetur adipiscing elit. in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.
                            </p>
                        </Col>
                    </Row>
                    <Row style={{
                        marginTop: '20px'
                    }}>
                        <Col md-offset="1" md="2">
                            <Button variant="outlined" component={test}
                                style={{
                                    marginBottom: '10px'
                                }}
                            >Test</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default Home;
