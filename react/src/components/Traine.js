import React from 'react';
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";
import Button from "@material-ui/core/Button/Button";
import Link from "react-router-dom/es/Link";
import {Route} from "react-router-dom";
import About from "./About";
import Contacts from "./Contacts";
import TextField from "@material-ui/core/TextField/TextField";


class Traine extends React.Component {
    constructor(props){
        super(props)
        this.dictName = props.match.params.name
        this.state = {
            data: 1,
            word: '',
        }
    }

    loadData() {
        var _this = this
        fetch(`http://127.0.0.1:8000/dictionaries/traine/getWord`, {
            headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            }
        })
        .then(function(response) {
            return response.json();
        })
        .then(answer => {
            // console.log(answer.word)
            _this.setState({word: answer.word})
            // console.log(this.state.word)
        }).catch( console.log );
    }

    componentDidMount(){
        this.loadData()
    }

    handleChange = name => event => {
        // console.log({ [name]: event.target.value })
        this.setState({ [name]: event.target.value })
      };

    check() {
        var data = [{
            word: this.state.word,
            translate: this.state.translate
        }];
        var _this = this
        fetch('http://127.0.0.1:8000/dictionaries/traine/check', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
        .then(function(response) {
            return response.json();
        })
        .then(answer => {
            if (answer.answer) {
                var answer = 'True'
            } else {
                var answer = 'False'
            }
            _this.setState({answer: answer})
            console.log(_this.state.answer)
        })
    }

_handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.check.bind(this)()
    }
  }

  render() {
    return (
      <div>
          <Row>
            <Col md="12">
                <h1 className="mui--text-center">Edit Dict</h1>
            </Col>
        </Row>
          <Row>
              <Col md="12">
                  <h1>Translate <b>{ this.state.word }</b></h1>
              </Col>
          </Row>
          <Row>
              <Col md="12">
                  <TextField
                      id="standard-name"
                      label="Translate"
                      name='translate'
                      onChange={this.handleChange('translate')}
                      onKeyPress={this._handleKeyPress}
                      margin="normal"
                    />
                  <p>It is {this.state.answer}</p>
              </Col>
          </Row>
          <Row>
              <Col md="6">
                  <Button variant="contained" color="primary" onClick={this.loadData.bind(this)}>Get word</Button>
              </Col>
              <Col md="6">
                  <Button variant="contained" color="primary" onClick={this.check.bind(this)}>Check</Button>
              </Col>
          </Row>
     </div>
    );
  }
}

export default Traine;
