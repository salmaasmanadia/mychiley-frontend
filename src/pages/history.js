import DefaultLayout from "@/components/DefaultLayout/DefaultLayout";
import React from "react";
import HistoryContainer from "@/components/Container/HistoryContainer";

const history = () => {
    return (
        <>
        <DefaultLayout>
            <div className="flex w-full h-screen historyPage-bg">
            <div className="w-full">
                <div className="flex w-screen pb-12 justify-center mt-32 mx-8">
                <h1 className="text-center font-semibold font-serif-inter text-6xl text-purple-300">
                    Prediction History
                </h1>
                </div>
                <div className="flex justify-center">
                <div className=" bg-white rounded-xl w-3/4 h-auto">
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
