import React, { Component, createRef } from "react";
import Style from "./Header.module.css";
import { connect } from "react-redux";

export class Header extends Component {
  txtName = createRef();
  txtNumberOfSeat = createRef();

  handleClick() {
    if (!this.txtName.current.value) {
      alert("Name is required");
      return;
    }
    if (!this.txtNumberOfSeat.current.value) {
      alert("Number of seats is required");
      return;
    }

    const userName = this.txtName.current.value;
    const numberOfSeat = +this.txtNumberOfSeat.current.value;
    const userInfo = {
      userName: userName,
      numberOfSeat: numberOfSeat,
      seatList: [],
    };
    const action1 = {
      type: "ADD_USERINFO",
      payload: {
        data: userInfo,
        value: true,
      },
    };
    this.props.dispatch(action1);

    const action2 = {
      type: "UPDATE_ISDISABLE",
      payload: {
        value: false,
      },
    };

    this.props.dispatch(action2);
  }

  render() {
    return (
      <div className={Style.header}>
        <h2>Fill The Required Details Below And Select Your Seats</h2>
        <div className={Style.input}>
          <div className={Style.name}>
            <label>
              Name<span>*</span>
            </label>
            <input
              type="text"
              ref={this.txtName}
              disabled={this.props.disableInput}
            ></input>
          </div>
          <div className={Style.numberOfSeats}>
            <label>
              Number of Seats<span>*</span>
            </label>
            <input
              type="number"
              min="1"
              ref={this.txtNumberOfSeat}
              disabled={this.props.disableInput}
            ></input>
          </div>
        </div>
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          Start Selecting
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.user.userInfo,
    isDisable: state.seats.isDisable,
    disableInput: state.user.disableInput,
  };
};

export default connect(mapStateToProps)(Header);
