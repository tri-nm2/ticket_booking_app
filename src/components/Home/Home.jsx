import React, { Component } from "react";
import Style from "./Home.module.css";
import SeatSelection from "./SeatSelection/SeatSelection";
import Data from "../../assets/data/danhSachGhe.json";
import { connect } from "react-redux";

export class Home extends Component {
  render() {
    return (
      <div className={Style.home}>
        <h1>MOVIE SEAT SELECTION</h1>
        <SeatSelection />
        <p>
          © 2018 Movie Seat Selection . All Rights Reserved | Design by
          W3layouts
        </p>
      </div>
    );
  }

  fetchData() {
    const result = Data.map((item) => {
      const seatList = item.danhSachGhe.map((seat) => {
        return { ...seat, isSelected: false };
      });

      return { ...item, danhSachGhe: seatList };
    });

    const action = {
      type: "ADD_SEATLIST",
      payload: {
        data: result,
      },
    };

    this.props.dispatch(action);
  }

  componentDidMount() {
    this.fetchData();
  }
}

export default connect()(Home);
