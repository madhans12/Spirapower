import React from "react";
import { Button, Dropdown, Space } from "antd";

const UserDataTable = ({ handleOpen, currentItems }) => {
  return (
    <div className="table-wrap">
      <table className="tables">
        <thead className="table-head">
          <tr>
            <th>
              <p>Refrence Number</p>
            </th>
            <th>
              <p>Sales Person</p>
            </th>
            <th>
              <p>Sales Mail</p>
            </th>
            <th>
              <p>Sales Mail time</p>
            </th>
            <th>
              <p>Client Person Name</p>
            </th>
            <th>
              <p>Client Email</p>
            </th>
            <th>
              <p>Client Email Recieve time</p>
            </th>
            <th>
              <p>Client cc</p>
            </th>
            <th>
              <p>Subject</p>
            </th>

            <th>
              <p>Ack email time</p>
            </th>
            <th>
              <p>Quatation recieve Time</p>
            </th>
            <th>
              <p>Due Date</p>
            </th>
          </tr>
        </thead>
        <tbody className="table-body">
          {currentItems &&
            currentItems.map((user, index) => (
              <tr key={index} onClick={() => handleOpen(user)}>
                <td>
                  <p>{user.reference_number}</p>
                </td>
                <td>
                  <p>{user.sales_person_name}</p>
                </td>
                <td>
                  <p>{user.sales_mail}</p>
                </td>
                <td>
                  <p>{user.sales_email_time.slice(5, -6)}</p>
                </td>
                <td>
                  <p>{user.client_person_name}</p>
                </td>
                <td>
                  <p>{user.client_email}</p>
                </td>
                <td>
                  <p>{user.client_email_time}</p>
                </td>
                <td>
                  <p>
                    {user.client_cc.trim() === "{}" ? (
                      <span className="empty">Empty</span>
                    ) : (
                      user.client_cc
                    )}
                  </p>
                </td>
                <td>
                  <p>{user.client_subject}</p>
                </td>
                <td>
                  <p>{user.ack_time.trim() === "" ? "Empty" : user.ack_time}</p>
                </td>
                <td>
                  <p>
                    {user.quotation_time.trim() === ""
                      ? "Empty"
                      : user.quotation_time}
                  </p>
                </td>
                <td>
                  <p>{user.reminder_status ? user.reminder_status : "Empty"}</p>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDataTable;
