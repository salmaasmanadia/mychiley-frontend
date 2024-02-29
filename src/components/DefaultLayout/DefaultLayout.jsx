import Navbar from "./../Navbar/Navbar";
import Head from "next/head";

export default function DefaultLayout({
    title = "My Chiley",
    children,
    }) {
    return (
        <div className="relative">
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <div className="w-screen max-w-full overflow-x-hidden">
            <main>
            {children}
            </main>
        </div>
        </div>
    );
}
