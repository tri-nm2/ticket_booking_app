const initState = {
  userInfo: {},
  isConfirm: false,
  disableInput: false,
};

const reducer = (state = initState, action) => {
  let newUserInfo = { ...state.userInfo };
  let newIsConfirm = state.isConfirm;
  let newDisableInput = state.disableInput;
  switch (action.type) {
    case "ADD_USERINFO":
      newUserInfo = action.payload.data;
      newDisableInput = action.payload.value;
      return { ...state, userInfo: newUserInfo, disableInput: newDisableInput };
    case "UPDATE_USER_SEATLIST":
      const index = newUserInfo.seatList.findIndex(
        (item) => item === action.payload.seatId
      );
      if (index === -1) {
        newUserInfo.seatList.push(action.payload.seatId);
      } else {
        newUserInfo.seatList.splice(index, 1);
      }

      return { ...state };
    case "UPDATE_CONFIRM":
      newIsConfirm = action.payload.value;
      return { ...state, isConfirm: newIsConfirm };
    default:
      return state;
  }
};

export default reducer;
