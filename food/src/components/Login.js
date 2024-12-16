import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Login() {
  return (
    <div>
        <section className="regervation_part section_padding">
    <div className="container">
        <div className="row">
            <div className="col-xl-5">
                <div className="section_tittle">
                    <p>Welcome Back !</p>
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
                                <input type="email" className="form-control"  placeholder="Email *" />
                            </div>
                            <div className="form-group col-md-12">

                                <input type="password" className="form-control"  placeholder="Password *" />

                            </div>

                        </div>
                        <div className="regerv_btn">
                            <p> Don't have an Account ? then <NavLink to='/Signup'>Signu up</NavLink> </p>
                            <a className="btn_4">Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section></div>
  )
}
