import React, { Component } from 'react'

export default class Sibiling extends Component {
  render() {
    return (
      <div>
        <hr /><hr />
        <h3>This is sibilg Component </h3>
        {this.props.Sibilingdata}
      </div>
    )
  }
}
