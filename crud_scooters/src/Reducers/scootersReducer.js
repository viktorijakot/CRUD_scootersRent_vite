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
    case types.FILTER_KM_SCOOTERS_LIST:
      if (action.payload === 1) {
        s = s.map((sObj) =>
          +sObj.totalRideKilometres === 0.0
            ? {
                ...sObj,
                showKm: true,
              }
            : {
                ...sObj,
                showKm: false,
              }
        );
      } else if (action.payload === 2) {
        s = s.map((sObj) =>
          +sObj.totalRideKilometres >= 0.0 && +sObj.totalRideKilometres < 50
            ? {
                ...sObj,
                showKm: true,
              }
            : {
                ...sObj,
                showKm: false,
              }
        );
      } else if (action.payload === 50) {
        s = s.map((sObj) =>
          +sObj.totalRideKilometres >= 50.0 && +sObj.totalRideKilometres < 100
            ? {
                ...sObj,
                showKm: true,
              }
            : {
                ...sObj,
                showKm: false,
              }
        );
      } else if (action.payload === 100) {
        s = s.map((sObj) =>
          +sObj.totalRideKilometres >= 100.0
            ? {
                ...sObj,
                showKm: true,
              }
            : {
                ...sObj,
                showKm: false,
              }
        );
      } else {
        s = s.map((sObj) => ({ ...sObj, showKm: true }));
      }
      break;
    case types.FILTER_DATE_SCOOTERS_LIST:
      if (typeof action.payload === "string") {
        s = s.map((sObj) =>
          sObj.lastUseTime === action.payload
            ? {
                ...sObj,
                showDate: true,
              }
            : {
                ...sObj,
                showDate: false,
              }
        );
      } else {
        s = s.map((sObj) => ({ ...sObj, showDate: true }));
      }
      break;
    default:
      break;
  }
  return s;
}
