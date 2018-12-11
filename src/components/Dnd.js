import React, { Component } from 'react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import Item from "./DragItems";
import Target from "./Target";


const word = 'table'


class Dnd extends Component {
    constructor(props) {
        super(props)
        this.toTarget.bind(this)
        this.state = {
            itemsForTarget: [],
            items: this.getShuffleWord(word),
        }
    }

    getShuffleWord(word) {
        let charts = []
        for (var i = 0; i < word.length; i++) {
            charts.push({id: i, name: word.charAt(i).toLowerCase()});
        }
        return this.shuffle(charts)
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
        return array;
    }

    deleteItem(id) {
        let items = [...this.state.items]
        const index = items.findIndex(item => item.id === id)
        items.splice(index, 1)
        this.setState({items: items})
    }

    putItemInTarget(id) {
        let items = [...this.state.items]
        const index = items.findIndex(item => item.id === id)
        let itemsForTarget = [...this.state.itemsForTarget]
        itemsForTarget.push(items[index])
        let _this = this
        this.setState({ itemsForTarget: itemsForTarget }, this.checkWords)
    }

    checkWords() {
        let newWord = [...this.state.itemsForTarget]
        let new_word = ''
        for (let i = 0; i < newWord.length; i++) {
            new_word = new_word + newWord[i].name
        }
        console.log(new_word === word)
    }

    toTarget(id) {
        this.putItemInTarget(id)
        this.deleteItem(id)
    }

    render() {
        return (
            <Row>
                <Col md="12">
                    <Row>
                        <Col md="3">
                            <Target items={this.state.itemsForTarget}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3">
                            {
                                this.state.items.map((item, index)=> (
                                    <Item key={item.id} item={item}
                                        onClick={() => this.toTarget(item.id)}
                                        handleDrop={(id) => {
                                            this.toTarget(id)
                                        }}

                                    />
                                ))
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default DragDropContext(HTML5Backend)(Dnd);
