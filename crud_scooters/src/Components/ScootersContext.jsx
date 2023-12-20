import { createContext, useReducer, useEffect, useState } from "react";
import scootersReducer from "../Reducers/scootersReducer";
import {
  createScootersList,
  getScootersList,
  deleteScootersList,
  editScootersList,
  filterKmScootersList,
  filterDateScootersList,
} from "../Actions/scootersActions";
import { v4 as uuidv4 } from "uuid";

export const ScootersContext = createContext();

export const ScootersProvider = ({ children }) => {
  const [scootersList, dispachScootersList] = useReducer(scootersReducer, []);
  const [edit, setEdit] = useState(null);

  const getAllKm = (scootersListArray) => {
    let km = 0;
    for (let i = 0; i < scootersListArray.length; i++) {
      km += +scootersListArray[i].totalRideKilometres;
    }
    return km.toFixed(2);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const string = uuidv4();

    const item = {
      // id: scootersList.length + 1,
      id: parseInt(Math.random().toString().slice(3)),
      registrationCode: string.slice(0, 8),
      isBusy: 1,
      lastUseTime: e.target[0].value,
      totalRideKilometres: (+e.target[1].value).toFixed(2),
      showKm: true,
      showDate: true,
    };
    if (item) {
      dispachScootersList(createScootersList(item));
    }
  };

  const handleDelete = (e) => {
    const id = +e.target.id;
    dispachScootersList(deleteScootersList(id));
    console.log(id);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(null);
    const editItem = {
      id: +e.target.id,
      date: e.target[0].value,
      km: e.target[1].value,
      busy: e.target[2].checked === true ? 0 : 1,
    };
    if (editItem) {
      dispachScootersList(editScootersList(editItem));
    }
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      dispachScootersList(getScootersList(data));
    }
  }, []);

  const handleFilterKm = (e) => {
    const filterValue = +e.target.value;
    if (filterValue) {
      dispachScootersList(filterKmScootersList(filterValue));
    }
  };

  const handleFilterDate = (e) => {
    const filterValue = e.target.value;
    if (filterValue) {
      dispachScootersList(filterDateScootersList(filterValue));
    }
  };

  const handleFilterDateReset = () => {
    const filterValue = 0;
    dispachScootersList(filterDateScootersList(filterValue));
  };

  return (
    <ScootersContext.Provider
      value={{
        handleFormSubmit,
        scootersList,
        handleDelete,
        setEdit,
        edit,
        handleEdit,
        getAllKm,
        handleFilterKm,
        handleFilterDate,
        handleFilterDateReset,
      }}
    >
      {children}
    </ScootersContext.Provider>
  );
};
