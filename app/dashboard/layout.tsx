import React from "react";
import { SideNav } from "./_components/side-navbar";
import { Header } from "./_components/header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="md:w-64 hidden md:block fixed">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <Header/>
        {children}</div>
    </div>
  );
};

export default DashboardLayout;
