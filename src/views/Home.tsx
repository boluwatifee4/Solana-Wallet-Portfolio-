import { FILE } from "dns";
import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useMoralisWeb3Api } from "react-moralis";
type Props = {}

const Home: React.FC<Props> = (props) => {
    const { authenticate, isAuthenticated, user } = useMoralis();
    const [userDetails, setUserDetails] = React.useState<any>({});
    // console.log("user",userDetails.attributes.solAddress);
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
   



    return (
        <div>
            <h1 className="text-red-500">Home</h1>
            <button onClick={login}>Login</button>
            <p>Sol address: {userDetails?.attributes?.solAddress}</p>
        </div>
    );
}

export default Home;