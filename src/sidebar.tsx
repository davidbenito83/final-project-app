import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from "./routes";

export const Sidebar: React.FC = () => {
    return (
      <div className="sidebar">
        <Link to={routes.dashboard.path}><img src="./logo192.png" className="logo" alt="logo" /></Link>
        <nav className="sidebar-nav">
          <ul>
            <Link to={routes.dashboard.path}>
              <li className="menu-item">Dashboard</li>
            </Link>
            <Link to={routes.login.path}>
              <li className="menu-item">Login</li>
            </Link>
            <Link to={routes.protected.path}>
              <li className="menu-item">Protected</li>
            </Link>
            <Link to={routes.products.path}>
              <li className="menu-item">Products</li>
            </Link>
            <Link to={routes.repairs.path}>
              <li className="menu-item">Repairs</li>
            </Link>
            <Link to={routes.users.path}>
              <li className="menu-item">Users</li>
            </Link>
            <Link to={routes.user.path}>
              <li className="menu-item">User Detail</li>
            </Link>
            <Link onClick={() => localStorage.removeItem("access_token")}
                  to={routes.home.path}>
              <li className="menu-item">Logout</li>
            </Link>
          </ul>
        </nav>
      </div>
    )
}
