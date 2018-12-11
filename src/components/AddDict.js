import React from 'react';
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField/TextField";
import * as ReactDOM from "react-dom";


class AddDict extends React.Component {
    constructor(props){
        super(props)
        this.dictName = props.match.params.name
        this.state = {
            words: [{original: "", translate: ""}],
        }
        this.nameInput = []
        this.count = 1
        this.pairInput = []
    }

    loadData() {
        var data = [{
                'dictionary': {
                    'create_new': 'true',
                    'name': this.state.name,
                    'language': this.state.language,
                    'language_to': this.state.language_to,
                    'words': this.state.words,
                }
            }];
        console.log(data)
        fetch('http://localhost:8000/dictionaries/json/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
    }

    handleChange = name => event => {
        // console.log({ [name]: event.target.value })
        this.setState({ [name]: event.target.value })
      };

    createUI(){
        var count = 0
     return this.state.words.map((el, i) => (
         <Row key={i}>
              <Col md="5">
                  <TextField
                      id="standard-name"
                      label="Original"
                      name="original"
                      value={el.original ||''}
                      onChange={this.handleChange2.bind(this, i)}
                    onKeyPress={this._handleKeyPress.bind(this, i, count)}
                      inputRef={(input) => { this.pairInput[i] = input }}
                      margin="normal"
                    />
              </Col>
              <Col md="5">
                  <TextField
                      id="standard-name"
                      label="Translate"
                      name='translate'
                      value={el.translate ||''}
                    onKeyPress={this._handleKeyPress.bind(this, i, count)}
                      // inputRef={(input) => { this.pairInput[i*2+1] = input }}
                      onChange={this.handleChange2.bind(this, i)}
                      margin="normal"
                    />
              </Col>
             <Col md="2">
                 <Button variant="contained" color="secondary" onClick={this.removeClick.bind(this, i)}>
                    Delete
                  </Button>
             </Col>
          </Row>
     ))
  }

  handleChange2(i, e) {
     const { name, value } = e.target;
     let words = [...this.state.words];
     words[i] = {...words[i], [name]: value};
     this.setState({ words });
     if ((this.state.words[i].translate !== "") && (this.state.words[i].translate_to !== "") && (words.length - 1 === i)) {
       this.addClick.bind(this)()
     }
  }

  addClick(){
    this.setState(prevState => ({
    	words: [...prevState.words, { original: "", translate: "" }]
    }))
  }

  removeClick(i){
     let words = [...this.state.words];
     words.splice(i, 1);
     this.setState({ words });
  }

    push() {
        // console.log(this.state)
        this.loadData()
    }

    _handleKeyPress = (i, count, e) => {
    if (e.key === 'Enter') {
      if ((this.state.words[i].translate !== "") && (this.state.words[i].translate_to !== "")) {
          // this.addClick.bind(this)()
          this.pairInput[i+1].focus()
      }
      // } else if (this.state.words[i].translate === "") {
      //     this.pairInput[i].focus()
      // } else if (this.state.words[i].translate === "") {
      //     this.pairInput[i].focus()
      // }
    }
  }

  componentDidMount(){
    this.nameInput[0].focus();
    // console.log(ReactDOM.findDOMNode(this.nameInput[0]))
  }

    _handleKeyPress3(e) {
        if (e.key === 'Enter') {
            this.nameInput[this.count++].focus();
        }
    }

  render() {
    return (
      <div>
          <Row>
            <Col md="12">
                <h1 className="mui--text-center">Add Dict</h1>
            </Col>
        </Row>
          <Row>
              <Col md="12">
                  <TextField
                  id="filled-uncontrolled"
                  label="Name"
                  defaultValue=""
                  onChange={this.handleChange('name')}
                  inputRef={(input) => { this.nameInput[0] = input }}
                  onKeyPress={this._handleKeyPress3.bind(this)}
                  margin="normal"
                  variant="filled"
                />
              </Col>

          </Row>
          <Row>
              <Col md="6">
                <TextField
                  id="outlined-uncontrolled"
                  label="Language"
                  defaultValue=""
                  onChange={this.handleChange('language')}
                  inputRef={(input) => { this.nameInput[1] = input }}
                  onKeyPress={this._handleKeyPress3.bind(this)}
                  margin="normal"
                  variant="outlined"
                />
              </Col>
              <Col md="6">
                <TextField
                  id="outlined-uncontrolled"
                  label="Language to"
                  defaultValue=""
                    onChange={this.handleChange('language_to')}
                  inputRef={(input) => { this.nameInput[2] = input }}
                  onKeyPress={this._handleKeyPress3.bind(this)}
                  margin="normal"
                  variant="outlined"
                />

              </Col>
          </Row>

          {this.createUI()}
            <Button variant="contained" color="primary" onClick={this.addClick.bind(this)}>Add pair</Button>
            <Button variant="contained" color="primary" onClick={this.push.bind(this)}>Push</Button>

     </div>
    );
  }
}

export default AddDict;
