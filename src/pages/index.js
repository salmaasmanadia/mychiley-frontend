import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import DefaultLayout from "@/components/DefaultLayout/DefaultLayout";
import bannerMain from "../../public/images/mychili banner main.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <DefaultLayout>
            <div className="flex w-full h-screen landingPage-bg">
                <div>
                {/* image */}
                <div className="lg:flex block justify-between 2xl:mt-48 mt-44  mx-8">
                    <div className="flex flex-col align-center justify-center">
                    <h1 className="font-inter 2xl:text-8xl text-7xl text-purple-900 max-w-xl lg:ml-32 md:ml-8 ml-3">
                        Welcome to MyChiley
                    </h1>
                    <Link href="/scan" className="flex justify-center">
                        <button
                        class="rounded-full bg-white text-blue-dark hover:bg-purple-700 hover:text-white md:text-xl text-md font-bold md:h-12 h-10 md:w-1/4 w-1/2 mt-8 "
                        href="/scan"
                        >
                        Scan Now!
                        </button>
                    </Link>
                    </div>
                    <div className="lg:h-1/2 h-full lg:w-1/2 w-full ml-0 lg:mt-0 mt-8">
                    <Image
                        src={bannerMain}
                        alt="MyChili Banner"
                        className=""
                    />
                    </div>
                </div>
                {/* heading */}
    
                <div>
                    {/* title */}
                    <div className="container mx-auto px-4"></div>
    
                    {/* button  */}
                    <button></button>
                </div>
                </div>
            </div>
            </DefaultLayout>
        </>
        );
    }
    