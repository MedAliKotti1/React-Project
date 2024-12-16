import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';

export default function UserEdit() {
  const [User, setUser] = useState({});
  const [ENumber, setENumber] = useState("");
  const [EFName, setEFName] = useState("");
  const [ELName, setELName] = useState("");
  const [EEmail, setEEmail] = useState("");
  const [EPwd, setEPwd] = useState("");

  const [EAdress, setEAdress] = useState("");

  const params = useParams();

  // Function to save the updated User
  const UserEdit = () => {
    let Pid = params.id; // ID of the User to edit
    let Users = JSON.parse(localStorage.getItem("Users") || "[]"); // Fetch Users

    console.log("Before update - Users:", Users); // Debugging log

    // Update the User if the ID matches
    const updatedUsers = Users.map((User) =>
      User.id === Number(Pid)
        ? { ...User, FName: EFName, LName: ELName, Email: EEmail, Pwd: EPwd, Number: ENumber, Adress: EAdress }
        : User
    );

    localStorage.setItem("Users", JSON.stringify(updatedUsers)); // Save back to localStorage

    console.log("After update - Updated Users:", updatedUsers); // Debugging log
  };

  // Fetch the User details on component mount
  useEffect(() => {
    let Pid = params.id;
    let Users = JSON.parse(localStorage.getItem("Users") || "[]");

    for (let i = 0; i < Users.length; i++) {
      if (Users[i].id === Number(Pid)) {
        setUser(Users[i]); // Set the full User object
        setEFName(Users[i].FName || "");
        setELName(Users[i].LName || ""); // Set individual fields
        setENumber(Users[i].Number || 0);
        setEAdress(Users[i].Adress || "");
        setEEmail(Users[i].Email || "");
        setEPwd(Users[i].Pwd || "");
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
                  <h2>User Edit</h2>
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
        </div>

        <div className="form-group mt-3">
          <NavLink to="/Admin/Users" onClick={UserEdit} className="genric-btn primary radius">
            Save Changes
          </NavLink>
        </div>
      </div>
    </div>
  );
}
