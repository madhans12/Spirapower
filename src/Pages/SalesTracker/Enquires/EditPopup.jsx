import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import CloseIcon from "./../../../Assets/PopIcon/Close.svg"
import Attached from "./../../../Assets/PopIcon/Attached.svg"
import Document from "./../../../Assets/PopIcon/Document.svg"
import Email from "./../../../Assets/PopIcon/Email.svg"
import Pricetag from "./../../../Assets/PopIcon/Price tag.svg"
import Recruitment from "./../../../Assets/PopIcon/Recruitment.svg"


const EditPopup = ({ user, handleClose, open ,handleDelete}) => {
    
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
                                            <div><img src={Recruitment} alt="icon" /><p>New Lead</p></div>
                                            <div><img src={Attached} alt="icon" /><p>Attachments</p></div>
                                            <div><img src={Document} alt="icon" /><p>Checklists</p></div>
                                            <div><img src={Document} alt="icon" /><p>Pdf</p></div>
                                            <div><img src={Email} alt="icon" /><p>Email</p></div>
                                            <div><img src={Pricetag} alt="icon" /><p>Sales Pipeline</p></div>
    
                                        </div>
                                        <div>
                                            <p>Start Form</p>
                                            <p>Created by Dtskill 3days ago</p>
                                        </div> <div>
                                            <p>Name</p>
                                            <p>Willie E.Coyote</p>
                                        </div> <div>
                                            <p>Email</p>
                                            <p>Wilecoyote@pipifymail.com</p>
                                        </div> <div>
                                            <p>Phone</p>
                                            <p>+1 999-999-999</p>
                                        </div> <div>
                                            <p>Company</p>
                                            <p>ACME Corporation</p>
                                        </div> <div>
                                            <p>Company industry</p>
                                            <p>{user.industry}</p>
                                        </div> <div>
                                            <p>Observations</p>
                                            <p>Click here to add</p>
                                        </div> <div>
                                            <p>Histroy</p>
                                            <div className="histroy">
                                                <p >Lead Backlog</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="popup-right">
    
                                        <div>
                                            <p>Does the lead meet our client profile?</p>
                                            <div className="pop-radio">
                                                <label><input type="radio" /> Yes</label>
                                                <label><input type="radio" /> No</label>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Further information regarding this lead</p>
                                            <textarea className="further-input" placeholder="Type here..."></textarea>
                                        </div>
                                        <div>
                                            <p>Activities</p>
                                            <input type="text" className="activity-input" placeholder="write your Comments" />
                                        </div>
                                        <div>
                                        <button onClick={()=>handleDelete(user.reference_number)}>Delete</button>
                                    </div>
                                    </div>
                                   
                                </div>

                </Modal>
            </>
        );
    };

export default EditPopup;
