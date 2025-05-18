import { Navbar } from "./page/navbar";
import { Outlet } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/next"

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <SpeedInsights />
    </>
  );
}
export default Layout;
