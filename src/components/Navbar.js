import React from "react";

const Navbar = () => {
    console.log("Navbar Component Rendered");
    return (
        <div>
            <nav className="bg-bgDark py-4">
                <h1 className="text-3xl font-bold text-center text-white">
                    Top Courses
                </h1>
            </nav>
        </div>
    );
};

export default Navbar ;