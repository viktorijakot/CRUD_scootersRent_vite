import * as types from "../Constants/actionTypes";

export function createScootersList(item) {
  return {
    type: types.CREATE_SCOOTERS_LIST,
    payload: item,
  };
}

export function getScootersList(list) {
  return {
    type: types.GET_SCOOTERS_LIST,
    payload: list,
  };
}

export function deleteScootersList(id) {
  return {
    type: types.DELETE_SCOOTERS_LIST,
    payload: id,
  };
}

export function editScootersList(editItem) {
  return {
    type: types.EDIT_SCOOTERS_LIST,
    payload: editItem,
  };
}

export function filterKmScootersList(km) {
  return {
    type: types.FILTER_KM_SCOOTERS_LIST,
    payload: km,
  };
}

export function filterDateScootersList(date) {
  return {
    type: types.FILTER_DATE_SCOOTERS_LIST,
    payload: date,
  };
}
