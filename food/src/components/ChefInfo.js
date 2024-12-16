import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ChefInfo() {
    const [Chef, setChef] = useState({});
    const params = useParams();
    useEffect(
        () => {
            let Pid = params.id
            let Chefs = JSON.parse(localStorage.getItem("Chefs") || "[]");
            for (let i = 0; i < Chefs.length; i++) {
                if (Pid == Chefs[i].id) {
                    setChef(Chefs[i]);
                    break;

                }

            }

        }, []
    )
    return (
        <div>
            <section className="breadcrumb breadcrumb_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb_iner text-center">
                                <div className="breadcrumb_iner_item">
                                    <h2>Chef Info</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="whole-wrap">
                <div className="container box_1170">
                    <div className="section-top-border">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="single-defination text-center p-4 border rounded">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item"><strong>First Name:</strong> {Chef.FName} </li>
                                        <li class="list-group-item"><strong>Last Name:</strong> {Chef.LName}</li>
                                        <li class="list-group-item"><strong>Chef Type:</strong> {Chef.ChefType}</li>
                                        <li class="list-group-item"><strong>Email:</strong> {Chef.Email}</li>
                                        <li class="list-group-item"><strong>Password:</strong> {Chef.Pwd}</li>
                                        <li class="list-group-item"><strong>Adress:</strong>{Chef.Adress} </li>
                                        <li class="list-group-item"><strong>Number:</strong> {Chef.Number}</li>
                                        <li class="list-group-item"><strong>Experience:</strong> {Chef.Experience}</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
