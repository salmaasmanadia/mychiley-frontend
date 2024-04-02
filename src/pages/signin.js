import SignInForm from "@/components/Form/SignInForm";
import React from "react";


const signin = () => {
    return (
    <div className="h-screen w-full landingPage-bg flex justify-center items-center ">
        <div className="w-lg h-lg bg-white rounded-xl px-8 py-6">
        <SignInForm/>
        </div>
    </div>
    );
};

export default signin;
