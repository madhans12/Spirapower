import React, { useState } from "react";
import { Button, Modal } from "antd";
import CloseIcon from "./../../../Assets/PopIcon/Close.svg";
import Attached from "./../../../Assets/PopIcon/Attached.svg";
import Document from "./../../../Assets/PopIcon/Document.svg";
import Email from "./../../../Assets/PopIcon/Email.svg";
import Pricetag from "./../../../Assets/PopIcon/Price tag.svg";
import Recruitment from "./../../../Assets/PopIcon/Recruitment.svg";

const EditPopup = ({ user, handleClose, open, handleDelete, handleUpdate }) => {
  const [userData, setUserData] = useState({
    reference_number: user.reference_number || "",
    sales_person_name: user.sales_person_name || "",
    sales_mail: user.sales_mail || "",
    client_person_name: user.client_person_name || "",
    client_email: user.client_email || "",
  });
  const handleUpdateClick = () => {
    const updatedData = {
      reference_number: userData.reference_number,
      sales_person_name: userData.sales_person_name,
      sales_mail: userData.sales_mail,
      client_person_name: userData.client_person_name,
      client_email: userData.client_email,
    };

    handleUpdate(user.reference_number, updatedData);
  };

  return (
    <>
      <Modal
        title={user.client_person_name}
        centered
        open={open}
        // onOk={() => setOpen(true)}
        onCancel={handleClose}
        width={1000}
      >
        <div className="pop" style={{ display: "flex" }}>
          <div className="popup-left">
            <div className="actions">
              <div>
                <img src={Recruitment} alt="icon" />
                <p>New Lead</p>
              </div>
              <div>
                <img src={Attached} alt="icon" />
                <p>Attachments</p>
              </div>
              <div>
                <img src={Document} alt="icon" />
                <p>Checklists</p>
              </div>
              <div>
                <img src={Document} alt="icon" />
                <p>Pdf</p>
              </div>
              <div>
                <img src={Email} alt="icon" />
                <p>Email</p>
              </div>
              <div>
                <img src={Pricetag} alt="icon" />
                <p>Sales Pipeline</p>
              </div>
            </div>
            <div>
              <p>Internal Refrence Number </p>
              <input
                value={userData.reference_number}
                onChange={(e) =>
                  setUserData({ ...userData, reference_number: e.target.value })
                }
              />
            </div>{" "}
            <div>
              <p>Sales Person Name</p>
              <input
                value={userData.sales_person_name}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    sales_person_name: e.target.value,
                  })
                }
              />
            </div>{" "}
            <div>
              <p>Sales Person Mail</p>
              <input
                value={userData.sales_mail}
                onChange={(e) =>
                  setUserData({ ...userData, sales_mail: e.target.value })
                }
              />
            </div>
            {/* <div>
              <p>CRM Email Receive Time</p>
              <input
                value={userData.sales_mail}
                onChange={(e) =>
                  setUserData({ ...userData, sales_mail: e.target.value })
                }
              />
            </div> */}
            <div>
              <p>Client Name</p>
              <input
                value={userData.client_person_name}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    client_person_name: e.target.value,
                  })
                }
              />
            </div>{" "}
            <div>
              <p>Client Email</p>
              <input
                value={userData.client_email}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    client_email: e.target.value,
                  })
                }
              />
            </div>{" "}
            {/* <div>
              <p>Original Email Receive Time</p>
              <input value={userData.sales_email_time.slice(5, -6)} />
            </div> */}
          </div>
          <hr />
          <div className="popup-right">
            <div>
              <p>Does the lead meet our client profile?</p>
              <div className="pop-radio">
                <label>
                  <input type="radio" /> Yes
                </label>
                <label>
                  <input type="radio" /> No
                </label>
              </div>
            </div>
            <div>
              <p>Further information regarding this lead</p>
              <textarea
                className="further-input"
                placeholder="Type here..."
              ></textarea>
            </div>
            <div>
              <p>Activities</p>
              <input
                type="text"
                className="activity-input"
                placeholder="write your Comments"
              />
            </div>
            <div>
              <button onClick={() => handleDelete(user.reference_number)}>
                Delete
              </button>
              <button onClick={handleUpdateClick}>Update</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditPopup;
