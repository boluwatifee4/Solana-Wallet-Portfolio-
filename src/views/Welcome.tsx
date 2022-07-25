import React, { useEffect } from "react";
// import bg1 from "../assests/images/ng4.jpg";
import logo from "../assests/images/logo.webp";
import home1 from "../assests/images/phantom2.jpg";
import { useMoralis } from "react-moralis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { getSolPortfolio, getNftMetadata } from "../store/actions/solana.actions";
// import { useDispatch, useSelector } from "react-redux";
// import {Router, useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
// import hoverEffect from "hover-effect";


type Props = {}


const Welcome: React.FC<Props> = (props) => {
    const github = faGithub as IconProp;
    const twitter = faTwitter as IconProp;
    const linkedin = faLinkedin as IconProp;
    const { authenticate, isAuthenticated, user } = useMoralis();
    const [userDetails, setUserDetails] = React.useState<any>({});
    const [btnText, setBtnText] = React.useState<string>("Connect With 👻 Wallet");
    // const push = useNavigate();
    // const dispatch = useDispatch();
    const login = async () => {
        if ("solana" in window) {
            if (!isAuthenticated) {
                setBtnText("Connecting...");
                await authenticate({ type: "sol" })
                    .then(function (user) {
                        // console.log(user);
                        //   setUserDetails(user);
                        localStorage.setItem("userDetails", JSON.stringify(user));
                        //   console.log(user!.get("ethAddress"));
                    })
                    .catch(function (error) {
                        console.log(error);
                        if (error) {
                            setBtnText("Connect With 👻 Wallet");
                        }
                    });
            }
        } else {
            alert("Please Install Phantom Wallet");
            setUserDetails("Connect With 👻 Wallet");
        }

    }
    useEffect(() => {
        if (isAuthenticated) {
            setUserDetails(JSON.parse(localStorage.getItem("userDetails") || '{}'));
        }
        // console.log("userDetails",userDetails);
    }, [isAuthenticated]);

    return (
        <div>
            <div
            >
                <header className="flex justify-between items-center py-1 px-2 md:px-5">
                    <div className="flex text-white items-center p-3 justify-center ">
                        <img src={logo} className="logo-img w-20 md:w-28" alt="logo" />
                        {/* <h1 className="logo text-xl space-x-4">Portfolio Genrator</h1> */}
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="hidden md:flex ">
                            <a href="https://github.com/boluwatifee4/Solana-Wallet-Portfolio-" target="blank">
                                <FontAwesomeIcon icon={github} className="text-white text-sm md:text-xl mx-2" />
                            </a>
                            <a href="https://twitter.com/OlaBima_" target="blank">
                                <FontAwesomeIcon icon={twitter} className="text-white text-sm md:text-xl mx-2" />
                            </a>
                            <a href="https://www.linkedin.com/in/ola-boluwatife/" target="blank">
                            <FontAwesomeIcon icon={linkedin} className="text-white text-sm md:text-xl mx-2" />
                            </a>
                        </div>
                        <div onClick={login} className="text-white">
                            <button className="text-xs uppercase p-2 md:p-3 bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-violet-400">
                                {!isAuthenticated ? btnText : "👻 Wallet Connected"}
                            </button>
                        </div>
                    </div>
                </header>

                <div className=" mt-12 md:mt-5 md:flex md:flex-row flex flex-col justify-between items-center text-white py-10 px-5">
                    <div className="px-4 w-auto md:w-2/4 flex justify-start mb-5 md:mb-0 items-start flex-col">
                        <h1 className=" hero-h1 w-auto md:w-[90%] text-left text-4xl md:text-7xl font-bold">
                            Solana Portfolio Generator
                        </h1>
                        <p className="text-left text-sm md:text-lg font-semibold my-2 ">
                            Generate your SOL balance, SPL token balance, SPL NFT balance and more at a click of a button.
                        </p>
                        <button
                            className="text-sm my-2 text-left uppercase p-2 md:p-3 bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-violet-400"
                        >
                            <Link
                                to="/home"
                            >
                                {isAuthenticated ? "Go To Your Portfolio" : "Get Started"}
                            </Link>
                        </button>
                    </div>
                    <div style={{ borderTopLeftRadius: "8rem", borderBottomLeftRadius: "12rem", borderTopRightRadius: "11rem", borderBottomRightRadius: "2rem" }} className="ticket md:w-2/4 w-[100%]  py-10 flex justify-around items-center bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-violet-400">
                        <img
                            // ref={container}
                            style={{ width: "90%" }}
                            src={home1} className="rounded-full" alt="nft" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;