import React, { Component } from 'react'

export default class Child1 extends Component {
    constructor(props){
        super(props)
    }
     ChangeData = (e)=>{
        let childvalue = e.target.value;
        this.props.ChildData(childvalue)
    }
  render() {
    return (
      <div>
        <h2>This Input field is presend in Child Component</h2>
        <input type="text" placeholder='Enter Your Data' onChange={this.ChangeData} />
      </div>
    )
  }
}
