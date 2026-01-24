import React, { useState } from "react";
import useBot from "../../hooks/useBot";
import { BiMessageSquareDots } from "react-icons/bi";
import { BiLoader } from "react-icons/bi";
function Bot({ isOpen, botToggle }) {
    const { message, options, loading, error, sendStateToBot } = useBot();

    const handleOption = (option) => {
        // Handle option selection
        sendStateToBot(option.value);
    };
    return (
        <>
            <button
                className="fixed p-4 text-white transition-colors rounded-full shadow-lg bg-petal-pink-400 bottom-4 right-4 hover:bg-petal-pink-500"
                onClick={botToggle}
            >
                <BiMessageSquareDots size={24} />
            </button>

            {isOpen && (
                <div className="fixed flex flex-col w-64 p-4 border border-gray-300 rounded-lg shadow-lg bg-primary-400 bottom-20 right-4">
                    <div className="mb-4 font-bold text-primary-700">
                        Lavstyle Bot
                    </div>
                    <div className="flex-1 h-48 mb-4 overflow-y-auto">
                        {/* Chat messages will go here */}
                        <p className="text-gray-700">{message}</p>
                        {options.map((option) => (
                            <button
                                key={option.label}
                                className="block w-full px-4 py-2 mb-2 text-left text-white rounded bg-primary-600 hover:bg-primary-700"
                                onClick={() => handleOption(option)}
                            >
                                {option.label}
                            </button>
                        ))}
                        {loading && <p className="text-gray-500"><BiLoader className="inline-block mr-2 animate-spin" />Loading...</p>}
                        {error && (
                            <p className="text-red-600">Error: {error}</p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Bot;
