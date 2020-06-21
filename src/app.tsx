import React, { useState } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { routes } from './routes'
import { PrivateRoute } from './private-route'
import { RoleContext } from './features/role-context'
import { Role } from './features/permissions/role'
import { Dashboard } from './views/Dashboard'
import { Users } from './views/Users'
import { Products } from "./views/Products";
import { UserDetail } from "./views/UserDetail";
import { Repairs } from "./views/Repairs";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Login } from "./views/Login";
import { Sidebar } from "./sidebar";

const NoMatchPage = () => {
    return (
      <h3>404 - Not found</h3>
    );
};

export const App: React.FC = () => {
    const [role, setRole] = useState<Role>('user')
    return (
      <div className="wrapper">
          <RoleContext.Provider value={{ role, setRole }}>
              <Router>
                  <Switch>
                      <Route path={routes.home.path}>
                          <div className="login-page">
                              <div className="main-content">
                                  <div className="form-login">
                                      <Login/>
                                  </div>
                              </div>
                          </div>
                      </Route>
                      <Route path={routes.login.path}>
                          <div className="login-page">
                              <div className="main-content">
                                  <div className="form-login">
                                      <Login/>
                                  </div>
                              </div>
                          </div>
                      </Route>
                      <PrivateRoute>
                          <Sidebar/>
                          <div className="main-content">
                              <div className="index-container">
                                  <Route path={routes.dashboard.path} exact>
                                      <Dashboard/>
                                  </Route>
                                  <Route path={routes.products.path}>
                                      <Products/>
                                  </Route>
                                  <Route path={routes.users.path}>
                                      <Users/>
                                  </Route>
                                  <Route path={routes.user.path + "/:id"}>
                                      <UserDetail/>
                                  </Route>
                                  <Route path={routes.repairs.path}>
                                      <Repairs/>
                                  </Route>
                              </div>
                          </div>
                      </PrivateRoute>
                      <Route path={routes.logout.path}>
                          <h1>Logout</h1>
                      </Route>
                      <Route component={NoMatchPage} />
                  </Switch>

              </Router>
          </RoleContext.Provider>
      </div>
    )
}
