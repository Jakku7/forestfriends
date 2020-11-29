import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./drivingCar.json";

export default class LottieWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: true, isPaused: false };
  }

  render() {
    const buttonStyle = {
      margin: "10px",
      cursor: 'pointer',
    };

    const defaultOptions = {
      loop: true,
      autoplay: false,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
      eventListeners: [
        {
          eventName: 'complete',
          callback: () => console.log('the animation completed:'),
        },
      ]
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          speed={1}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
          complete={() => { console.log('test')}}
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
          onClick={() => this.setState({ isPaused: true })}
        >
          pause
        </button>
      </div>
    );
  }
}
