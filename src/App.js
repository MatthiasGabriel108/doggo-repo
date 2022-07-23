import React, {Component} from "react";
import axios from "axios";
import App from "./App.css";

export class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return(
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>)
  }
}

export class EssayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Write an essay about love.',
      new: 'value',
      another: 'new_value',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
    debugger;
  }
  
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export class CreateComment extends Component {
  render() {
    return(
      <div>
        <h1>Hello Comment</h1>
      </div>
    )
  }
}

export class PostRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            joke: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      fetch('https://random.dog/woof.json')
            .then(response => response.json())
            .then(data => this.setState({ 
              joke: data.url,
            }));
    }

    render() {
        return (
          <form >
            <div className="App-header">
                <img style={{height: 800, width: 600}} src={this.state.joke}/>
                <button type="submit" onClick={this.handleSubmit}>
                  Brighten Up Your Day 🐶
                </button>
            </div>
          </form>
        );
        
    }
}