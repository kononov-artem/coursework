import {Component} from "react";
import React from "react";


class SimpleItem extends Component {
    render() {
        return (
            <div
                className="item"
                onClick={this.props.onClick}
                style={{
                    width: '20px',
                    height: '20px',
                    'backgroundColor': 'red',
                    // margin: '3px',
                    'borderRadius': '10px',
                    'textAlign': 'center',
                    cursor: 'pointer',
                    display: 'inline-block'
                }}
            >
                {this.props.item.name}
            </div>
        )
    }
}
// var DragItem = Item
export default SimpleItem;

// export default DragSource('item', itemSource, collect)(Item);
