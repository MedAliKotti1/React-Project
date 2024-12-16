import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Plats() {
    const [Plates, setPlates] = useState([]);
    const navigate = useNavigate();

    const PlateInfo =(Pid)=>{
        navigate('/PlateInfo/'+ Pid);


    };
    const PlateEdit =(Pid)=>{
        navigate('/PlateEdit/'+ Pid);


    };

    const deletePlate = (Pid) => {
        const updatedPlates = Plates.filter(Plate => Plate.id !== Pid);
        setPlates(updatedPlates);
        localStorage.setItem("Plates", JSON.stringify(updatedPlates));
    };

    useEffect(() => {
        let Plates = JSON.parse(localStorage.getItem("Plates") || "[]");
        setPlates(Plates);
    }, []); // Dependency array added here

    return (
        <div>
            <div className="widget-next-match">
                <table className="table custom-table">
                    <thead>
                        <tr>
                            <th>#(id)</th>
                            <th>Plate Name</th>
                            <th>Plate Price</th>
                            <th>Utilities</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Plates.map((value, key) => (
                            <tr key={key}>
                                <td>{value.id}</td>
                                <td>{value.PName}</td>
                                <td>{value.Price}</td>
                                <td>
                                    <button className='btn btn-success'onClick={() => PlateInfo(value.id)}>Display</button>
                                    <button className='btn btn-warning'onClick={() => PlateEdit(value.id)}>Edit</button>
                                    <button className='btn btn-danger' onClick={() => deletePlate(value.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
