import React from "react";
import { useLocation } from "react-router-dom";

type Props = {
    children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
    const location = useLocation();
    const { pathname } = location;
    const isHome = pathname === "/";
    return (
        <div className="App">
            {/* <header className="">
                <h1>{isHome ? "Home" : "Not Found"}</h1>
            </header> */}
            {children}
        </div>
    );
}


export default AppLayout;