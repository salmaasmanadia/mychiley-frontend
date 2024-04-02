import * as React from "react"
import { useState } from "react";
import Link from 'next/link'
import axios from "axios"
import { useRouter } from 'next/router';

const SignUpForm = () => {
    const router = useRouter();
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
        };
        
        const handleSubmit = (event) => {
            event.preventDefault();
            try {
                console.log(inputs)
                const res = axios
                .post("http://localhost:3000/api/auth/sign-up", inputs)
                .then(function (response) {
                    // navigate("/auth/sign-in");
                    console.log(response);
                    router.push("signin")
                })
                .catch(function (error) {
                    if (error.message === "Request failed with status code 400") {
                    //   setAlert({ open: true, vertical: "bottom", horizontal: "right" });
                    console.log("set alert")
                    }
                });
            } catch (error) {
                console.log("error axios");
            }
        }
    return (
        <form onSubmit={handleSubmit}>
            <label className="font-poppins text-blue-dark font-bold ">
                {" "}
                Full Name
            </label>
            <input
                type="text"
                name="fullName"
                value={inputs.fullName || ""}
                onChange={handleChange}
                className="block bg-white py-2 px-4 border-2 border-blue-medium rounded-xl mb-4"
                placeholder="salma nadia"
            ></input>
            <label className="font-poppins text-blue-dark font-bold ">
                {" "}
                Email
            </label>
            <input
                type="email"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
                className="block bg-white py-2 px-4 border-2 border-blue-medium rounded-xl mb-4"
                placeholder="xxx@email.com"
            ></input>
            <label className="font-poppins text-blue-dark font-bold ">
                {" "}
                Password
            </label>
            <input
                type="password"
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
                className="block bg-white py-2 px-4 border-2 border-blue-medium rounded-xl mb-4"
            ></input>
            <button onClick={handleSubmit} className="bg-blue-pale py-2 px-4 font-poppins font-bold text-white rounded-lg mr-8 hover:bg-white hover:text-blue-pale border-2 border-white hover:border-blue-medium">
                Sign-Up
            </button>
            <Link href="/signin">
                <button  className="bg-blue-medium py-2 px-4 font-poppins font-bold text-white rounded-lg hover:bg-white hover:text-blue-pale border-2 border-white hover:border-blue-medium">
                Sign-In
                </button>
            </Link>
            </form>
    )
}

export default SignUpForm