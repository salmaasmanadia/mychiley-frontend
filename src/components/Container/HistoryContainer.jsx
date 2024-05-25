import React, { useState, useEffect } from "react";
import HistoryCard from "@/components/Card/HistoryCard";
import { useSession, getSession, signIn, signOut } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";

const HistoryContainer = () => {
    const [history, setHistory] = useState();
    const [user, setUser] = useState(null);
    const { data: session } = useSession();
    const router = useRouter();

    // var bodyFormData = new FormData();

    useEffect(() => {
        const sessionCheck = session; // Lakukan pengecekan session Anda di sini

        if (!sessionCheck) {
        router.push("/signin"); // Ubah '/' dengan rute halaman root (home) yang sesuai
        } else {
        var email = session.user?.email;
        console.log("ini email dari container");
        console.log(email);
        setUser(session.user);
        }

        // bodyFormData.append("email", email);
        const backend_url = process.env.BACKEND_URL
        axios
        // .get("localhost:5000/prediction?email="+email)
        .get("http://mychiley.eastus.cloudapp.azure.com/prediction?email=" + email) //ini nanti yang diganti pake API azure
        .then(function (response) {
            //handle success
            console.log(response);
            setHistory(response.data.histories);
            //   setLoading(false);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    }, []);
    console.log("ini isi histories");
    console.log(history);
    return (
        <>
        {history?.map((e) => {
            return (
            <HistoryCard
                key={e._id}
                email={e.email}
                url={e.url}
                pred={e.prediction}
                date={e.date}
            />
            );
        })}
        </>
    );
};

export default HistoryContainer;
