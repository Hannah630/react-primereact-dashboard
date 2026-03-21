import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{ width: "200px" }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <NavLink to="/" end>
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/users">
            Users
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings">
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}