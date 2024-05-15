import React from "react";
import Image from "next/image";

const HistoryCard = (e) => {
    return (
    <>
        <div className="flex justify-between md:px-8 px-4 bg-[#FAFAFA] shadow-xl rounded-lg my-2">
        <div className="max-w-[200px] md:max-w-100 ">
            <Image
            className="rounded-lg md:max-w-[200px] max-w-[120px]"
            src={e.url}
            alt="gambar scan"
            width={200}
            height={200}
            />
        </div>
        <div className="w-fit overflow-hidden ml-3">
            <div className="block text-black md:text-lg text-sm">Prediction = {e.pred}</div>
            <div className="block text-black md:text-lg text-sm">Email = {e.email}</div>
            <div className="block text-black md:text-lg text-sm">Date = {e.date}</div>
        </div>
        </div>
    </>
    );
};

export default HistoryCard;
