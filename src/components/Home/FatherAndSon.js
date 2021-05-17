import React, { Component } from "react";
import styled from "styled-components";


function FatherAndSon() {
  return (
    <AppWrapper>
      <div>
        <p>App watches the correspondence exchange between Father and Son</p>
        <Father></Father>
      </div>
    </AppWrapper>
  );
}

class Father extends Component {
  state = {
    letters: 0,
  };

  letterReciver = () => {
    this.setState({
      letters: this.state.letters + 1,
    });
  };
  render() {
    return (
      <div style={{ background: "grey", padding: "1rem" }}>
        <p>Father (reciving letters from Son)</p>
        <p>Letters recived from Son: {this.state.letters}</p>
        <Son letterReciver={this.letterReciver}></Son>
      </div>
    );
  }
}

class Son extends Component {
  state = {
    letters: 0,
  };

  handleSend = () => {
    this.setState({
      letters: this.state.letters + 1,
    });
    this.props.letterReciver();
  };
  render() {
    return (
      <div style={{ background: "lightgrey", padding: "1rem" }}>
        <p>Son (sending letters)</p>
        <button onClick={this.handleSend}>Send letter to Father</button>
        <p>Letters send to Father: {this.state.letters}</p>
      </div>
    );
  }
}

const AppWrapper = styled.div`
  height: 100%;
  background: darkgrey;
  padding: 5rem;

  button {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  @media (max-width: 500px) {
    padding: 1rem;
    button {
        font-size: 1rem;
    }
}
`;

export default FatherAndSon;
