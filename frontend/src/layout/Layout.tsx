import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "./layout.css";

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="layout">
      <Header onToggle={() => setOpen(!open)} />

      <Sidebar open={open} onClose={() => setOpen(false)} />

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
