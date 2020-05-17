import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from "./routes";
import Icon from '@material-ui/core/Icon';
import { Clock } from './components/Clock'

export const Header: React.FC = () => {
    return (
      <nav className="header-nav">
        <div className="row-nav-icons">
          <Clock />
          <Link onClick={() => localStorage.removeItem("access_token")}
                to={routes.home.path}><Icon>exit_to_app</Icon></Link>
          <Link to={routes.user.path}><Icon>person</Icon></Link>
          <Link to={routes.protected.path}><Icon>security</Icon></Link>
          <Link to={routes.dashboard.path}><Icon>home</Icon></Link>
        </div>
      </nav>
    )
}
