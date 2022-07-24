import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import solLogo from "../assests/images/solLogo.png"
import { useMoralis } from "react-moralis";
import UsePagination from "../toolkits/usePagination";
import { getNftMetadata, fetchNftUri } from "../store/actions/solana.actions";
import loader from "../assests/images/loader.gif"

type Props = {
    color: string;
}
const Tabs: React.FC<Props> = (props) => {
    const { color } = props;
    const [openTab, setOpenTab] = React.useState(1);
    const [openSoloNft, setOpenSoloNft] = React.useState(false);
    const portfolio = useSelector((state: any) => state.solana.solPortfolio);
    const nft = useSelector((state: any) => state.solana.nfts);
    const nfts = useSelector((state: any) => state.solana.nft);
    const { authenticate, isAuthenticated, user } = useMoralis();
    const nftsLength = portfolio?.data?.nfts?.length
    const tokensLength = portfolio?.data?.tokens?.length
    const [currentPage, setCurrentPage] = React.useState(1);
    const [itemsPerPage, setItemsPerPage] = React.useState(2);
    const dispatch = useDispatch();
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = portfolio?.data?.tokens?.slice(indexOfFirstItem, indexOfLastItem);
    const currentNftItems = portfolio?.data?.nfts?.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const paginateNft = (pageNumber: number) => setCurrentPage(pageNumber);

    const goToLastPage = (val: any) => {
        setCurrentPage(Math.ceil(portfolio?.data?.tokens?.length / itemsPerPage));
    }
    const goToNftLastPage = (val: any) => {
        setCurrentPage(Math.ceil(portfolio?.data?.nfts?.length / itemsPerPage));
    }
    const goToFirstPage = () => {
        setCurrentPage(1);
    }
    const goToNextPage = () => {
        if (currentPage < Math.ceil(portfolio?.data?.tokens?.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    }
    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const getNftMetadatum = (nftId: string) => {
        dispatch<any>(getNftMetadata("devnet", nftId));
        setOpenSoloNft(true);

    }
    useEffect(() => {
        console.log("portfolio", portfolio);
        console.log("nft", nft);
        console.log("nfts", nfts);
        if (nft?.status === 200) {
            dispatch<any>(fetchNftUri(nft?.data?.metaplex?.metadataUri));
        }
        // dispatch<any>(getNftMetadata("mainnet", "2P5msLMi5one6S3qBsUwsDqutQkzuDuG9ush1xLcxYVN"))
    }, [nft,]);

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
                                        <div className=" w-5/6 md:w-3/6 p-6 shadow-xl  bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-violet-400">
                                            <div className="flex my-2 py-2 border-b border-purple-300 justify-start items-center">
                                                <img src={solLogo} className="logo-img w-12 md:w-20" alt="" />
                                                <h1 className="font-bold text-xl md:text-3xl">{portfolio?.data?.nativeBalance?.solana > 0 ? portfolio?.data?.nativeBalance?.solana : 0}</h1>
                                            </div>
                                            <div className="flex justify-around py-2 my-2 items-center">
                                                <div className="flex flex-col">
                                                    <p className="text-sm md:text-md font-semibold text-purple-300">No of NFTS</p>
                                                    <p className="text-2xl">{nftsLength}</p>
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-sm md:text-md font-semibold text-purple-300">No of Tokens</p>
                                                    <p className="text-2xl">{tokensLength}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <div className="mt-10 flex justify-center items-center ">
                                        <div className=" w-5/6 md:w-4/6 p-6 shadow-xl  bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-violet-400">
                                            <div className="flex-col flex md:flex-row flex-wrap justify-around">
                                                {currentItems?.map((item: any, index: number) => {
                                                    return (
                                                        <div className="mx-1 shadow-lg text-left my-2 py-1 p-2 w-[95%] md:w-1/3 bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 text-white rounded-md">
                                                            <div className="my-2 py-1 border-b">
                                                                <h1 className="text-xs my-2">Token Amount:</h1>
                                                                <h1 className="text-left text-sm font-semibold">{item?.amount}</h1>
                                                            </div>
                                                            <div className="my-2 py-1">
                                                                <h1 className="text-xs my-2">Associated Token Address:</h1>
                                                                <h1 className="text-left text-xs">{item?.associatedTokenAddress}</h1>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                )}
                                            </div>
                                            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                                                <p className="text-sm">Page {currentPage} of {Math.ceil(portfolio?.data?.tokens?.length / itemsPerPage)}</p>
                                                <div className="flex items-center justify-evenly md:hidden">
                                                    <h1 onClick={goToPreviousPage} className="m-3 px-2 cursor-pointer bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-violet-400"> ← </h1>
                                                    <h1 onClick={goToNextPage} className="m-3 px-2 cursor-pointer bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-violet-400"> → </h1>
                                                </div>
                                                <div className="hidden md:flex  items-center justify-end">
                                                    <h1 onClick={goToFirstPage} className="cursor-pointer"> ← </h1>
                                                    <UsePagination itemsPerPage={itemsPerPage} totalItems={tokensLength} paginate={paginate} />
                                                    <h1 onClick={goToLastPage} className="cursor-pointer"> → </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <div className="mt-10 flex justify-center items-center ">
                                        <div className="w-[85%] md:w-4/6 p-6 shadow-xl  bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-violet-400">
                                            {
                                                !openSoloNft ?
                                                    (
                                                        <>
                                                            <div className="flex-col flex md:flex-row flex-wrap justify-around">
                                                                {currentNftItems?.map((item: any, index: number) => {
                                                                    return (
                                                                        <div className="mx-1 shadow-lg text-left my-2 py-1 p-2 w-[95%] md:w-1/3 bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 text-white rounded-md">
                                                                            <div className="my-2 py-1 border-b">
                                                                                <h1 className="text-xs my-2">Nft Amount:</h1>
                                                                                <h1 className="text-left text-sm font-semibold">{item?.amount}</h1>
                                                                            </div>
                                                                            <div className="my-2 py-1">
                                                                                <h1 className="text-xs my-2">Associated Nft Address:</h1>
                                                                                <h1 className="text-left text-xs">{item?.associatedTokenAddress}</h1>
                                                                            </div>
                                                                            <button onClick={() => getNftMetadatum(item?.mint)} className="text-sm uppercase bg-gray-400 rounded bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-violet-400 w-full">
                                                                                View Nft
                                                                            </button>
                                                                        </div>
                                                                    )
                                                                }
                                                                )}
                                                            </div>
                                                            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                                                                <p className="text-sm">Page {currentPage} of {Math.ceil(portfolio?.data?.tokens?.length / itemsPerPage)}</p>
                                                                <div className="flex items-center justify-evenly md:hidden">
                                                                    <h1 onClick={goToPreviousPage} className="m-3 px-2  cursor-pointer bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-violet-400"> ← </h1>
                                                                    <h1 onClick={goToNextPage} className="m-3 px-2  cursor-pointer bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-violet-400"> → </h1>
                                                                </div>
                                                                <div className="hidden md:flex  items-center justify-end">
                                                                    <h1 onClick={goToFirstPage} className="cursor-pointer"> ← </h1>
                                                                    <UsePagination itemsPerPage={itemsPerPage} totalItems={tokensLength} paginate={paginate} />
                                                                    <h1 onClick={goToNftLastPage} className="cursor-pointer"> → </h1>
                                                                </div>
                                                            </div>
                                                        </>
                                                    ) :
                                                    (
                                                        <>
                                                            {
                                                            Object.keys(nfts).length > 0 ? (
                                                                <>
                                                                    <h1 className="text-left cursor-pointer bg-gray-400 w-fit p-1 mb-2 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-violet-400" onClick={() => setOpenSoloNft(false)}>Back</h1>
                                                                    <div className="flex flex-col justify-center">
                                                                        <h1>Name: {nft?.data?.name}</h1>
                                                                        <div className="flex justify-center my-2">
                                                                            <img src={nfts?.data?.image} className=" w-60 h-60" alt="" />
                                                                        </div>
                                                                    </div>
                                                                </>

                                                            ) : (
                                                                <div className="flex justify-center items-center mt-6">
                                                                    <img className="md:w-[25%] w-[50%]" src={loader} alt="" />
                                                                </div>
                                                            )
                                                        }
                                                        </>
                                                    )
                                            }
                                        </div>
                                    </div>
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