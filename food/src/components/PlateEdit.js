import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';

export default function PlateEdit() {
    const [Plate, setPlate] = useState({});
    const [EPrice, setEPrice] = useState("");
    const [EPName, setEPName] = useState("");
    const [EDescription, setEDescription] = useState("");

    const params = useParams();

    // Function to save the updated plate
    const PlateEdit = () => {
        let Pid = params.id; // ID of the plate to edit
        let Plates = JSON.parse(localStorage.getItem("Plates") || "[]"); // Fetch plates

        console.log("Before update - Plates:", Plates); // Debugging log

        // Update the plate if the ID matches
        const updatedPlates = Plates.map((plate) =>
            plate.id === Number(Pid)
                ? { ...plate, PName: EPName, Price: EPrice, Description: EDescription }
                : plate
        );

        localStorage.setItem("Plates", JSON.stringify(updatedPlates)); // Save back to localStorage

        console.log("After update - Updated Plates:", updatedPlates); // Debugging log
    };

    // Fetch the plate details on component mount
    useEffect(() => {
        let Pid = params.id;
        let Plates = JSON.parse(localStorage.getItem("Plates") || "[]");

        for (let i = 0; i < Plates.length; i++) {
            if (Plates[i].id === Number(Pid)) {
                setPlate(Plates[i]); // Set the full plate object
                setEPName(Plates[i].PName || ""); // Set individual fields
                setEPrice(Plates[i].Price || 0);
                setEDescription(Plates[i].Description || "");
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
                                    <h2>Plate Edit</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container box_1170 section-top-border text-center col-lg-12">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input
                                className="form-control"
                                onChange={(event) => setEPName(event.target.value)}
                                value={EPName}
                                type="text"
                                placeholder="Plate name"
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input
                                className="form-control"
                                onChange={(event) => setEPrice(event.target.value)}
                                value={EPrice}
                                type="number"
                                placeholder="Price"
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <textarea
                                className="form-control w-100"
                                onChange={(event) => setEDescription(event.target.value)}
                                value={EDescription}
                                cols={30}
                                rows={9}
                                placeholder="Enter Description"
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group mt-3">
                    <NavLink to="/Admin/plates" onClick={PlateEdit} className="genric-btn primary radius">
                        Save Changes
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
