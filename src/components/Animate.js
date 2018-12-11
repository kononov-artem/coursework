import React from 'react';
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          name:''
        };
        this.add = this.add.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange(e){
        this.setState({name:e.target.value})
    }

    add(){
        var arr = this.state.data.slice();
        arr.push({'id':(new Date()).getTime(),'name':this.state.name})
        this.setState({data:arr})
    }

    delete() {
        // console.log(this.state.data)
        var arr = this.state.data
        arr.pop()
        this.setState({data: arr})
    }

  render() {
    return (
        <div>
            <div>
                Enter Name <input onChange={this.handleChange} type="text" /> <input onClick={this.add} type="button" value="Add" />
            </div>
            <ul>
        <ReactCSSTransitionGroup transitionName="anim" transitionAppear={false} transitionEnterTimeout={1000} transitionLeaveTimeout={1000} transitionEnter={true} transitionLeave={true}>
        {
          this.state.data.map(function(player) {
             return <li onClick={this.delete.bind(this)} key={player.id}>{player.name}</li>
          }.bind(this))
        }
        </ReactCSSTransitionGroup>
        </ul>
         </div>
    );
  }
}

export default Home;
