import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from "./routes";
import Icon from '@material-ui/core/Icon';

export const Header: React.FC = () => {
    return (
      <nav className="header-nav">
        <div className="row-nav-icons">
          <Link onClick={() => localStorage.removeItem("access_token")}
                to={routes.login.path}><Icon>exit_to_app</Icon></Link>
          <Link to={routes.user.path}><Icon>person</Icon></Link>
          <Link to={routes.dashboard.path}><Icon>home</Icon></Link>
        </div>
      </nav>
    )
}
