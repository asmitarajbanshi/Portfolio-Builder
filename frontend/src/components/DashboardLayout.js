import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";  // Create this file separately

export default function DashboardLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar /> {/* Sidebar stays fixed */}
      <div className="flex-1 p-8">
        <Outlet /> {/* This will change dynamically */}
      </div>
    </div>
  );
}
