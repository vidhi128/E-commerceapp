import React, { useState } from 'react'
import "./signup.css"
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const [udata, setUdata] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    });

    console.log(udata);


    // const adddata = (e) =>{
    // const {name, value} = e.target;
    //console.log(name, value);
    //setUdata((pre)=>{
    // return{
    //    ...pre,
    // [name]:value
    // }
    // })
    //};

    const senddata = async (e) => {
        e.preventDefault();
        const { fname, email, mobile, password, cpassword } = udata;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname, email, mobile, password, cpassword
            })
        });

        const data = await res.json();
        //console.log(data);


        if (res.status === 422 || !data) {
            //alert("no data")
            toast.warn("invalid details",{
                position: "top-center",
               })
        } else {
           // alert("data successfully added");
           toast.success("data successfully added",{
            position: "top-center",
           })
           setUdata({ ...udata, fname: "", email: "", mobile: "", password: "", cpassword: "" });
        }
    }



    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./blacklogoamazon.png" alt="amazonlogo" />
                </div>
                <div className="sign_form">
                    <form method='POST'>
                        <h1>Sign-Up</h1>
                        <div className="form_data">
                            <label htmlFor="fname">Your name</label>
                            <input type="text" name="fname"
                                onChange={(e) => setUdata({ ...udata, fname: e.target.value })}
                                //  onChange={adddata}
                                //value={udata.fname}
                                id="fname" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">Email </label>
                            <input type="text" name="email"
                                onChange={(e) => setUdata({ ...udata, email: e.target.value })}
                                //onChange={adddata}
                                //value={udata.email}
                                id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="mobile">Mobile </label>
                            <input type="number" name="mobile"
                                onChange={(e) => setUdata({ ...udata, mobile: e.target.value })}
                                //onChange={adddata}
                                //value={udata.mobile}
                                id="mobile" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password </label>
                            <input type="password" name="password"
                                onChange={(e) => setUdata({ ...udata, password: e.target.value })}
                                // onChange={adddata}
                                //value={udata.password}
                                id="password" placeholder='At Least 6 charar' />
                        </div>
                        <div className="form_data">
                            <label htmlFor="cpassword">Password Again </label>
                            <input type="password" name="cpassword"
                                onChange={(e) => setUdata({ ...udata, cpassword: e.target.value })}
                                //onChange={adddata}
                                //value={udata.cpassword}
                                id="cpassword" />
                        </div>
                        <button className='signin_btn' onClick={senddata}>Continue</button>
                        <div className="signin_info">
                            <p>Already have an account</p>
                            <NavLink to="/login">Sign_in</NavLink>

                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </section>
    )
}

export default Signup

