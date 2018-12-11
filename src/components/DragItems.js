import {DragSource} from "react-dnd";
import SimpleItem from "./Item";
import {Component} from "react";
import React from "react";


const itemSource = {
    beginDrag(props) {
        return props.item
    },
    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return
        }
        return props.handleDrop(props.item.id);
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }
}

class Item extends Component {
    render() {
        const { isDragging, connectDragSource, item } = this.props;
        const opacity = isDragging ? 0 : 1
        return connectDragSource(
            <div
                className="item"
                onClick={this.props.onClick}
                style={{
                    width: '20px',
                    height: '20px',
                    'backgroundColor': 'blue',
                    margin: '3px',
                    'borderRadius': '10px',
                    'textAlign': 'center',
                    cursor: 'pointer',
                    opacity: opacity,
                    display: 'inline-block'
                }}
            >
                {this.props.item.name}
            </div>
        )
    }
}


export default DragSource('item', itemSource, collect)(Item);
