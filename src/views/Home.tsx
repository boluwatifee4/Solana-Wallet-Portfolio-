import { FILE } from "dns";
import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useMoralisWeb3Api } from "react-moralis";
import {getSolPortfolio} from "../store/actions/solana.actions";
import { useDispatch, useSelector } from "react-redux";

type Props = {}

const Home: React.FC<Props> = (props) => {
    const { authenticate, isAuthenticated, user } = useMoralis();
    const [userDetails, setUserDetails] = React.useState<any>({});
    const portfolio = useSelector((state: any) => state.solana.solPortfolio);
    const nftsLength = portfolio?.data?.nfts?.length
    const tokensLength = portfolio?.data?.tokens?.length
    const dispatch = useDispatch();
    // console.log("user",portfolio);
    const login = async () => {
        if (isAuthenticated) {
  
          await authenticate({type: "sol"})
            .then(function (user) {
                // console.log(user);
                setUserDetails(user);
            //   console.log(user!.get("ethAddress"));
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }

      useEffect(() => {
      dispatch<any>(getSolPortfolio("devnet","6XU36wCxWobLx5Rtsb58kmgAJKVYmMVqy4SHXxENAyAe"))
      }, []);
   



    return (
        <div>
            <h1 className="text-red-500">Home</h1>
            <button onClick={login}>Logged in</button>
            <p>Sol address: {userDetails?.attributes?.solAddress} 6XU36wCxWobLx5Rtsb58kmgAJKVYmMVqy4SHXxENAyAe</p>
            <p>Solana Balance: {portfolio?.data?.nativeBalance?.solana}</p>
            <p>Associated Nfts: {nftsLength}</p>
            <p>Associated Tokens: {tokensLength}</p>
        </div>
    );
}

export default Home;