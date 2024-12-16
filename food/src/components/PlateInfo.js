import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function PlateInfo() {
    const [Plate, setPlate] = useState({});
    const params = useParams();
    useEffect(
        () => {
            let Pid = params.id
            let Plates = JSON.parse(localStorage.getItem("Plates") || "[]");
            for (let i = 0; i < Plates.length; i++) {
                if (Pid==Plates[i].id) {
                    setPlate(Plates[i]);
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
                                        <h2>Plate Info</h2>
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
                                    <h4 className="mb-3">Plate Name :{Plate.PName}</h4>
                                    <p>{Plate.Description}</p>
                                    <p className="font-weight-bold">Price: ${Plate.Price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
