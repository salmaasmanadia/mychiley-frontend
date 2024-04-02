import SignUpForm from "../components/Form/SignUpForm";
import React from "react";

const signup = () => {
    return (
        <>
        <div className="h-screen w-full landingPage-bg flex justify-center items-center ">
            <div className="w-lg h-lg bg-white rounded-xl px-8 py-6">
            <SignUpForm />
            </div>
        </div>
        </>
    );
};

export default signup;
