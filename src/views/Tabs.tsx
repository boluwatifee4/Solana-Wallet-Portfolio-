import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import solLogo from "../assests/images/solLogo.png"
import { useMoralis } from "react-moralis";


type Props = {
    color: string;
}
const Tabs: React.FC<Props> = (props) => {
    const { color } = props;
    const [openTab, setOpenTab] = React.useState(1);
    const portfolio = useSelector((state: any) => state.solana.solPortfolio);
    const { authenticate, isAuthenticated, user } = useMoralis();
    const nftsLength = portfolio?.data?.nfts?.length
    const tokensLength = portfolio?.data?.tokens?.length
    useEffect(() => {
        console.log("portfolio", portfolio);
        // dispatch<any>(getNftMetadata("mainnet", "2P5msLMi5one6S3qBsUwsDqutQkzuDuG9ush1xLcxYVN"))
    }, []);

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex justify-center items-center mb-0 list-none  pt-3 pb-4 "
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0  text-center">
                            <a
                                className={
                                    "text-md  font-semibold capitalize px-3 py-3 leading-normal " +
                                    (openTab === 1
                                        ? "text-white border-b-2 border-white "
                                        : "text-" + color + "-600 ")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Overview
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0  text-center">
                            <a
                                className={
                                    "text-md  font-semibold capitalize px-3 py-3 leading-normal " +
                                    (openTab === 2
                                        ? "text-white border-b-2 border-white "
                                        : "text-" + color + "-600 ")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Tokens
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0  text-center">
                            <a
                                className={
                                    "text-md  font-semibold capitalize px-3 py-3 leading-normal " +
                                    (openTab === 3
                                        ? "text-white border-b-2 border-white "
                                        : "text-" + color + "-600 ")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Nfts
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words">
                        <div className="px-4  flex-auto">
                            <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <div className="mt-10 flex justify-center items-center ">
                                    <div className="w-3/6 p-6 shadow-xl  bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-violet-400">
                                        <div className="flex my-2 py-2 border-b border-purple-300 justify-start items-center">
                                            <img src={solLogo} className="logo-img w-20" alt="" />
                                            <h1 className="font-bold text-3xl">{portfolio?.data?.nativeBalance?.solana > 0 ? portfolio?.data?.nativeBalance?.solana : 0}</h1>
                                        </div>
                                        <div className="flex justify-around py-2 my-2 items-center">
                                            <div className="flex flex-col">
                                                <p className="text-md font-semibold text-purple-300">No of NFTS</p>
                                                <p className="text-2xl">{nftsLength}</p>
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-md font-semibold text-purple-300">No of Tokens</p>
                                                <p className="text-2xl">{tokensLength}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <p>
                                        Completely synergize resource taxing relationships via
                                        premier niche markets. Professionally cultivate one-to-one
                                        customer service with robust ideas.
                                        <br />
                                        <br />
                                        Dynamically innovate resource-leveling customer service for
                                        state of the art customer service.
                                    </p>
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <p>
                                        Efficiently unleash cross-media information without
                                        cross-media value. Quickly maximize timely deliverables for
                                        real-time schemas.
                                        <br />
                                        <br /> Dramatically maintain clicks-and-mortar solutions
                                        without functional solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function TabsRender() {
    return (
        <>
            <Tabs color="pink" />
        </>
    );
}