import React, { Component } from 'react';

class Test extends Component {
  componentDidMount() {
    console.log('component did mount');
  }

  componentWillMount() {
    console.log('component will mount');
  }

  componentDidUpdate() {
    console.log('component did update');
  }

  componentWillUpdate() {
    console.log('comp will update');
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('will receive stuff');
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
