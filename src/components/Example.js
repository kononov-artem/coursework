import React, { Component } from 'react';

class Example extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: 1
        }
    }

    loadData() {
        var _this = this
        fetch('http://localhost:8000/dictionaries/get/?dictionary=dct_2', {
            headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            // 'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
            // 'Access-Control-Allow-Credentials': 'false'
            }
        })
        .then(function(response) {
            // console.log(response.headers.get('Dict-Type')); // application/json; charset=utf-8
            // console.log(response.status); // 200
            return response.json();
        })
        .then(answer => {
            console.log(answer.words)
            var i = 0;
            var t = 0;
            var g = 0;
            const listItems = answer.words.map((number) =>
                <p key={i++} >{answer.words[t++].original} to {answer.words[g++].translate}</p>
            );
            // for (var i = 0; i < data.words.length; i++) {
            //     console.log(data.words[i]);
            // }
            // data.map((dct, key) => console.log(dct, key))
            // for (var key in data) {
            //     console.log(key, data[key])
            // }
            // Object.keys(data).map((e, i) => {
            //     console.log(e, data[e])
            // });
            _this.setState({ data: answer, words: listItems })
        }).catch( console.log );
    }

    componentDidMount(){
        this.loadData()
    }

    render() {
        return (
            <div
                className="Example"
                style={{
                    backgroundColor: '#BDFFC2',
                    margin: '0 auto 0 auto',
                    width: '80%',
                    height: '80%',
                }}
            >
                <h1>{ this.state.data.name }</h1>
                <h3>Language</h3>
                <p>{ this.state.data.language } to { this.state.data.language_to }</p>
                <h3>Words</h3>
                { this.state.words }
                {/*{*/}
                    {/*Object.keys(this.state.data.words).map((i) =>  (*/}
                        {/*<li key={i}>*/}
                            {/*<p>{this.state.data.words[i]}</p>*/}
                        {/*</li>*/}
                    {/*))*/}
                {/*}*/}


                {/*{this.state.data.map((dct, key) => (*/}
                  {/*<li key={key}>*/}
                      {/*<p>{dct.name}</p>*/}
                      {/*<p>{dct.user}</p>*/}
                    {/*</li>*/}
                {/*))}*/}
                {/*<p>{ this.state.data }</p>*/}
            </div>
        );
    }
}

export default Example;
