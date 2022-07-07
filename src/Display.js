import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <div className='image_container'>
          <img src={this.props.images} alt="abc"/>
      </div>
    )
  }
}
