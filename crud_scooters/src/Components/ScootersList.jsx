import { useContext } from "react";
import { ScootersContext } from "./ScootersContext";
import Edit from "./Edit";
export default function ScootersList() {
  const { scootersList, handleDelete, edit, setEdit } =
    useContext(ScootersContext);

  return (
    <div className="scootersList">
      {edit && <Edit />}
      {scootersList &&
        scootersList.map((scootersListObj) => (
          <div key={scootersListObj.id} className="scooter">
            <p>
              Scooter Id: <strong>{scootersListObj.id}</strong>
            </p>
            <p>
              Registration Code:{" "}
              <strong>{scootersListObj.registrationCode}</strong>
            </p>
            <p>
              Is Busy:{" "}
              <strong
                style={
                  scootersListObj.isBusy === 1
                    ? { color: "green" }
                    : { color: "crimson" }
                }
              >
                {scootersListObj.isBusy === 1 ? "NO" : "YES"}
              </strong>
            </p>
            <p>
              Last Use Time: <strong>{scootersListObj.lastUseTime}</strong>
            </p>
            <p>
              Total Ride Kilometres:{" "}
              <strong>{scootersListObj.totalRideKilometres}</strong> km
            </p>
            <div className="buttons">
              <button
                type="button"
                name="edit"
                id={scootersListObj.id}
                onClick={(e) => setEdit(+e.target.id)}
              >
                EDIT
              </button>
              <button
                type="button"
                name="delete"
                id={scootersListObj.id}
                onClick={(e) => handleDelete(e)}
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
