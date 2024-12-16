import React, { useState } from "react"
import { Outlet, Link } from "react-router-dom";

export default function Admin() {
    const [Username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const correctPassword = "Crococoder_React";
    const correctUsername = "Validation-Project";
    const styles = {
        header: {
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px 20px",
            textAlign: "center",
        },
        navbar: {
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            backgroundColor: "#f4f4f4",
            padding: "10px",
        },
        link: {
            textDecoration: "none",
            color: "#000",
            padding: "10px 15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "#fff",
            transition: "all 0.3s ease",
        },
        content: {
            padding: "20px",
            textAlign: "center",
        },
    };

    const handleLogin = () => {
        if ((password === correctPassword) && (Username === correctUsername)) {
            setIsAuthenticated(true);
        } else {
            alert("Incorrect password!");
        }
    };
    if (isAuthenticated) {
        return (
            <div>
                <section className="breadcrumb breadcrumb_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb_iner text-center">
                                    <div className="breadcrumb_iner_item">
                                        <h2>Admin</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_padding">
                    <div style={styles.container} className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="text-center">

                                    <nav style={styles.navbar}>
                                        <Link to="/admin/Plates" className=" genric-btn link circle" style={styles.link}>
                                            Plates
                                        </Link>
                                        <Link to="/admin/AddPlate" className=" genric-btn link circle" style={styles.link}>
                                            Add Plates
                                        </Link>
                                        <Link to="/admin/users" className=" genric-btn link circle" style={styles.link}>
                                            Users
                                        </Link>
                                        <Link to="/admin/chefs" className=" genric-btn link circle" style={styles.link}>
                                            Chefs
                                        </Link>
                                    </nav>
                                    <main style={styles.content}>
                                        <Outlet /> {/* Child components will render here */}
                                    </main>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div>
            <section className="regervation_part section_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="section_tittle">
                                <p>Admin</p>
                                <h2>Login</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="regervation_part_iner">
                                <form>
                                    <div className="form-row">

                                        <div className="form-group col-md-12">
                                            <input type="text" className="form-control" onChange={(e) => setUsername(e.target.value)} placeholder="Username *" />
                                        </div>
                                        <div className="form-group col-md-12">

                                            <input type="password" className="form-control"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)} placeholder="Password *" />

                                        </div>

                                    </div>
                                    <div className="regerv_btn">

                                        <a className="btn_4" onClick={handleLogin}>Login</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
