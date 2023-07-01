import React, { useState } from "react";
import './CheckIn.css';
import axios from "axios";


const CheckIn = () => {

    const [ userExists, setUserExists ] = useState(0);
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");


    const checkInUser = async () => {
        const data = await axios.post("http://localhost:10505/api/volunteers/create", {
            firstname: firstName,
            lastname: lastName,
            email
        })
        .then(response => {
            console.log(response);
            return response;
        })
        .then((res) => {
            const { data: { hasError, state } } = res;
            if (hasError) {
                setUserExists(-1);
            } else {
                if (state !== undefined && state !== null) {
                    setUserExists(1);
                } else {
                    window.location.replace("http://localhost:3000/home");
                }
            }
        })
    }

    return (
        <div className="checkin-container">
            <form onSubmit={(e) => {
                e.preventDefault();
                checkInUser();
            }}>

                <input placeholder="First Name" onChange={(e) => {
                    setFirstName(e.target.value);
                }} />
                <input placeholder="Last Name" onChange={(e) => {
                    setLastName(e.target.value);
                }} />
                <input placeholder="Email" onChange={(e) => {
                    setEmail(e.target.value);
                }} />


                <button type="submit" className="checkin-form-submit-button">
                    Submit
                </button>
                {
                    userExists === 1 ?
                        <p style={{ color: "red" }}>
                            A user with this email already exists.
                        </p>
                    :
                        <div></div>
                }
            </form>
        </div>
    );

};


export default CheckIn;