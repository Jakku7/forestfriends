import React from 'react'
import Link from 'gatsby-link'

import Banner from '../templates/banner.js'
import Radio from '../templates/Steps/radio.js'
import Thankyou from '../templates/Steps/thankyou.js'
import Input from '../templates/Steps/input.js'
import Dropdown from '../templates/Steps/dropdown.js'
import Textfield from '../templates/Steps/textfield.js'
import Checkboxes from '../templates/Steps/checkboxes.js'
import Results from '../templates/Steps/results.js'

import './stepper.css'

import monkey from '../img/monkey.png'
import fish2 from '../img/fish2.png'

export default class Stepper extends React.Component {
  constructor(props) {
    super(props);
    this.moveUpAndDown = this.moveUpAndDown.bind(this);
    this.addToTank = this.addToTank.bind(this);
    this.refresh = this.refresh.bind(this);
    this.renderModule = this.renderModule.bind(this);
    this.state = {
      activeStep: 0,
      stepContent: [], 
    };
  }

  moveUpAndDown = (n) => {
      if (this.props.data.allStrapiStep.edges.length > this.state.activeStep + 1) {
        this.setState({
          activeStep: n,
        });
    }
  };
    
  addToTank = (n, value) => {
    if (this.props.data.allStrapiStep.edges.length > this.state.activeStep + 1) {
    this.setState({
      activeStep: this.state.activeStep + n,
      stepContent: [...this.state.stepContent, this.state.activeStep + 1 + ". " + value]
    }, function(){console.log(this.state.stepContent)})}
  };
    
  refresh = () => {
    window.location.reload();
  };  
    
  renderModule = () => {
      const myType = this.props.data.allStrapiStep.edges[this.state.activeStep].node.type; 
      if (myType === "Radio") {
          return <Radio cont={this.props.data.allStrapiStep.edges[this.state.activeStep].node.options} funk={this.addToTank} />
      } else if (myType === "Thankyou") {
          return <Thankyou cont={this.props.data.allStrapiStep.edges[this.state.activeStep].node.options} funk={this.addToTank} />
      } else if (myType === "Input") {
          return <Input cont={this.props.data.allStrapiStep.edges[this.state.activeStep].node.options} funk={this.addToTank} />
      } else if (myType === "Dropdown") {
          return <Dropdown cont={this.props.data.allStrapiStep.edges[this.state.activeStep].node.options} funk={this.addToTank} />
      } else if (myType === "Textfield") {
          return <Textfield cont={this.props.data.allStrapiStep.edges[this.state.activeStep].node.options} funk={this.addToTank} />
      } else if (myType === "Checkbox") {
          return <Checkboxes cont={this.props.data.allStrapiStep.edges[this.state.activeStep].node.options} funk={this.addToTank} />
      } else if (myType === "Results") {
          return <Results stt={this.state.stepContent} cont={this.props.data.allStrapiStep.edges[this.state.activeStep].node.options} />
      } else {
          return <div><p>Have you wrote down type name correctly?</p></div>
      }
  }

  render() {
    const arr = this.props.data.allStrapiStep.edges[this.state.activeStep].node.options;
    const myType = this.props.data.allStrapiStep.edges[this.state.activeStep].node.type; 
    return (
    <div>
        <div className={"steppercontainer"}>
          <div className={"steps"}>
            <div className={"header"}>
              <h2>
                {this.props.data.allStrapiStep.edges[this.state.activeStep].node.title}
              </h2>
               <button onClick={() => this.moveUpAndDown(this.state.activeStep !== 0 ? this.state.activeStep - 1 : 0)} className={(myType === "Thankyou") ? "dNone" : "standard"}>Back</button>
               <button onClick={this.refresh} className={"standard"}>Start Again</button>
               <button onClick={() => this.moveUpAndDown(this.state.activeStep + 1)} className={(myType === "Thankyou") ? "dNone" : "standard"}>Next</button>
               <img src={monkey} alt={"monkey"} title={"monkey"} className={"monkey"}/>
            </div> 
            <div className={"mainbody"}>
                <p className={(myType === "Thankyou") ? "notes" : "notes"}>{this.props.data.allStrapiStep.edges[this.state.activeStep].node.description}</p>
            </div>    
            <div>{this.renderModule()}</div>
            <div>
                <div>
                    <p className={"notes"}>All your choices are landing in the fish tank, so till the last step you can check what you chose:
                    </p>
                </div>
                <div className={"tankcontainer"}>
                    <div className={"chips"}><p>{this.state.stepContent.length === 0 ? <span>tank is empty :(</span> : this.state.stepContent.map(item => <span key={item}>{item.substring(2)}</span>)}</p></div>
                    <div className={"image"}><img src={fish2} alt={"fish"} title={"fish"} className={"fish"}/></div>
                </div>
            </div>    
        </div>
        </div>
    </div>
    ); 
  }
}

export const stepsQuery = graphql`  
  query stepQuery {
    allStrapiStep {
      edges {
        node {
          id
          title
          description
          options
          type
        }
      }
    }
  }
`