import React, { Component } from "react";
import Style from "./Body.module.css";
import SeatList from "./SeatList/SeatList";
import { connect } from "react-redux";

export class Body extends Component {
  handleClick() {
    const action1 = {
      type: "UPDATE_CONFIRM",
      payload: {
        value: true,
      },
    }

    this.props.dispatch(action1);

    const action2 = {
      type: "CONFIRMED_SEATS",
      payload: {},
    }

    this.props.dispatch(action2);
  }

  render() {
    return (
      <div className={Style.seats}>
        <div className={Style.info}>
          <ul>
            <li className={Style.select}>Selected Seat</li>
            <li className={Style.reserve}>Reserved Seat</li>
            <li className={Style.empty}>Empty Seat</li>
          </ul>
        </div>

        <div className={Style.structure}>
          <p></p>
          <SeatList />
        </div>

        <div className={Style.screen}>
          <h2>SCREEN THIS WAY</h2>
        </div>

        <button onClick={() => {this.handleClick()}}>Confirm Selection</button>
      </div>
    );
  }
}

export default connect()(Body);
