const initState = { seatList: [], isDisable: true };

const reducer = (state = initState, action) => {
  let newSeatList = [...state.seatList];
  let newIsDisable = state.isDisable;
  switch (action.type) {
    case "ADD_SEATLIST":
      newSeatList = action.payload.data;
      return { ...state, seatList: newSeatList };
    case "SELECT_SEAT":
      const row = newSeatList.find(
        (item) => item.hang === action.payload.rowId
      );
      if (row) {
        let newSeat = row.danhSachGhe.find(
          (item) => item.soGhe === action.payload.seatId
        );

        if (newSeat) {
          if (newSeat.isSelected) {
            newSeat.isSelected = false;
          } else {
            newSeat.isSelected = true;
          }
        }
      }

      return { ...state, seatList: newSeatList };
    case "UPDATE_ISDISABLE":
      newIsDisable = action.payload.value;
      return { ...state, isDisable: newIsDisable };
    case "CONFIRMED_SEATS":
      newSeatList.forEach((item) => {
        item.danhSachGhe.forEach((seat) => {
          if (seat.isSelected) {
            seat.isSelected = false;
            seat.daDat = true;
          }
        });
      });
      return { ...state, seatList: newSeatList };
    default:
      return state;
  }
};

export default reducer;
