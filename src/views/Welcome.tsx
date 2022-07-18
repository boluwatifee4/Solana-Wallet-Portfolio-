import React from "react";
import bg1 from "../assests/images/ng4.jpg";
import logo from "../assests/images/logo.webp";
import home1 from "../assests/images/home1.webp";
type Props = {}


const Welcome: React.FC<Props> = (props) => {
    return (
        <div>
            <div
            style={{backgroundImage: `url(${bg1})` , backgroundSize: "cover", backgroundPosition: "center", height: "100vh"}}
            >
                <header className="flex justify-between items-center py-1 px-5">
                    <div className="flex text-white items-center p-3 justify-center ">
                        <img src={logo} className="logo-img w-28" alt="logo" />
                        {/* <h1 className="logo text-xl space-x-4">Portfolio Genrator</h1> */}
                    </div>
                    <div className="text-white">
                        <button className="text-sm uppercase p-3 bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-violet-400">Connect With 👻 Wallet</button>
                    </div>
                </header>
                
                <div className="flex justify-center items-center text-white py-4 px-5">
                    <div  style={{width: "50%"}} className="px-4">
                        <h1 className=" hero-h1 w-[90%] text-left text-7xl font-bold">
                            Solana Portfolio Generator
                        </h1>
                    </div>
                    <div  style={{width: "50%", borderTopLeftRadius: "8rem", borderBottomLeftRadius: "12rem", borderTopRightRadius: "11rem", borderBottomRightRadius: "2rem"}} className=" py-10 flex justify-around items-center bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-violet-400">
                        <img
                        style={{width: "90%"}}
                        src={home1} className="rounded-full" alt="nft" />
                    </div>
                </div>
            </div>
        </div>
    );
    }

    export default Welcome;