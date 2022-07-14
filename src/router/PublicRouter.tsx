import React from "react";
import {
  Route,
  Routes,

} from "react-router-dom";
import NotFound from "../views/NotFound";
import PublicRoutes from "./routes";

export interface CustomRouterProps { }

function CustomRouter(props: CustomRouterProps) {
  return (
    <Routes>
      {PublicRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} element={<prop.component />} />;
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default CustomRouter;