import React, { Component } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import Style from "./SeatList.module.css";

export class SeatList extends Component {
  seatCount = 0;

  handleChange(seatId, rowId, checked) {
    const numberOfSeat = this.props.userInfo.numberOfSeat;

    if (checked) {
      this.seatCount++;
    } else {
      this.seatCount--;
    }

    if (this.seatCount === numberOfSeat && checked) {
      const action = {
        type: "UPDATE_ISDISABLE",
        payload: {
          value: true,
        },
      };

      this.props.dispatch(action);
    } else if (!checked) {
      const action = {
        type: "UPDATE_ISDISABLE",
        payload: {
          value: false,
        },
      };

      this.props.dispatch(action);
    }

    const action1 = {
      type: "SELECT_SEAT",
      payload: {
        seatId: seatId,
        rowId: rowId,
      },
    };

    this.props.dispatch(action1);

    const action2 = {
      type: "UPDATE_USER_SEATLIST",
      payload: {
        seatId: seatId,
      },
    };

    this.props.dispatch(action2);

    console.log(this.seatCount);
  }

  renderSeatList() {
    const tag = this.props.seatList.map((seat) => {
      if (seat.hang !== "") {
        return (
          <tr key={seat.hang}>
            <td>{seat.hang}</td>
            {seat.danhSachGhe.map((item) => {
              return (
                <td key={item.soGhe}>
                  <input
                    type="checkbox"
                    className={clsx(
                      Style.seat,
                      { [Style.reserveSeat]: item.daDat },
                      { [Style.selectedSeat]: item.isSelected }
                    )}
                    value={item.soGhe}
                    data-rowid={seat.hang}
                    disabled={
                      (!item.isSelected && this.props.isDisable) || item.daDat
                    }
                    onChange={(e) => {
                      this.handleChange(
                        e.target.value,
                        e.target.getAttribute("data-rowid"),
                        e.target.checked
                      );
                    }}
                  ></input>
                </td>
              );
            })}
          </tr>
        );
      } else return null;
    });

    return tag;
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td />
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
            </tr>
            {this.renderSeatList()}
          </tbody>
        </table>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    seatList: state.seats.seatList,
    isDisable: state.seats.isDisable,
    userInfo: state.user.userInfo,
  };
};

export default connect(mapStateToProps)(SeatList);
