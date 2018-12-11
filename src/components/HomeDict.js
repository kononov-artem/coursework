import React from 'react';
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";
import Button from "@material-ui/core/Button/Button";
import Link from "react-router-dom/es/Link";
import {Route} from "react-router-dom";
import About from "./About";
import Contacts from "./Contacts";


class HomeDict extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: 1
        }
    }

    loadData() {
        var _this = this
        fetch('http://localhost:8000/dictionaries/your_dict/', {
            headers : {
                'credentials': 'same-origin',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        .then(function(response) {
            return response.json();
        })
        .then(answer => {
            console.log(answer.dicts)
            var i = 0;
            var t = 0;
            var g = 0;
            const listItems = answer.dicts.map((number) => {
                var link = `dict/edit/${answer.dicts[g++]}`;
                return (<li key={i++}><Link style={{color: 'red'}} to={link}>{answer.dicts[t++]}</Link></li>)
            });
            this.setState({dicts: listItems})
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
                <h1 className="mui--text-center">Dict</h1>
            </Col>
        </Row>
        <Row>
            <Col md="12">
                <ul>
                    {this.state.dicts}
                </ul>
            </Col>
        </Row>
     </div>
    );
  }
}

export default HomeDict;
