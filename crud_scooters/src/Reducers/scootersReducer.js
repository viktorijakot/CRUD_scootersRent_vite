import * as types from "../Constants/actionTypes";

export default function scootersReducer(state, action) {
  let s = [...state];
  switch (action.type) {
    case types.CREATE_SCOOTERS_LIST:
      s.push(action.payload);
      localStorage.setItem("data", JSON.stringify(s));
      break;
    case types.GET_SCOOTERS_LIST:
      s = action.payload;
      break;
    case types.DELETE_SCOOTERS_LIST:
      s = s.filter((sObj) => sObj.id !== action.payload);
      localStorage.setItem("data", JSON.stringify(s));
      break;
    case types.EDIT_SCOOTERS_LIST:
      s = s.map((sObj) =>
        sObj.id === action.payload.id
          ? {
              ...sObj,
              lastUseTime: action.payload.date,
              isBusy: action.payload.busy,
              totalRideKilometres: (
                +sObj.totalRideKilometres + +action.payload.km
              ).toFixed(2),
            }
          : sObj
      );
      localStorage.setItem("data", JSON.stringify(s));
      break;
    default:
      break;
  }
  return s;
}
