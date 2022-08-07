import React, { Component } from "react";
import Style from "./Footer.module.css";
import { connect } from "react-redux";

export class Footer extends Component {
  render() {
    console.log(this.props.userInfo);
    return (
      <div className={Style.footer}>
        <table width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Number of Seats</th>
              <th>Seats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <textarea
                  disabled
                  defaultValue={
                    this.props.isConfirm ? this.props.userInfo.userName : ""
                  }
                />
              </td>
              <td>
                <textarea
                  disabled
                  defaultValue={
                    this.props.isConfirm ? this.props.userInfo.numberOfSeat : ""
                  }
                />
              </td>
              <td>
                <textarea
                  disabled
                  defaultValue={
                    this.props.isConfirm ? this.props.userInfo.seatList : ""
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userInfo: state.user.userInfo, isConfirm: state.user.isConfirm };
};

export default connect(mapStateToProps)(Footer);
