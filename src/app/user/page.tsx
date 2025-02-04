

    import Link from "next/link";

    const User = () => {
    


    

    return (
        <div className="flex justify-between items-center w-[95%] mx-auto bg-gray-800 p-4 text-white">
            <div className="flex gap-4">
                <Link href="/signin">
                <button className="bg-blue-500 px-4 py-2 rounded-md hover:scale-110 duration-150">Sign In</button>
                </Link>
                <Link href="/signup">
                <button className="bg-green-500 px-4 py-2 rounded-md hover:scale-110 duration-150">Sign Up</button>
                </Link>
            </div>
             
        </div>
    );
    };

    export default User;
