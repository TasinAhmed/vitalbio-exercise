import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-[auto_1fr] bg-vital-bg text-white h-screen w-screen max-h-screen overflow-hidden">
      <Sidebar />
      <div className="h-screen max-h-screen grid grid-rows-[auto_minmax(0,1fr)]">
        <Header />
        {children}
      </div>
    </div>
  );
};
export default Layout;
