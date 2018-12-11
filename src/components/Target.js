import {Component} from "react";
import React from "react";
import DropTarget from "react-dnd/lib/DropTarget";
import Item from "./Item";

function collect(connect, moinitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: moinitor.isOver(),
        item: moinitor.getItem(),
    }
}

class Target extends Component {
    render() {
        const { connectDropTarget, hovered, item } = this.props
        const backgroundColor =  hovered ? 'green': 'blue'
        return connectDropTarget(
            <div
                className="target"
                style={{
                    // 'width': '100px',
                    'minHeight': '100px',
                    'backgroundColor': backgroundColor,
                    margin: '3px',
                    'borderRadius': '10px',
                    'textAlign': 'center',
                    padding: '5px'
                }}
            >
                Target
                <div>
                    {
                        this.props.items.map((item, index) => (
                            <Item key={item.id} item={item}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default DropTarget('item', {}, collect)(Target);
