// import { FILE } from "dns";
import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
// import { useMoralisWeb3Api } from "react-moralis";
import { getSolPortfolio, getNftMetadata } from "../store/actions/solana.actions";
import { useDispatch, useSelector } from "react-redux";
import TabsRender from "./Tabs";
// import solLogo from "../assests/images/solLogo.png"
import loader from "../assests/images/loader.gif"
// import { useMoralisSolanaApi, useMoralisSolanaCall } from "react-moralis";
type Props = {}

const Home: React.FC<Props> = (props) => {
  const { authenticate, isAuthenticated, user } = useMoralis();
  // const Moralis = useMoralis()
  const [showHelp, setShowHelp] = React.useState(true);
  const [userDetails, setUserDetails] = React.useState<any>( isAuthenticated ? JSON.parse(localStorage.getItem("userDetails")|| '{}') : {});
  const portfolio = useSelector((state: any) => state.solana.solPortfolio);
  const [solAddress, setSolAddress] = React.useState<string>(userDetails?.solAddress);
  const [hasError, setHasError] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  // const [openTab, setOpenTab] = React.useState(1);
  
  // console.log("user",solAddress);

  const getPortfolio = () => {
    // check if input field is empty
    if (solAddress === undefined || solAddress === "") {
      setHasError(true);
      setSolAddress("You must enter a valid Solana address");
      setShowHelp(true);
      return;
    } else  {
      dispatch<any>(getSolPortfolio("devnet", solAddress));
      setShowHelp(false);
      setHasError(false);
  
    }
  }
  useEffect(() => {
    if(solAddress !== undefined && solAddress !== ""){
      dispatch<any>(getSolPortfolio("devnet", solAddress));
    }
    // console.log("portfolio", portfolio);
    // dispatch<any>(getNftMetadata("mainnet", "2P5msLMi5one6S3qBsUwsDqutQkzuDuG9ush1xLcxYVN"))
  }, []);




  return (
    <div className="my-2 text-white">
     {
      showHelp ? (
        <div className="p-3">
        {isAuthenticated ? (
          <h1 className="font-semibold text-3xl mt-8 my-4"></h1>
        ) : (
          <h1 className="font-semibold text-sm md:text-xl mt-8 my-4">Hello, seems you were unbale to connect your wallet. Please enter your solana or test solana address below to generate your portfolio  </h1>
        )}


      </div>
      ): ""
     }

      <div>
        <input type="text"
          value={solAddress}
          onChange={(e) => setSolAddress(e.target.value)}
          className={`bg-gray-400 md:pr-0 pr-14 rounded-full text-xs md:text-base bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border  w-[95%]  md:w-3/6 p-3 text-white ${hasError === true ? "border-red-400 text-red-400" : "border-violet-400 text-white"}`}
          placeholder={isAuthenticated ? "Sol Address :" + " " + userDetails?.solAddress : "Enter Solana Address"}
        />
        { <span onClick={getPortfolio} style={{ marginLeft: "-3rem", zIndex: "1" }} className=" bg-purple-900  rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-violet-400 p-2 md:p-3 text-white cursor-pointer text-sm md:text-base">Go</span>}

       {
        showHelp ? (
          <h1 className="text-xs md:text-sm text-white my-2">
          Test Address : <span className="">6XU36wCxWobLx5Rtsb58kmgAJKVYmMVqy4SHXxENAyAe</span>
        </h1>
        ): ""
       }
      </div>

   {
      // Object.keys(portfolio).length === 0 ? (
        Object.keys(portfolio).length> 0 ? (
          <div className="mt-10">
          <TabsRender />
          </div>
        ) : (
         <div className="flex justify-center items-center mt-6">
           <img className="md:w-[25%] w-[50%]" src={loader} alt="" />
         </div>
        )
      // ) : (
      //   <div className="mt-10">
      //     <h1 className="text-center font-bold">
      //       NO DATA RETURNED
      //     </h1>
      //   </div>
      // )
   }
      {/* <p>Sol address: {userDetails?.attributes?.solAddress} 6XU36wCxWobLx5Rtsb58kmgAJKVYmMVqy4SHXxENAyAe</p>
      <p>Solana Balance: {portfolio?.data?.nativeBalance?.solana}</p>
      <p>Associated Nfts: {nftsLength}</p>
      <p>Associated Tokens: {tokensLength}</p> */}
      
    </div>
  );
}

export default Home;