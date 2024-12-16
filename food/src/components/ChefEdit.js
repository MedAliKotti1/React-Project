import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';

export default function ChefEdit() {
  const [Chef, setChef] = useState({});
  const [ENumber, setENumber] = useState("");
  const [EFName, setEFName] = useState("");
  const [ELName, setELName] = useState("");
  const [EEmail, setEEmail] = useState("");
  const [EPwd, setEPwd] = useState("");
  const [EChefType, setEChefType] = useState("");
  const [EExperience, setEExperience] = useState("");

  const [EAdress, setEAdress] = useState("");

  const params = useParams();

  // Function to save the updated Chef
  const ChefEdit = () => {
    let Pid = params.id; // ID of the Chef to edit
    let Chefs = JSON.parse(localStorage.getItem("Chefs") || "[]"); // Fetch Chefs

    console.log("Before update - Chefs:", Chefs); // Debugging log

    // Update the Chef if the ID matches
    const updatedChefs = Chefs.map((Chef) =>
      Chef.id === Number(Pid)
        ? { ...Chef, FName: EFName, LName: ELName, Email: EEmail, Pwd: EPwd, Number: ENumber, Experience: EExperience, ChefType: EChefType, Adress: EAdress }
        : Chef
    );

    localStorage.setItem("Chefs", JSON.stringify(updatedChefs)); // Save back to localStorage

    console.log("After update - Updated Chefs:", updatedChefs); // Debugging log
  };

  // Fetch the Chef details on component mount
  useEffect(() => {
    let Pid = params.id;
    let Chefs = JSON.parse(localStorage.getItem("Chefs") || "[]");

    for (let i = 0; i < Chefs.length; i++) {
      if (Chefs[i].id === Number(Pid)) {
        setChef(Chefs[i]); // Set the full Chef object
        setEFName(Chefs[i].FName || "");
        setELName(Chefs[i].LName || ""); // Set individual fields
        setENumber(Chefs[i].Number || 0);
        setEAdress(Chefs[i].Adress || "");
        setEEmail(Chefs[i].Email || "");
        setEPwd(Chefs[i].Pwd || "");
        setEChefType(Chefs[i].ChefType || "");
        setEExperience(Chefs[i].Experience || "");
        break;
      }
    }
  }, [params.id]);

  return (
    <div>
      <section className="breadcrumb breadcrumb_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2>Chef Edit</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container box_1170 section-top-border text-center col-lg-12">
        <div className="row">
          <div className="form-group col-md-6">

            <input type="text" className="form-control" onChange={(event) => { setEFName(event.target.value) }} value={EFName} placeholder=" First Name *" />
          </div>
          <div className="form-group col-md-6">
            <input type="text" className="form-control" onChange={(event) => { setELName(event.target.value) }} value={ELName} placeholder="Last Name *" />
          </div>
          <div className="form-group col-md-12">
            <input type="email" className="form-control" onChange={(event) => { setEEmail(event.target.value) }} value={EEmail} placeholder="Email *" />
          </div>
          <div className="form-group col-md-6">
            <input type="text" className="form-control" onChange={(event) => { setEAdress(event.target.value) }} value={EAdress} placeholder="Adresse *" />
          </div>
          <div className="form-group col-md-6">
            <input className="form-control" type="number" onChange={(event) => { setENumber(event.target.value) }} value={ENumber} placeholder="Enter phone number" />

          </div>
          <div className="form-group col-md-12">

            <input type="text" className="form-control" onChange={(event) => { setEPwd(event.target.value) }} value={EPwd} placeholder="Password *" />

          </div>
          <div className="form-group col-md-6">
            <select className="form-control" onChange={(event) => { setEChefType(event.target.value) }} value={EChefType} id="Select">
              <option value={""} selected>Chef Type *</option>
              <option value={"Executive Chef"}>Executive Chef</option>
              <option value={"Sous Chef"}>Sous Chef</option>
              <option value={"Line Cook"}>Line Cook</option>
              <option value={"Prep Cook"}>Prep Cook</option>
            </select>
          </div>
          <div className="form-group col-md-12">
            <textarea className="form-control" onChange={(event) => { setEExperience(event.target.value) }}  rows={3} placeholder="Experience *" value={EExperience} />
          </div>
        </div>

        <div className="form-group mt-3">
          <NavLink to="/Admin/Chefs" onClick={ChefEdit} className="genric-btn primary radius">
            Save Changes
          </NavLink>
        </div>
      </div>
    </div>
  );
}
