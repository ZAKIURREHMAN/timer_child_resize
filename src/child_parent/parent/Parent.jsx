import React, { Component } from 'react'
import Child from '../child/Child1'
import Simbling from '../simbling/Sibiling'
export default class Parent extends Component {
    constructor(props){
        super(props)
        this.state = {
            val:'This is Prent component where data come from Child',
        }
    }
    getDataFromChild(newDatas){
      this.setState({val:newDatas})
    }
  render() {
    return (
      <div>
        {this.state.val}
        <Child ChildData = {this.getDataFromChild} />
        <Simbling Sibilingdata = {this.state.val} />
      </div>
    )
  }
}
