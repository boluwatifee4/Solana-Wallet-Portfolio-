import React from "react";

type Props = {}

const NotFound: React.FC<Props> = (props) => {
    return (
        <div className="text-white">
        <h1>404</h1>
        <p>Page not found</p>
        </div>
    );
    }

    export default NotFound;