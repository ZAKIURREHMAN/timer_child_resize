import React, { Component } from 'react'
import Child1 from './Child/Child1'
import Sibiling from './Child/Sibiling'
export default class Parent extends Component {
    constructor(props){
        super(props)
        this.state = {
            val:'This is Prent component where data come from Child',
        }
    }
    GetDataFromChild = (newDatas)=>{
      this.setState({val:newDatas})
    }
  render() {
    return (
      <div>
        {this.state.val}
        <Child1 ChildData = {this.GetDataFromChild} />
        <Sibiling Sibilingdata = {this.state.val} />
      </div>
    )
  }
}
