import React, { Component } from 'react'

export class Cart extends Component {
  render() {
    const {name} = this.props
    return (
      <div className="min-image">
        <img src={require(`./img/${name}.jpg`)} alt={name}/>
      </div>
    )
  }
}

export default Cart
