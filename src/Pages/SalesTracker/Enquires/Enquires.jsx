import React, { useState, useEffect } from "react";
import "./Enquires.css";
import EditPopup from "./EditPopup";
import PaginatedItems from "./Pagination";
import axios from "axios";
const _nonAuthHttp = axios.create({
    baseURL: 'http://127.0.0.1:8000',

});
const Enquires = () => {

    const [open, setOpen] = React.useState(true);

    const [total, setTotal] = useState()
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const response = await _nonAuthHttp.get(`/read/SP231117ACK3`, {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //             })

    //             setTotal(response.data);
    //             console.log(response);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     })();
    // }, []);


    // Dummy user data
    const [users, setUsers] = useState([
        { id: 1, title: "Stark Industries", owner: "Tony Stark ", currentPhase: "Schedule demo ", industry: "Technology", dueDate: "", assignees: "", labels: "Hot", timeinphase: "2 days", timeinpipe: "2days", lastupdated: "01/05/2024 6:34 AM", username: "user1" },
        { id: 2, title: "Umberla Corporation", owner: "Tony Stark", currentPhase: "Schedule demo", industry: "Technology", dueDate: "", assignees: "", labels: "Warm", timeinphase: "2 days", timeinpipe: "2days", lastupdated: "01/05/2024 6:34 AM", username: "user1" }, { id: 3, title: "Wonka Industries", owner: "Tony Stark", currentPhase: "Qualification", industry: "Technology", dueDate: "", assignees: "", labels: "Hot", timeinphase: "2 days", timeinpipe: "2days", lastupdated: "01/05/2024 6:34 AM", username: "user1" }, { id: 4, title: "Stark Industries", owner: "Tony Stark", currentPhase: "Schedule demo", industry: "Technology", dueDate: "", assignees: "", labels: "Hot", timeinphase: "2 days", timeinpipe: "2days", lastupdated: "01/05/2024 6:34 AM", username: "user1" }, { id: 5, title: "Stark Industries", owner: "Tony Stark", currentPhase: "First Contact", industry: "Technology", dueDate: "", assignees: "", labels: "Hot", timeinphase: "2 days", timeinpipe: "2days", lastupdated: "01/05/2024 6:34 AM", username: "user1" }, { id: 6, title: "Stark Industries", owner: "Tony Stark", currentPhase: "Schedule demo", industry: "Technology", dueDate: "", assignees: "", labels: "Cold", timeinphase: "2 days", timeinpipe: "2days", lastupdated: "01/05/2024 6:34 AM", username: "user1" }, { id: 7, title: "Stark Industries", owner: "Tony Stark", currentPhase: "Schedule demo", industry: "Technology", dueDate: "", assignees: "", labels: "Hot", timeinphase: "2 days", timeinpipe: "2days", lastupdated: "01/05/2024 6:34 AM", username: "user1" }, { id: 8, title: "Central Perk", owner: "Tony Stark", currentPhase: "Schedule demo", industry: "Technology", dueDate: "", assignees: "", labels: "Hot", timeinphase: "2 days", timeinpipe: "2days", lastupdated: "01/05/2024 6:34 AM", username: "user1" }, { id: 9, title: "Stark Industries", owner: "Tony Stark", currentPhase: "Poor Quality Prospect", industry: "Technology", dueDate: "", assignees: "", labels: "Hot", timeinphase: "2 days", timeinpipe: "2days", lastupdated: "01/05/2024 6:34 AM", username: "user1" },
        { id: 10, title: "Stark Industries", owner: "Stark", currentPhase: "Schedule demo", industry: "Technology", dueDate: "", assignees: "", labels: "Warm", timeinphase: "2 days", timeinpipe: "2days", lastupdated: "01/05/2024 6:34 AM", username: "user1" }, { id: 11, title: "Stark Industries", owner: "Tony Stark", currentPhase: "Schedule demo", industry: "Technology", dueDate: "", assignees: "", labels: "Hot", timeinphase: "2 days", timeinpipe: "2days", lastupdated: "01/05/2024 6:34 AM", username: "user1" }, { id: 12, title: "Stark Industries", owner: "Tony Stark", currentPhase: "Schedule demo", industry: "Technology", dueDate: "", assignees: "", labels: "Hot", timeinphase: "2 days", timeinpipe: "2days", lastupdated: "01/05/2024 6:34 AM", username: "user1" }, { id: 13, title: "Stark Industries", owner: "Tony Stark", currentPhase: "Schedule demo", industry: "Technology", dueDate: "", assignees: "", labels: "Hot", timeinphase: "2 days", timeinpipe: "2days", lastupdated: "01/05/2024 6:34 AM", username: "user1" }, { id: 14, title: "Stark Industries", owner: "Tony Stark", currentPhase: "Schedule demo", industry: "Technology", dueDate: "", assignees: "", labels: "Cold", timeinphase: "2 days", timeinpipe: "2days", lastupdated: "01/05/2024 6:34 AM", username: "user1" }, { id: 15, title: "Stark Industries", owner: "Tony Stark", currentPhase: "Schedule demo", industry: "Technology", dueDate: "", assignees: "", labels: "Hot", timeinphase: "2 days", timeinpipe: "2days", lastupdated: "01/05/2024 6:34 AM", username: "user1" }, { id: 16, title: "Stark Industries", owner: "Tony Stark", currentPhase: "Schedule demo", industry: "Technology", dueDate: "", assignees: "", labels: "Hot", timeinphase: "2 days", timeinpipe: "2days", lastupdated: "01/05/2024 6:34 AM", username: "user1" },
    ]);
    const [selectedUser, setSelectedUser] = useState();
    const handleOpen = (user) => {
        setSelectedUser(user);
        setOpen(true)
    };

    const handleClose = () => setOpen(false);
    return (<main>
        <div className=''>
            <div className="container1">
                <p className="title">All Enquires</p>

                <PaginatedItems itemsPerPage={10} handleOpen={handleOpen} open={open} users={users} />
                {(open && selectedUser &&
                    <EditPopup
                        open={open}
                        user={selectedUser}
                        handleClose={handleClose}

                    />
                )}


            </div>

        </div></main>
    )
}

export default Enquires