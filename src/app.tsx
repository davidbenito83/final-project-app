import React, { useState } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Header } from './header'
import { routes } from './routes'
import { PrivateRoute } from './private-route'
import { RoleContext } from './features/role-context'
import { Role } from './features/permissions/role'
import { Dashboard } from './views/Dashboard'
import { Users } from './views/Users'
import { Products } from "./views/Products";
import { UserDetail } from "./views/UserDetail2";
import { Repair } from "./views/Repairs";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Login } from "./views/Login";
import { Sidebar } from "./sidebar";

export const App: React.FC = () => {
    const [role, setRole] = useState<Role>('user')
    return (
      <div className="wrapper">
        <RoleContext.Provider value={{ role, setRole }}>
            <Router>
                <Sidebar />
                <div className="main-content">
                    <div className="index-header">
                        <Header />
                    </div>
                    <div className="index-container">
                        <Switch>
                            <Route path={routes.home.path} exact>
                                <h1>Home</h1>
                            </Route>
                            <Route path={routes.login.path}>
                                <Login />
                            </Route>
                            <PrivateRoute>
                                <Route path={routes.dashboard.path} exact>
                                    <Dashboard />
                                </Route>
                                <Route path={routes.products.path}>
                                    <Products />
                                </Route>
                                <Route path={routes.users.path}>
                                    <Users />
                                </Route>
                                <Route path={routes.user.path + '/:id'}>
                                    <UserDetail />
                                </Route>
                                {/*
                                <Route path={routes.users.path + '/:id'} children={<User />} />
                                */}
                                <Route path={routes.user.path + '/:id' + routes.repairs.path + '/:task'} children={<Repair />} />
                                <Route path={routes.protected.path}>
                                    <ProtectedRoute />
                                </Route>
                            </PrivateRoute>
                            <Route path={routes.home.path} exact>
                                <h1>Logout</h1>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </RoleContext.Provider>
      </div>
    )
}
