import React from 'react';
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";
import Button from "@material-ui/core/Button/Button";
import Link from "react-router-dom/es/Link";
import {Route} from "react-router-dom";
import About from "./About";
import Contacts from "./Contacts";


class EditDict extends React.Component {
    constructor(props){
        super(props)
        this.dictName = props.match.params.name
        this.state = {
            data: 1
        }
    }

    loadData() {
        var _this = this
        fetch(`http://localhost:8000/dictionaries/get/?dictionary=${this.dictName}`, {
            headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            // 'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
            // 'Access-Control-Allow-Credentials': 'false'
            }
        })
        .then(function(response) {
            // console.log(response.headers.get('Dict-Type')); // application/json; charset=utf-8
            // console.log(response.status); // 200
            return response.json();
        })
        .then(answer => {
            console.log(answer.words)
            var i = 0;
            var t = 0;
            var g = 0;
            const listItems = answer.words.map((number) =>
                <p key={i++} >{answer.words[t++].original} to {answer.words[g++].translate}</p>
            );
            _this.setState({ data: answer, words: listItems })
        }).catch( console.log );
    }

    componentDidMount(){
        this.loadData()
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
                  <h1>{ this.state.data.name }</h1>
                <h3>Language</h3>
                <p>{ this.state.data.language } to { this.state.data.language_to }</p>
                <h3>Words</h3>
                { this.state.words }
              </Col>
          </Row>
     </div>
    );
  }
}

export default EditDict;
