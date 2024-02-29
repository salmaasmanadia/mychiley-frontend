import React from "react";
import { useSession, signIn} from "next-auth/react";
import { useRouter } from "next/router";

const SignInForm = () => {
    const router = useRouter();
    const { data: session } = useSession();
    console.log("session : ");
    console.log(session);
    if (!session) {
        return (
        <form>
            <div className="my-4 flex justify-center">
            <button
                onClick={() => signIn()}
                className="border-2 border-purple-900 hover:bg-purple-900 hover:text-white py-2 px-6 rounded-2xl "
            >
                Sign-In With Google
            </button>
            </div>
        </form>
        );
    }
    if (session) {
        console.log("signed with google");
        router.push("/");
    }
};

export default SignInForm;
