import { useContext, useState, useEffect } from "react";
import { ScootersContext } from "./ScootersContext";
export default function Edit() {
  const { setEdit, edit, scootersList, handleEdit } =
    useContext(ScootersContext);

  const [check, setCheck] = useState();

  useEffect(() => {
    setCheck(
      scootersList.filter((scootersListObj) => scootersListObj.id === edit)[0]
        .isBusy === 0
        ? true
        : false
    );
  }, [scootersList, edit]);

  return (
    <div className="moduleEdit">
      <form
        id={edit}
        className="moduleEdit__card"
        onSubmit={(e) => handleEdit(e)}
      >
        <p className="close" onClick={() => setEdit(null)}>
          x
        </p>
        <p>
          Registration Code:{" "}
          {
            scootersList.filter(
              (scootersListObj) => scootersListObj.id === edit
            )[0].registrationCode
          }
        </p>
        <label>
          Last Use Time:{" "}
          {
            scootersList.filter(
              (scootersListObj) => scootersListObj.id === edit
            )[0].lastUseTime
          }
        </label>
        <input
          type="date"
          name="lastUseTime"
          min={new Date().toJSON().slice(0, 10)}
        />
        <label>
          Total Ride Kilometres:{" "}
          {
            scootersList.filter(
              (scootersListObj) => scootersListObj.id === edit
            )[0].totalRideKilometres
          }{" "}
          KM
        </label>
        <input
          type="number"
          name="totalRideKilometres"
          placeholder="Rided KM today"
        />
        <div className="checkbox">
          <label>Is busy?</label>
          <input
            checked={check}
            className="ckeckbox_check"
            type="checkBox"
            onChange={(e) => setCheck(e.target.checked)}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    </div>
  );
}
