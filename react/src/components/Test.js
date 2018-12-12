import React from 'react';
import Button from "@material-ui/core/Button/Button";
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Link from "react-router-dom/es/Link";


class Test extends React.Component {
    constructor(props) {
        super(props)
        var item = null
        this.initColors = ['primary', 'primary', 'primary', 'primary',]
        this.disable = [false, false, false, false]
        this.initVarians = ['outlined', 'outlined', 'outlined', 'outlined']
        console.log(item)
        // this.item = [
        //     {original: 'hello', translate: 'привет'},
        //     {original: 'table', translate: 'стол'},
        //     {original: 'face', translate: 'лицо'},
        //     {original: 'book', translate: 'книга'},
        //     {original: 'key', translate: 'ключ'},
        //     {original: 'home', translate: 'дом'},
        //     {original: 'street', translate: 'улица'},
        // ]
        this.count = 0
        this.state = {
            word: '...init',
            wrongWords: [],
            colors: [...this.initColors],
            variants: [...this.initVarians],
            isAnswer: false,
            countOfAttempt: 0,
            countOfСorrect: 0,
            disable: [...this.disable],
            isLoading: true
        }
        this.loadData()
    }

    loadData() {
        fetch('http://localhost:8000/dictionaries/traine/getWord', {
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
            // console.log(answer.words)
            this.item = this.shuffle(answer.words)
            this.getWord()
            this.setState({isLoading: false})
        }).catch( console.log );
    }

    getWord() {
        this.setState({colors: [...this.initColors]})
        this.setState({variants: [...this.initVarians]})
        this.setState({disable: [...this.disable]})
        this.setState({isAnswer: false})
        if (this.count === this.item.length) {
            this.count = 0
        }
        var word = this.item[this.count].translate
        var translate = this.item[this.count].original
        var wrongWords = this.getWrongWord(translate, 3)
        wrongWords.push(translate)
        var data = wrongWords
        data = this.shuffle(data)
        this.setState({
            wrongWords: data,
            word: word,
            translate: translate,
        })
        this.count++
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return [...array];
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    getWrongWord(word, count) {
        var index2 = 0
        if (count > this.item.length) {
            count = this.item.length
        }
        var arr = [];
        while (index2 < count) {
            var index = this.getRandomInt(0, this.item.length)
            if (this.item[index].original !== word && arr.indexOf(this.item[index].original) === -1) {
                arr.push(this.item[index].original)
                index2++
            }
        }
        return [...arr]
    }

    check(word, index) {
        let colors = [...this.state.colors]
        var disable = [true, true, true, true]
        this.setState({countOfAttempt: this.state.countOfAttempt + 1})
        if (word === this.state.translate) {
            colors[index] = 'primary'
            this.setState({countOfСorrect: this.state.countOfСorrect + 1})
        } else {
            colors[index] = 'secondary'
        }
        let variants = [...this.state.variants]
        variants[index] = 'outlined'
        disable[index] = false
        this.state.wrongWords.map((item, index) => {
            if (item === this.state.translate) {
                disable[index] = false
                variants[index] = 'outlined'
            }
        })

        this.setState({
            colors: colors,
            variants: variants,
            isAnswer: true,
            disable: [...disable]
        })
    }

    render() {
        return (
            <Row>
                {this.state.isLoading ?
                    (<Col md="12" style={{textAlign: 'center'}}><h1>Please wait loading...</h1> </Col>) :
                    (
                    <Row>
                        <Col md="12">
                        <Row>
                            <Col md="12" style={{textAlign: 'center'}}>
                                <h3>Give the translation of the word:</h3>
                                <h1>{this.state.word}</h1>
                            </Col>
                        </Row>
                        <Row style={{marginTop: 10}}>
                            <Col md-offset="2" md="8">
                                <Row>

                                    {
                                        this.state.wrongWords.map((item, index) => (
                                            <Col key={index} md="3">
                                                <Button style={{width: 130}} color={this.state.colors[index]} variant={this.state.variants[index]} disabled={this.state.disable[index]} key={index}
                                                    onClick={() => this.check(item, index)}
                                                >
                                                    {item}
                                                </Button>
                                            </Col>
                                        ))
                                    }

                                </Row>
                            </Col>
                        </Row>
                        <Row style={{height: 50}}>
                            <Col md-offset="10" md="2">
                                {
                                    this.state.isAnswer ? (
                                        <Button variant="contained" onClick={() => this.getWord()}>Next</Button>
                                    ) : null
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col md="2" md-offset="10">
                                <b><span style={{color: 'green'}}>{this.state.countOfСorrect}</span> / <span style={{color: 'red'}}>{this.state.countOfAttempt}</span></b>
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                )}
            </Row>
        )
    }
}

export default Test;
