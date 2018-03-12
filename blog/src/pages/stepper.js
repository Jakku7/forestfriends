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
    this.keyAction = this.keyAction.bind(this);
    this.errorHandler = this.errorHandler.bind(this);
    this.state = {
      activeStep: 0,
      stepContent: [], 
      error: 'none',
    };
  }

  moveUpAndDown = (n) => {
      if (this.props.data.allStrapiStep.edges.length > this.state.activeStep + 1 && this.state.error !== 'block') {
        this.setState({
          activeStep: n,
        });
    }
  };
    
  keyAction = (myState) => (e) => {
    if (e.keyCode == 13) {
      if (myState === '' || e.target.value === null || e.target.value === '') {
        this.setState({
          error: 'block',
      })} else {
        this.setState({
          error: 'none',    
        })
        this.addToTank(1, myState);
      }    
    };
  }
  
  /* zajac sie tym error handlerem zeby uruchamial sie za kazdym razem gdy nie ma contentu w funkcji moveanddown */ 
  
  errorHandler = () => {
      this.setState({
          error: 'block',
      })
  }

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
          return <Radio stepnr={this.state.activeStep} cont={this.props.data.allStrapiStep.edges[this.state.activeStep].node.options} funk={this.addToTank} />
      } else if (myType === "Thankyou") {
          return <Thankyou stepnr={this.state.activeStep} cont={this.props.data.allStrapiStep.edges[this.state.activeStep].node.options} funk={this.addToTank} />
      } else if (myType === "Input") {
          return <Input stepnr={this.state.activeStep} error={this.state.error} cont={this.props.data.allStrapiStep.edges[this.state.activeStep].node.options} funk={this.addToTank} stt={this.state.stepContent} keyPress={this.keyAction} errorHandler={this.errorHandler} />
      } else if (myType === "Dropdown") {
          return <Dropdown stepnr={this.state.activeStep} cont={this.props.data.allStrapiStep.edges[this.state.activeStep].node.options} funk={this.addToTank} />
      } else if (myType === "Textfield") {
          return <Textfield stepnr={this.state.activeStep} cont={this.props.data.allStrapiStep.edges[this.state.activeStep].node.options} funk={this.addToTank} />
      } else if (myType === "Checkbox") {
          return <Checkboxes stepnr={this.state.activeStep} cont={this.props.data.allStrapiStep.edges[this.state.activeStep].node.options} funk={this.addToTank} />
      } else if (myType === "Results") {
          return <Results stepnr={this.state.activeStep} stt={this.state.stepContent} cont={this.props.data.allStrapiStep.edges[this.state.activeStep].node.options} />
      } else {
          return <div><p>Have you written down type name correctly?</p></div>
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