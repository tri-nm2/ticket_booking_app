import React, { Component } from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import Style from './SeatSelection.module.css'
import Footer from './Footer/Footer'

export class SeatSelection extends Component {
  render() {
    return (
      <div className={Style.main}>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default SeatSelection