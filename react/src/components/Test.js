import React from 'react';
import Button from "@material-ui/core/Button/Button";
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';


class Test extends React.Component {
    constructor(props) {
        super(props)
        this.initColors = ['primary', 'primary', 'primary', 'primary',]
        this.disable = [false, false, false, false]
        this.initVarians = ['outlined', 'outlined', 'outlined', 'outlined']
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
            isLoading: true,
            isChecked: false,
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
            this.item = this.shuffle(answer.words)
            this.getWord()
            this.setState({isLoading: false})
        }).catch( console.log );
    }

    getWord() {
        this.setState({isChecked: false})
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
        console.log(this.state.isChecked)
        if (!this.state.isChecked) {
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
                disable: [...disable],
                isChecked: true
            })
        }
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
                            <Col md="12" style={{
                                textAlign: 'center',
                                fontFamily: 'Oswald',
                                fontSize: 16,
                                marginTop: 25
                            }}>
                                <div>
                                    <p>Give the translation of the word</p>
                                </div>

                                <div style={{
                                    // border: '1px solid #cccccc',

                                }}>
                                    <p style={{
                                        fontSize: 24,
                                        marginTop: 20,
                                        marginBottom: 20,
                                        fontFamily: 'Noto Serif TC'
                                    }}>
                                        <b>{this.state.word.toLowerCase()}</b>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{marginTop: 10}}>
                            <Col md-offset="2" md="8">
                                <Row>

                                    {
                                        this.state.wrongWords.map((word, index) => (
                                            <Col key={index} md="6">
                                                <Button
                                                    style={{
                                                        width: 117,
                                                        marginBottom: 20,
                                                    }}
                                                    // color={this.state.colors[index]}
                                                    // variant={this.state.variants[index]}
                                                    variant="outlined"
                                                    disabled={this.state.disable[index]}
                                                    key={index}
                                                    onClick={() => this.check(word, index)}
                                                >
                                                    <span style={{
                                                        fontSize: 12
                                                    }}>{word}</span>
                                                </Button>
                                            </Col>
                                        ))
                                    }

                                </Row>
                            </Col>
                        </Row>
                        <Row style={{height: 50}}>
                            <Col md-offset="2" md="8">
                                {
                                    this.state.isAnswer ? (
                                        <Button
                                            variant="outlined"
                                            onClick={() => this.getWord()}
                                            style={{
                                                width: '100%'
                                            }}
                                        >
                                            Next
                                        </Button>
                                    ) : null
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col md-offset="5" md="2" style={{
                                // textAlign: 'center'
                                marginLeft: 192,
                            }}>
                                <div style={{
                                    // borderRadius: '5px',
                                    // border: '1px solid #cccccc',

                                }}>
                                    <b><span style={{color: ''}}>{this.state.countOfСorrect}</span> / <span style={{color: ''}}>{this.state.countOfAttempt}</span></b>
                                </div>
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
