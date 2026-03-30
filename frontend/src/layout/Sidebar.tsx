import { NavLink } from "react-router-dom";
import "./sidebar.css";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      <div className={`sidebar ${open ? "open" : ""}`}>
        {/* <h2 className="logo">Hannah HUANG</h2> */}

        <nav className="menu">
          <NavLink to="/" end className="menu-item" onClick={onClose}>
            <i className="pi pi-home"></i>
            <span>Portfolio</span>
          </NavLink>

          <NavLink to="/websites" className="menu-item" onClick={onClose}>
            <i className="pi pi-globe"></i>
            <span>Website</span>
          </NavLink>

          <NavLink to="/settings" className="menu-item" onClick={onClose}>
            <i className="pi pi-cog"></i>
            <span>Contact</span>
          </NavLink>
        </nav>
      </div>

      {/* overlay 不可以蓋 sidebar */}
      {open && <div className="overlay" onClick={onClose}></div>}
    </>
  );
}
