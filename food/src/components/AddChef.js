import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export default function AddChef() {
    const [Number, setNumber] = useState()
    const [FName, setFName] = useState("");
    const [LName, setLName] = useState("");
    const [Email, setEmail] = useState("");
    const [Adress, setAdress] = useState("");
    const [Pwd, setPwd] = useState("");
    const [ChefType, setChefType] = useState("");
    const [Experience, setExperience] = useState("");

    const AddChef = () => {
        var ChefsList = JSON.parse(localStorage.getItem("Chefs") || "[]");
        var Chef = { id: generateid(ChefsList), FName: FName, LName: LName, Email: Email, Adress: Adress, Pwd: Pwd, Number: Number,ChefType: ChefType , Experience: Experience };
        ChefsList.push(Chef);
        localStorage.setItem("Chefs", JSON.stringify(ChefsList));


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
        <div><section className="regervation_part section_padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="section_tittle">
                            <h2>Add New Chef</h2>
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
                                    <div className="form-group col-md-12">

                                        <input type="password" className="form-control" onChange={(event) => { setPwd(event.target.value) }} placeholder="Password *" />

                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" onChange={(event) => { setAdress(event.target.value) }} placeholder="Adresse *" />
                                    </div>
                                    
                                    <div className="form-group col-md-6">
                                        <PhoneInput className="form-control" value={Number} onChange={setNumber} placeholder="Enter phone number" />

                                    </div>
                                    <div className="form-group col-md-6">
                                            <select className="form-control" onChange={(event) => { setChefType(event.target.value) }} id="Select">
                                                <option value={""} selected>Chef Type *</option>
                                                <option value={"Executive Chef"}>Executive Chef</option>
                                                <option value={"Sous Chef"}>Sous Chef</option>
                                                <option value={"Line Cook"}>Line Cook</option>
                                                <option value={"Prep Cook"}>Prep Cook</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <textarea className="form-control" onChange={(event) => { setExperience(event.target.value) }} id="Textarea" rows={3} placeholder="Experience *" defaultValue={""} />
                                        </div>
                                    

                                </div>
                                <div className="regerv_btn">
                                    <a onClick={AddChef} className="btn_4">Add Chef</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section></div>
    )
}
