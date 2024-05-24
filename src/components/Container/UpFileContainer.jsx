import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";

const UpFileContainer = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const router = useRouter();
    const { data: session } = useSession();
    useEffect(() => {
        const sessionCheck = session; // melakukan pengecekan session
        if (!sessionCheck) {
        router.push("/signin"); // Ubah '/' dengan rute halaman root (home) yang sesuai
        }
    }, []);

    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        var date = new Date().toLocaleString();
        var bodyFormData = new FormData();
        console.log("file = ");
        console.log(file);

        bodyFormData.append("file", file, file.name);
        bodyFormData.append("email", session.user.email);
        bodyFormData.append("date", date);
        console.log(bodyFormData);

        setLoading(true);
        axios({
        method: "post",
        url: "http://mychiley.eastus.cloudapp.azure.com:5000/prediction", //menguhubungkan dg backend (next implementation)
        data: bodyFormData,
        headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
        },
        mode: "no-cors",
        })
        .then(function (response) {
            //handle success
            console.log(response);
            setResult(response.data.prediction);
            setLoading(false);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    };


    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        {loading ? (
            <>
            <div className="w-full flex justify-center h-full">
            <div
            className="flex justify-center h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-warning motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
            >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
            </span>
            </div>
            </div>
            </>
        ) : (
            <div className="md:flex">
            <div className="md:flex-shrink-0">
            </div>
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-purple-400 font-semibold">
                Upload File
                </div>
                <div className="mt-2">
                <input type="file" onChange={handleFileChange} />
                </div>
                {file && (
                <div className="mt-2">
                    <span className="font-bold text-purple-400">Selected file:</span> {file.name}
                </div>
                )}
                <div>
                <button
                    className="bg-pink-500 hover:bg-pink-300 text-white w-1/4 rounded-lg mt-4 text-xl font-bold"
                    onClick={handleSubmit}
                >
                    SCAN
                </button>
                </div>
                <div className="flex flex-row mt-4 py-8 bg-white rounded-xl">
                <h1 className="mr-8 text-xl font-bold text-pink-500">Result = </h1>
                <h1 className="text-xl font-bold">{result}</h1>
                </div>
            </div>
            </div>
        )}
        </div>
    );
};

export default UpFileContainer;
