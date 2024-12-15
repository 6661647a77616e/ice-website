import React, { useState } from 'react';

function Header() {
    const [activeTab, setActiveTab] = useState('OUR LINE UP');

    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="bg-black h-20 text-center">
            <div className="grid grid-cols-6 flex justify-between">
                <h1 className="text-xl font-semibold text-white my-10">SiG: ICE</h1>
                {/* <div className="bg-white h-16 my-7 "></div> */}
                <div className="bg-white h-16 my-7 rounded-tr-xl rounded-tl-xl"></div>
                <button
                    className={`text-lg font-semibold my-10 ${activeTab === 'OUR LINE UP' ? 'text-sky-500 bg-white h-16 my-7 rounded-tr-xl rounded-tl-xl' : 'text-white hover:text-sky-500'}`}
                    onClick={() => handleClick('OUR LINE UP')}
                >
                    OUR LINE UP
                </button>
                <button
                    className={`text-lg font-semibold my-10 ${activeTab === 'ABOUT' ? 'text-sky-500 bg-white h-16 my-7 rounded-tr-xl rounded-tl-xl' : 'text-white hover:text-sky-500'}`}
                    onClick={() => handleClick('ABOUT')}
                >
                    ABOUT
                </button>
                <button
                    className={`text-lg font-semibold my-10 ${activeTab === 'CONTACT US' ? 'text-sky-500 bg-white h-16 my-7 rounded-tr-xl rounded-tl-xl' : 'text-white hover:text-sky-500'}`}
                    onClick={() => handleClick('CONTACT US')}
                >
                    CONTACT US
                </button>
            </div>
        </div>
    );
}

export default Header;
