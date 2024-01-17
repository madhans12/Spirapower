import React, { useState, useEffect } from "react";
import "./Enquires.css";
import EditPopup from "./EditPopup";
import PaginatedItems from "./Pagination";
import axios from "axios";
const _AuthHttp = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

_AuthHttp.interceptors.request.use((config) => {
    config.headers["Content-Type"] = "application/json";
    // You can also add authentication headers if needed
    return config;
});
const Enquires = () => {
    const [open, setOpen] = React.useState(true);
    const [users, setUsers] = useState("")
    const handleDelete = async (reference_number, index) => {
        try {
            await _AuthHttp.post(`/api/delete`, { refrence_num: reference_number });
    
            setUsers(prevUsers => prevUsers.filter((_, i) => i !== index));
        } catch (error) {
            console.log(error);
        }
        handleClose()
    };
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await _AuthHttp.get(`/api/read`);
                setUsers(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData(); 
    }, [open]);
    

  
    const [selectedUser, setSelectedUser] = useState();
    const handleOpen = (user) => {
        setSelectedUser(user);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);
    return (
        <main>
            <div className="container1">
                <div className="container-head">
                <p className="title">All Enquires</p>
                <button>+ Add customer</button>
                </div>
                <PaginatedItems
                    itemsPerPage={2}
                    handleOpen={handleOpen}
                    open={open}
                    users={users}
                />

                {open && selectedUser && (
                    <EditPopup
                        open={open}
                        user={selectedUser}
                        handleClose={handleClose}
                        handleDelete={handleDelete}
                    />
                )}
            </div>
        </main>
    );
};

export default Enquires;

    // Dummy user data
    // const [users, setUsers] = useState([
    //     {
    //         id: 1,
    //         title: "Stark Industries",
    //         owner: "Tony Stark ",
    //         currentPhase: "Schedule demo ",
    //         industry: "Technology",
    //         dueDate: "",
    //         assignees: "",
    //         labels: "Hot",
    //         timeinphase: "2 days",
    //         timeinpipe: "2days",
    //         lastupdated: "01/05/2024 6:34 AM",
    //         username: "user1",
    //     },
    //     {
    //         id: 2,
    //         title: "Umberla Corporation",
    //         owner: "Tony Stark",
    //         currentPhase: "Schedule demo",
    //         industry: "Technology",
    //         dueDate: "",
    //         assignees: "",
    //         labels: "Warm",
    //         timeinphase: "2 days",
    //         timeinpipe: "2days",
    //         lastupdated: "01/05/2024 6:34 AM",
    //         username: "user1",
    //     },
    //     {
    //         id: 3,
    //         title: "Wonka Industries",
    //         owner: "Tony Stark",
    //         currentPhase: "Qualification",
    //         industry: "Technology",
    //         dueDate: "",
    //         assignees: "",
    //         labels: "Hot",
    //         timeinphase: "2 days",
    //         timeinpipe: "2days",
    //         lastupdated: "01/05/2024 6:34 AM",
    //         username: "user1",
    //     },
    //     {
    //         id: 4,
    //         title: "Stark Industries",
    //         owner: "Tony Stark",
    //         currentPhase: "Schedule demo",
    //         industry: "Technology",
    //         dueDate: "",
    //         assignees: "",
    //         labels: "Hot",
    //         timeinphase: "2 days",
    //         timeinpipe: "2days",
    //         lastupdated: "01/05/2024 6:34 AM",
    //         username: "user1",
    //     },
    //     {
    //         id: 5,
    //         title: "Stark Industries",
    //         owner: "Tony Stark",
    //         currentPhase: "First Contact",
    //         industry: "Technology",
    //         dueDate: "",
    //         assignees: "",
    //         labels: "Hot",
    //         timeinphase: "2 days",
    //         timeinpipe: "2days",
    //         lastupdated: "01/05/2024 6:34 AM",
    //         username: "user1",
    //     },
    //     {
    //         id: 6,
    //         title: "Stark Industries",
    //         owner: "Tony Stark",
    //         currentPhase: "Schedule demo",
    //         industry: "Technology",
    //         dueDate: "",
    //         assignees: "",
    //         labels: "Cold",
    //         timeinphase: "2 days",
    //         timeinpipe: "2days",
    //         lastupdated: "01/05/2024 6:34 AM",
    //         username: "user1",
    //     },
    //     {
    //         id: 7,
    //         title: "Stark Industries",
    //         owner: "Tony Stark",
    //         currentPhase: "Schedule demo",
    //         industry: "Technology",
    //         dueDate: "",
    //         assignees: "",
    //         labels: "Hot",
    //         timeinphase: "2 days",
    //         timeinpipe: "2days",
    //         lastupdated: "01/05/2024 6:34 AM",
    //         username: "user1",
    //     },
    //     {
    //         id: 8,
    //         title: "Central Perk",
    //         owner: "Tony Stark",
    //         currentPhase: "Schedule demo",
    //         industry: "Technology",
    //         dueDate: "",
    //         assignees: "",
    //         labels: "Hot",
    //         timeinphase: "2 days",
    //         timeinpipe: "2days",
    //         lastupdated: "01/05/2024 6:34 AM",
    //         username: "user1",
    //     },
    //     {
    //         id: 9,
    //         title: "Stark Industries",
    //         owner: "Tony Stark",
    //         currentPhase: "Poor Quality Prospect",
    //         industry: "Technology",
    //         dueDate: "",
    //         assignees: "",
    //         labels: "Hot",
    //         timeinphase: "2 days",
    //         timeinpipe: "2days",
    //         lastupdated: "01/05/2024 6:34 AM",
    //         username: "user1",
    //     },
    //     {
    //         id: 10,
    //         title: "Stark Industries",
    //         owner: "Stark",
    //         currentPhase: "Schedule demo",
    //         industry: "Technology",
    //         dueDate: "",
    //         assignees: "",
    //         labels: "Warm",
    //         timeinphase: "2 days",
    //         timeinpipe: "2days",
    //         lastupdated: "01/05/2024 6:34 AM",
    //         username: "user1",
    //     },
    //     {
    //         id: 11,
    //         title: "Stark Industries",
    //         owner: "Tony Stark",
    //         currentPhase: "Schedule demo",
    //         industry: "Technology",
    //         dueDate: "",
    //         assignees: "",
    //         labels: "Hot",
    //         timeinphase: "2 days",
    //         timeinpipe: "2days",
    //         lastupdated: "01/05/2024 6:34 AM",
    //         username: "user1",
    //     },
    //     {
    //         id: 12,
    //         title: "Stark Industries",
    //         owner: "Tony Stark",
    //         currentPhase: "Schedule demo",
    //         industry: "Technology",
    //         dueDate: "",
    //         assignees: "",
    //         labels: "Hot",
    //         timeinphase: "2 days",
    //         timeinpipe: "2days",
    //         lastupdated: "01/05/2024 6:34 AM",
    //         username: "user1",
    //     },
    //     {
    //         id: 13,
    //         title: "Stark Industries",
    //         owner: "Tony Stark",
    //         currentPhase: "Schedule demo",
    //         industry: "Technology",
    //         dueDate: "",
    //         assignees: "",
    //         labels: "Hot",
    //         timeinphase: "2 days",
    //         timeinpipe: "2days",
    //         lastupdated: "01/05/2024 6:34 AM",
    //         username: "user1",
    //     },
    //     {
    //         id: 14,
    //         title: "Stark Industries",
    //         owner: "Tony Stark",
    //         currentPhase: "Schedule demo",
    //         industry: "Technology",
    //         dueDate: "",
    //         assignees: "",
    //         labels: "Cold",
    //         timeinphase: "2 days",
    //         timeinpipe: "2days",
    //         lastupdated: "01/05/2024 6:34 AM",
    //         username: "user1",
    //     },
    //     {
    //         id: 15,
    //         title: "Stark Industries",
    //         owner: "Tony Stark",
    //         currentPhase: "Schedule demo",
    //         industry: "Technology",
    //         dueDate: "",
    //         assignees: "",
    //         labels: "Hot",
    //         timeinphase: "2 days",
    //         timeinpipe: "2days",
    //         lastupdated: "01/05/2024 6:34 AM",
    //         username: "user1",
    //     },
    //     {
    //         id: 16,
    //         title: "Stark Industries",
    //         owner: "Tony Stark",
    //         currentPhase: "Schedule demo",
    //         industry: "Technology",
    //         dueDate: "",
    //         assignees: "",
    //         labels: "Hot",
    //         timeinphase: "2 days",
    //         timeinpipe: "2days",
    //         lastupdated: "01/05/2024 6:34 AM",
    //         username: "user1",
    //     },
    // ]);