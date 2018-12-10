import React from 'react';
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';


const CreateDict = props => <Link to="/dict" {...props} />
const linkAddDict = props => <Link to="/dict/add" {...props} />
const traine = props => <Link to="/traine" {...props} />
const animate = props => <Link to="/animate" {...props} />
const dnd = props => <Link to="/dnd" {...props} />
const sprint = props => <Link to="/sprint" {...props} />
const test = props => <Link to="/test" {...props} />

class Home extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md="12">
                        <p className="mui--text-center"
                            style={{
                                fontSize: '30px'
                            }}
                        >Words</p>
                    </Col>
                </Row>
                <Row style={{
                    marginTop: '20px'
                }}>
                    <Col md-offset="1" md="2">
                        <Button
                            variant="contained"
                            component={CreateDict}
                            color="primary"
                            style={{
                                marginBottom: '10px'
                            }}
                        >Show dict</Button>
                        <Button variant="contained" component={linkAddDict} color="primary"
                            style={{
                                marginBottom: '10px'
                            }}
                        >Create dict</Button>
                        <Button variant="contained" component={test} color="primary"
                            style={{
                                marginBottom: '10px'
                            }}
                        >Test</Button>
                    </Col>
                </Row>
             </div>
        );
    }
}

export default Home;
