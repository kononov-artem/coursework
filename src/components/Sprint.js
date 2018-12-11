import React from "react";
import {Component} from "react";
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Button from "@material-ui/core/Button/Button";


class Sprint extends Component {
    constructor(props) {
        super(props)
        this.item = [
            {original: 'hello', translate: 'привет'},
            {original: 'table', translate: 'стол'},
            {original: 'face', translate: 'лицо'},
        ]
        this.count = 0
        this.state = {
            word: 'init'
        }
        this.escFunction = this.escFunction.bind(this);
    }

    escFunction(event){
        if (event.keyCode === 39) {
            this.check(this.state.right)
        } else if (event.keyCode === 37) {
            this.check(this.state.left)
        }
    }

    getWord() {
        if (this.count === this.item.length) {
            this.count = 0
        }
        var word = this.item[this.count].translate
        var translate = this.item[this.count].original
        var wrongWord = this.getWrongWord(translate)
        var rand = this.getRandomInt(0, 2)
        if (rand === 0) {
            var left = wrongWord
            var right = translate
        } else {
            var right = wrongWord
            var left = translate
        }
        this.setState({
            wrongWord: wrongWord,
            word: word,
            translate: translate,
            left: left,
            right: right,
        });
        this.count++
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    getWrongWord(word) {
        while (true) {
            var index = this.getRandomInt(0, this.item.length)
            if (this.item[index].original !== word) {
                return this.item[index].original
            }
        }
    }

    check(word) {
        console.log(word === this.state.translate)
        this.getWord()
    }

    componentDidMount(){
        document.addEventListener("keydown", this.escFunction, false);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.escFunction, false);
    }

    render() {
        return (
            <Row>
                <Row>
                    <Col md="12" style={{textAlign: 'center'}}>
                        <h1>{this.state.word}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md="12" md-offset="2">
                        <Button variant="contained" color="primary" onClick={() => this.getWord()}>Get word</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md="2" md-offset="5">
                        <Button variant="contained" color="primary" onClick={() => this.check(this.state.left)}>{this.state.left}</Button>
                    </Col>
                    <Col md="2">
                        <Button variant="contained" color="primary" onClick={() => this.check(this.state.right)}>{this.state.right}</Button>
                    </Col>
                </Row>
            </Row>
        )
    }
}
export default Sprint;
