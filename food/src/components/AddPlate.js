import React, { useState } from 'react'

export default function AddPlate() {


    const [Price, setPrice] = useState(0)
    const [PName, setPName] = useState("");
    const [Description, setDescription] = useState("");

    const AddPlates = () => {
        var PlatesList = JSON.parse(localStorage.getItem("Plates") || "[]");
        var Plate = { id: generateid(PlatesList), PName: PName, Price: Price, Description: Description };
        PlatesList.push(Plate);
        localStorage.setItem("Plates", JSON.stringify(PlatesList));


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
            <div className=" text-center col-lg-12">

                <div className="row">

                    <div className="col-sm-6">
                        <div className="form-group">
                            <input className="form-control" onChange={(event) => { setPName(event.target.value) }} type="text" placeholder="Plate name" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input className="form-control" onChange={(event) => { setPrice(event.target.value) }} type="number" placeholder="Price" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <textarea className="form-control w-100" onChange={(event) => { setDescription(event.target.value) }} cols={30} rows={9} placeholder="Enter Description" defaultValue={""} />
                        </div>
                    </div>

                </div>
                <div className="form-group mt-3">
                    <a onClick={AddPlates} className="btn_4">Add Plate</a>
                </div>

            </div>
        </div>


    )
}
