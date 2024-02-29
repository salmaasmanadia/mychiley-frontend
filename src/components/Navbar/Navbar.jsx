import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const { data: session } = useSession();
    // ini data user hasil auth

    if (session) {
        const user = session.user;
        console.log("this is session.user")
        console.log(user.email);
        return (
        <>
            <div className="flex justify-center mx-10  ">
            <nav className="fixed z-[9999999] mt-4 mx-4 w-full xl:max-w-[1850px] lg:max-w-[1400px] bg-white shadow-xl xl:rounded-[50px] rounded-[20px] drop-shadow-2xl">
                <div className="justify-between px-4 mx-auto xl:max-w-[1850px] lg:max-w-[1400px] md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-1 md:py-2 md:block">
                    <Link href="/" passHref className="flex">
                        <h2 className="flex items-center text-2xl text-purple-900 font-bold font-poppins">
                        MYCHILEY
                        </h2>
                    </Link>
                    <div className="md:hidden">
                        <button
                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setNavbar(!navbar)}
                        >
                        {navbar ? (
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-n-blue"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                            </svg>
                        ) : (
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-n-blue"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            </svg>
                        )}
                        </button>
                    </div>
                    </div>
                </div>
                <div>
                    <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                        navbar ? "block" : "hidden"
                    }`}
                    >
                    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        <li className="text-black">
                        <Link href="/scan">
                            <div className="font-poppins font-semibold hover:text-purple-800">
                            Predict
                            </div>
                        </Link>
                        </li>
                        <li className="text-black">
                        <Link href="/history">
                            <div className="font-poppins font-semibold hover:text-purple-800">
                            History
                            </div>
                        </Link>
                        </li>
                        <li className="text-black">
                        <div className="flex">
                            <button
                            onClick={() => signOut()}
                            className="font-poppins font-semibold bg-purple-800 hover:bg-white hover:text-purple-500 border-2 hover:border-purple-800 py-1 px-3 rounded-xl text-white mr-2"
                            >
                            Sign-Out
                            </button>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </nav>
            </div>
        </>
        );
    }
    return (
        <>
        <div className="flex justify-center mx-10  ">
            <nav className="fixed z-[9999999] mt-4 mx-4 w-full xl:max-w-[1850px] lg:max-w-[1400px] bg-white shadow-xl xl:rounded-[50px] rounded-[20px] drop-shadow-2xl">
            <div className="justify-between px-4 mx-auto xl:max-w-[1850px] lg:max-w-[1400px] md:items-center md:flex md:px-8">
                <div>
                <div className="flex items-center justify-between py-1 md:py-2 md:block">
                    <Link href="/" passHref className="flex">
                    <h2 className="flex items-center text-2xl text-blue-dark font-bold font-poppins">
                        MY CHILEY
                    </h2>
                    </Link>
                    <div className="md:hidden">
                    <button
                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-n-blue"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                            />
                        </svg>
                        ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-n-blue"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        )}
                    </button>
                    </div>
                </div>
                </div>
                <div>
                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? "block" : "hidden"
                    }`}
                >
                    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li className="text-black">
                        <Link href="/scan">
                        <div className="font-poppins font-semibold hover:text-purple-800">
                            Predict
                        </div>
                        </Link>
                    </li>
                    <li className="text-black">
                        <Link href="/history">
                        <div className="font-poppins font-semibold hover:text-purple-800">
                            History
                        </div>
                        </Link>
                    </li>
                    <li className="text-black">
                        <div className="flex">
                        <Link href="/signin">
                            <div className="font-poppins font-semibold bg-purple-800 hover:bg-white hover:text-purple-800 border-2 hover:border-purple-800 py-1 px-3 rounded-xl text-white mr-2">
                            Sign-In
                            </div>
                        </Link>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </nav>
        </div>
        </>
    );
};

export default Navbar;