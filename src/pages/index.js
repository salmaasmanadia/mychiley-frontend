import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import DefaultLayout from "@/components/DefaultLayout/DefaultLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home(){
    return(
        <>
            <DefaultLayout>
                <div className="flex w-full h-screen landingPage-bg">
                    <div>
                        {/* image */}
                        <div className="">

                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}