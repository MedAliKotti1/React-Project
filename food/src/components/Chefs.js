import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Chefs() {
    const [Chefs, setChefs] = useState([]);

    const navigate = useNavigate();
    const ChefEdit =(Pid)=>{
        navigate('/ChefEdit/'+ Pid);


    };
    
    const ChefInfo =(Pid)=>{
        navigate('/ChefInfo/'+ Pid);


    };


    const deleteChef = (Mid) => {
        const updatedChefs = Chefs.filter(chef => chef.id !== Mid);
        setChefs(updatedChefs);
        localStorage.setItem("Chefs", JSON.stringify(updatedChefs));
    };

    useEffect(() => {
        let Chefs = JSON.parse(localStorage.getItem("Chefs") || "[]");
        setChefs(Chefs);
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
                            <th>Chef type</th>
                            <th>Utilities</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Chefs.map((value, key) => (
                            <tr key={key}>
                                <td>{value.id}</td>
                                <td>{value.FName}</td>
                                <td>{value.LName}</td>
                                <td>{value.ChefType}</td>
                                <td>
                                    <button className='btn btn-success'onClick={() => ChefInfo(value.id)}>Display</button>
                                    <button className='btn btn-warning'onClick={() => ChefEdit(value.id)}>Edit</button>
                                    <button className='btn btn-danger' onClick={() => deleteChef(value.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
