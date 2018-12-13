import React from 'react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

class Loading extends React.Component {
    constructor(props) {
        super(props)
        this.words = [
            'Hello',
            'Привет',
            'Al Salaam a’alaykum',
            'Barev',
            'Zdraveite',
            'Nei Hou',
            'Bok',
            'Dobry den',
            'Goddag',
            'Hallo',
            'Tere',
            'Terve',
            'Bonjour',
            'Guten Tag',
            'Kalimera',
            'Aloha',
            'Shalom',
            'Hallo',
            'Buon giorno',
            'Konnichiwa',
            'Annyong ha shimnikka',
            'Labas',
            'Ni Hao',
            'Ba’ax ka wa’alik',
            'Sekoh',
            'God dag',
            'Selam',
            'Czesc',
            'Oi',
            'Buna ziua',
            'Привет',
            'Zdravo',
            'Zdravo',
            'Hola',
            'God dag',
            'Merhaba',
            'Привіт',
        ]
        this.do()
    }

    state = {
        word: 'Привет'
    }

    do = () => {
        var i = 0
        setInterval(() => {
            if (i >= this.words.length) {
                i = 0
            }
            this.setState({word: this.words[i]});
            i++
        }, this.props.interval)
    }

    render() {
        return (
            <Row>
                <Col md="12">
                    <h1>{this.state.word}</h1>
                </Col>
            </Row>
        );
    }
}

export default Loading;
