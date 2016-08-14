import React, { Component } from 'react'
import {grey50, grey200, grey800} from 'material-ui/styles/colors'

const footerStyle = {
  color: grey200,
  backgroundColor: grey800,
  padding: '72px 24px 72px 24px',
  boxSizing: 'border-box',
  textAlign: 'center'
}

export default class Footer extends Component {
  render () {
    const ReactLink = (
      <a href='https://facebook.github.io/react/' style={{color: grey50}}>React</a>
    )
    const MaterialUILink = (
      <a href='https://github.com/callemall/material-ui' style={{color: grey50}}>Material UI</a>
    )
    const MobxLink = (
      <a href='https://github.com/mobxjs/mobx' style={{color: grey50}}>MobX</a>
    )
    const MexenizLink = (
      <a href='https://github.com/mexeniz' style={{color: grey50}}>Mexeniz</a>
    )

    return (
      <div className='footer' style={footerStyle}>
        <p>Get graduates' location and take photos with them :)</p>
        <p>Powered by {ReactLink} {MaterialUILink} {MobxLink}</p>
        <p>Created by {MexenizLink}</p>
      </div>
    )
  }
}
