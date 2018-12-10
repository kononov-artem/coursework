import React from 'react';
import Button from "@material-ui/core/Button/Button";
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';


class Test extends React.Component {
    constructor(props) {
        super(props)
        this.item = [
            {original: 'hello', translate: 'привет'},
            {original: 'table', translate: 'стол'},
            {original: 'face', translate: 'лицо'},
            {original: 'book', translate: 'книга'},
            {original: 'key', translate: 'ключ'},
            {original: 'home', translate: 'дом'},
            {original: 'street', translate: 'улица'},
        ]
        this.count = 0
        this.state = {
            word: 'init',
            wrongWords: []
        }
    }

    getWord() {
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

    check(word) {
        console.log(word === this.state.translate)
        this.getWord()
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
                    <Col md="10" md-offset="2">
                    {
                        this.state.wrongWords.map((item, index) => (
                            <Button variant="contained" color="primary" key={index}
                                onClick={() => this.check(item)}
                            >
                                {item}
                            </Button>
                        ))
                    }
                    </Col>
                </Row>
            </Row>
        )
    }
}

export default Test;
