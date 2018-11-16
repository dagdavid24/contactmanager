import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  //   componentWillMount() {
  //     console.log('component will mount');
  //   }

  //   componentDidUpdate() {
  //     console.log('component did update');
  //   }

  //   componentWillUpdate() {
  //     console.log('comp will update');
  //   }

  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log('will receive stuff');
  //   }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <p>{title}</p>
      </div>
    );
  }
}

export default Test;
