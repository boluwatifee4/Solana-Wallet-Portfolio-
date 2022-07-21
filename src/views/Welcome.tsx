import React ,{useEffect} from "react";
import bg1 from "../assests/images/ng4.jpg";
import logo from "../assests/images/logo.webp";
import home1 from "../assests/images/home1.webp";
import { useMoralis } from "react-moralis";
import { getSolPortfolio, getNftMetadata } from "../store/actions/solana.actions";
import { useDispatch, useSelector } from "react-redux";
import {Router, useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
// import hoverEffect from "hover-effect";


type Props = {}


const Welcome: React.FC<Props> = (props) => {
    const { authenticate, isAuthenticated, user } = useMoralis();
    const [userDetails, setUserDetails] = React.useState<any>({});
    const [btnText, setBtnText] = React.useState<string>("Connect With 👻 Wallet");
    const push = useNavigate();
    const dispatch = useDispatch();
    const login = async () => {
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
            });
        }
        if(isAuthenticated){
            push("/home");
        }
      }
    useEffect(() => {
    setUserDetails(JSON.parse(localStorage.getItem("userDetails")|| '{}'));
    console.log("userDetails",userDetails);
    }, [ ]);
    
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
                    <div onClick={login} className="text-white">
                        <button  className="text-sm uppercase p-3 bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-violet-400">
                            {!isAuthenticated ? btnText : "👻 Wallet Connected"}
                        </button>
                    </div>
                </header>
                
                <div className="flex justify-between items-center text-white py-10 px-5">
                    <div  style={{width: "50%"}} className="px-4 flex justify-start items-start flex-col">
                        <h1 className=" hero-h1 w-[90%] text-left text-7xl font-bold">
                            Solana Portfolio Generator
                        </h1>
                        <p className="text-left text-lg font-semibold my-2 ">
                            Generate your SOL balance, SPL token balance, SPL NFT balance and more at a click of a button.
                        </p>
                        <button
                        className="text-sm my-2 text-left uppercase p-3 bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-violet-400"
                        >
                           <Link
                            to="/home"
                           >
                            {isAuthenticated ? "Go To Your Portfolio" : "Get Started"}
                           </Link>
                        </button>
                    </div>
                    <div  style={{width: "50%", borderTopLeftRadius: "8rem", borderBottomLeftRadius: "12rem", borderTopRightRadius: "11rem", borderBottomRightRadius: "2rem"}} className="ticket py-10 flex justify-around items-center bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-violet-400">
                        <img
                        // ref={container}
                        style={{width: "90%"}}
                        src={home1} className="rounded-full" alt="nft" />
                    </div>
                </div>
            </div>
        </div>
    );
    }

    export default Welcome;