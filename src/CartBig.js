import React, { Component } from 'react'

export class CartBig extends Component {
  render() {
      const {name} = this.props
    return (
        <React.Fragment>
       <img src={require(`./img/${name}-b.jpg`)} alt=""/>
       </React.Fragment>
    )
  }
}

export default CartBig
