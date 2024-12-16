import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { NavLink } from 'react-router-dom';


export default function Signup() {
    const [Number, setNumber] = useState(0)
    const [FName, setFName] = useState("");
    const [LName, setLName] = useState("");
    const [Email, setEmail] = useState("");
    const [Adress, setAdress] = useState("");
    const [Pwd, setPwd] = useState("");

    const AddUser = () => {
        var UsersList = JSON.parse(localStorage.getItem("Users") || "[]");
        var User = { id: generateid(UsersList), FName: FName, LName: LName, Email: Email, Adress: Adress, Pwd: Pwd, Number: Number, };
        UsersList.push(User);
        localStorage.setItem("Users", JSON.stringify(UsersList));


    }
    const generateid = (Tab) => {
        var max;
        if (Tab.length == 0) {
            max = 0;

        }
        else {
            max = Tab[0].id;
            for (let i = 0; i < Tab.length; i++) {
                if (max < Tab[i].id) {
                    max = Tab[i].id;
                }

            }
        }
        return max + 1;




    }

    return (
        <div>
            
            <section className="regervation_part section_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="section_tittle">
                                <p>Join us</p>
                                <h2>Create New Account</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="regervation_part_iner">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" onChange={(event) => { setFName(event.target.value) }} placeholder=" First Name *" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" onChange={(event) => { setLName(event.target.value) }} placeholder="Last Name *" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <input type="email" className="form-control" onChange={(event) => { setEmail(event.target.value) }} placeholder="Email *" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" onChange={(event) => { setAdress(event.target.value) }} placeholder="Adresse *" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <PhoneInput className="form-control" value={Number} onChange={setNumber} placeholder="Enter phone number" />

                                        </div>
                                        <div className="form-group col-md-12">

                                            <input type="password" className="form-control" onChange={(event) => { setPwd(event.target.value) }} placeholder="Password *" />

                                        </div>

                                    </div>
                                    <div className="regerv_btn">
                                        <p> Already have an Account ? then <NavLink to='/login'>Log in</NavLink> </p>
                                        <a onClick={AddUser} className="btn_4">Sign Up</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
    )
}
