import React from 'react';

import Description from './Components/Description.jsx';
import Directions from './Components/Directions.jsx';
import Attributes from './Components/Attributes.jsx';
import Additional from './Components/Additional.jsx';
import axios from 'axios';
import { button } from './style.js';

class DescriptionService extends React.Component {
  constructor(props) {
    
    super(props);
    let initData;
    let initCurrent = props.initCurrent;

    if (props.initData) {
      initData = props.initData;
    } else {
      initData = window.__initData__;
      delete window.__initData__;
    }

    this.state = {
      current: initCurrent,
      data: initData,
    }

    this.changeModule = this.changeModule.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  
  //Proxy componentDidMount
  // componentDidMount() {

  //   const item = window.location.search.slice(2);

  //   // local address
  //   const address = 'http://localhost'

  //   // deployed address
  //   // const address = 'http://52.14.208.55';

  //   axios.get(`${address}:3002/descriptionObject/${item}`)
  //     .then(data => {
  //       console.log('success getting data in componentDidMount');
  //       var bullets = data.data.description.description.split('. ');
  //       data.data.description.description = bullets;

  //       this.setState({
  //         current: 'descriptionB',
  //         data: data.data
  //       });
  //       console.log('state: ', this.state);
  //     })
  //     .catch(err => {
  //       console.log('error getting descObj in componentDidMount: ', err);
  //     });
  // }

  changeModule(e) {
    var newState = e.target.id;
    this.setState({
      current: newState
    });
  }

  onMouseOver(e) {
    var element = document.getElementById(e.target.id);
    element.style.color = '#00395e';
  }

  onMouseOut(e) {
    var element = document.getElementById(e.target.id);
    element.style.color = '#005891';
  }


  render() {
    return (
      <div id='indexComponent'>
        <div id='buttons' style={{width: '875px', margin: '30px auto'}}>
          <span style={{marginLeft: '100px'}}>
          <button id='descriptionB' style={button}  onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseOut} onClick={this.changeModule}>Description</button>
          <button id='directionsB' style={button}  onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseOut} onClick={this.changeModule}>Directions</button>
          <button id='attributesB' style={button}  onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseOut} onClick={this.changeModule}>Attributes/Specifications</button>
          <button id='additionalB' style={button}  onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseOut} onClick={this.changeModule}>Additional Details</button>
          </span>
        </div>
        {this.state.current === 'descriptionB' && <Description description={this.state.data.description}/>}
        {this.state.current === 'directionsB' && <Directions directions={this.state.data.directions.directions}/>}
        {this.state.current === 'attributesB' && <Attributes attributes={this.state.data.attributes}/>}
        {this.state.current === 'additionalB' && <Additional additional={this.state.data.details.additionalDetails}/>}
      </div>
    )
  }
}

export default DescriptionService;
// ReactDOM.render(<DescriptionService />, document.getElementById('description'));