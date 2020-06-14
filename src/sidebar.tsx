import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from "./routes";
import Icon from '@material-ui/core/Icon';

export const Sidebar: React.FC = () => {
    return (
      <div className="sidebar">
        <Link to={routes.dashboard.path}><img src="./logo-app-garage.png" className="logo" alt="logo" /></Link>
        <nav className="sidebar-nav">
          <ul>
            <Link to={routes.dashboard.path}>
              <li className="menu-item"><Icon>home</Icon> Dashboard</li>
            </Link>
            <Link to={routes.products.path}>
              <li className="menu-item"><Icon>shopping_basket</Icon> Productos en stock</li>
            </Link>
            <Link to={routes.repairs.path}>
              <li className="menu-item"><Icon>build</Icon> Reparaciones</li>
            </Link>
            <Link to={routes.users.path}>
              <li className="menu-item"><Icon>person</Icon> Usuarios</li>
            </Link>
            <Link onClick={() => localStorage.removeItem("access_token")}
                  to={routes.login.path}>
              <li className="menu-item item-logout"><Icon>exit_to_app</Icon> Logout</li>
            </Link>
          </ul>
        </nav>
      </div>
    )
}
