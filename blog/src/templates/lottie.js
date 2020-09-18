import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./33187-rabbit-in-a-hat.json";

export default class LottieWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: true, isPaused: false };
  }

  render() {
    const buttonStyle = {
      margin: "10px",
    };

    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
        <button
          className={"standard"}
          style={buttonStyle}
          onClick={() => this.setState({ isStopped: true })}
        >
          stop
        </button>
        <button
          className={"standard"}
          style={buttonStyle}
          onClick={() => this.setState({ isStopped: false, isPaused: false })}
        >
          play
        </button>
        <button
          className={"standard"}
          style={buttonStyle}
          onClick={() => this.setState({ isPaused: !this.state.isPaused })}
        >
          pause
        </button>
      </div>
    );
  }
}
