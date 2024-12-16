import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserList() {
    const [Users, setUsers] = useState([]);


    const navigate = useNavigate();
    
    const UserInfo =(Pid)=>{
        navigate('/UserInfo/'+ Pid);


    };
    const UserEdit =(Pid)=>{
        navigate('/UserEdit/'+ Pid);


    };

    const deleteUser = (Mid) => {
        const updatedUsers = Users.filter(User => User.id !== Mid);
        setUsers(updatedUsers);
        localStorage.setItem("Users", JSON.stringify(updatedUsers));
    };

    useEffect(() => {
        let Users = JSON.parse(localStorage.getItem("Users") || "[]");
        setUsers(Users);
    }, []); // Dependency array added here

    return (
        <div>
            <div className="widget-next-match">
                <table className="table custom-table">
                    <thead>
                        <tr>
                            <th>#(id)</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            
                            <th>Utilities</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Users.map((value, key) => (
                            <tr key={key}>
                                <td>{value.id}</td>
                                <td>{value.FName}</td>
                                <td>{value.LName}</td>
                                
                                <td>
                                    <button className='btn btn-success'onClick={() => UserInfo(value.id)}>Display</button>
                                    <button className='btn btn-warning'onClick={() => UserEdit(value.id)}>Edit</button>
                                    <button className='btn btn-danger' onClick={() => deleteUser(value.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
