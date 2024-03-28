import axios from "axios";
import React1, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

const Users = () => {
    const [users, setUsers] = useState([])

    const getAllusers = async () => {
        try {
            const response = await axios.get("http://localhost:6767/getData")
            if (response?.data) {
                setUsers(response?.data)
            }
        }
        catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getAllusers();
    }, [])

    return (
        <div>
            <h3> All users Data</h3>
            <div>
                {
                    users.map((item) => {
                        return (
                            <div style={{
                                backgroundColor: '#00000040',
                                alignSelf: 'flex-start',
                                padding: '1rem',
                                margin: '1rem',
                                borderRadius: '0.45rem'
                            }}>
                               <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                               <h2>{item?.name}</h2>
                               <MdDelete size={"2rem"} color="red" />
                                </div>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <p>{item.email}</p>
                                    <p>{item?.phone}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Users