import DefaultLayout from "@/components/DefaultLayout/DefaultLayout";
import React from "react";
import HistoryContainer from "@/components/Container/HistoryContainer";

const history = () => {
    return (
        <>
        <DefaultLayout>
            <div className="flex w-full h-100vh historyPage-bg">
            <div className="w-full">
                <div className="flex w-screen pb-12 justify-center mt-32 mx-8">
                <h1 className="text-center font-semibold font-poppins text-6xl text-purple-900">
                    Prediction History
                </h1>
                </div>
                <div className="flex justify-center">
                <div className=" rounded-xl w-1.5/4 h-auto">
                    <HistoryContainer/>
                </div>
                </div>
            </div>
            </div>
        </DefaultLayout>
        </>
    );
};

export default history;
