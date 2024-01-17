import React from "react";
const UserDataTable = ({ handleOpen, currentItems }) => {
  const getColorForLabel = (label) => {
    if (label === "Hot") {
      return "red";
    } else if (label === "Warm") {
      return "yellow";
    } else if (label === "Cold") {
      return "blue";
    } else {
      return "none";
    }
  };
  return (
    <div className="table-wrap">
      <table className="tables">
        <thead className="table-head">
          <tr>
            <th className="">
              <p>Clent Email</p>
            </th>
            {/* <th><p>Current Phase</p></th> */}
            <th>
              <p>Client Person Name</p>
            </th>
            <th>
              <p>Refrence Number</p>
            </th>
            <th>
              <p>Sales Mail</p>
            </th>
            <th>
              <p>Sales Person</p>
            </th>
            <th>
              <p>Due Date</p>
            </th>
            {/* <th>
              <p>Assignees</p>
            </th>
            <th>
              <p>Labels</p>
            </th>
            <th>
              <p>Time in Phase</p>
            </th>
            <th>
              <p>Time in Pipe</p>
            </th>
            <th>
              <p>Last updated</p>
            </th> */}
          </tr>
        </thead>
        <tbody className="table-body">
          {currentItems &&
            currentItems.map((user, index) => (
              <tr key={index} onClick={() => handleOpen(user)}>
                <td className="td1">
                  <p className="td11">{user.client_email}</p>
                  <p className="td12">{user.owner}</p>
                </td>
                {/* <td className="td2"><p className="td21">{user.currentPhase}</p></td> */}
                <td>
                  <p>{user.client_person_name}</p>
                </td>
                <td>
                  <p>{user.reference_number}</p>
                </td>
                <td>
                  <p>{user.sales_mail}</p>
                </td>
                <td>
                  <p>{user.sales_person_name}</p>
                </td>
                <td>
                  <p>{user.reminder_status ? user.reminder_status : "Empty"}</p>
                </td>
               
                {/* <td>
                  <p>{user.assignees ? user.assignees : "Empty"}</p>
                </td>
                <td className="td6">
                  {" "}
                  <p className={`user-label ${getColorForLabel(user.labels)}`}>
                    {user.labels}
                  </p>
                </td>
                <td>
                  <p>{user.timeinphase}</p>
                </td>
                <td>
                  <p>{user.timeinpipe}</p>
                </td>
                <td>
                  <p>{user.lastupdated}</p>
                </td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDataTable;
