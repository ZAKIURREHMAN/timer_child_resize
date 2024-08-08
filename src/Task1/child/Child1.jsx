import React, { Component } from 'react'

export default class Child1 extends Component {
    constructor(props){
        super(props)
    }
    changeData(e){
        let childvalue = e.target.value;
        this.props.changeData(childvalue)
    }
  render() {
    return (
      <div>
        <h2>This Input field is presend in Child Component</h2>
        <input type="text" placeholder='Enter Your Data' onChange={this.changeData} />
      </div>
    )
  }
}
