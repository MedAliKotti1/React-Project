import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UserInfo() {
    const [User, setUser] = useState({});
    const params = useParams();
    useEffect(
        () => {
            let Pid = params.id
            let Users = JSON.parse(localStorage.getItem("Users") || "[]");
            for (let i = 0; i < Users.length; i++) {
                if (Pid == Users[i].id) {
                    setUser(Users[i]);
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
                                    <h2>User Info</h2>
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
                                        <li class="list-group-item"><strong>First Name:</strong> {User.FName} </li>
                                        <li class="list-group-item"><strong>Last Name:</strong> {User.LName}</li>
                                        <li class="list-group-item"><strong>Email:</strong> {User.Email}</li>
                                        <li class="list-group-item"><strong>Password:</strong> {User.Pwd}</li>
                                        <li class="list-group-item"><strong>Adress:</strong>{User.Adress} </li>
                                        <li class="list-group-item"><strong>Number:</strong> {User.Number}</li>

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
