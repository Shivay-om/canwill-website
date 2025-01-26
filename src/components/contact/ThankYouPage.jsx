import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
    return (
        <div className="flex flex-col items-center justify-center p-5 min-h-[450px] bg-gray-50">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-lg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 text-green-500 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2l4 -4m5 0a9 9 0 11-18 0a9 9 0 0118 0z"
                    />
                </svg>

                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Thank You For Contacting Canwill Design..
                </h2>
                <p className="text-gray-600 mb-4">
                    Shortly, some from our team will connect with you..
                </p>

                <Link
                    to="/"
                    className="inline-block bg-[#00b8b8] hover:bg-[#00b8b8c9] text-white py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ThankYouPage;
