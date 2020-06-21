import { Dashboard } from './views/Dashboard'
import { Users } from './views/Users'
import { UserDetail } from "./views/UserDetail";
import { Repairs } from "./views/Repairs";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { Logout } from "./views/Logout";
import { Products } from "./views/Products";
import { Error404 } from "./views/404";

export const routes = {

  home: {
    path:'/',
    name: "Login",
    icon: "pe-7s-graph",
    component: Login
  },

  login: {
    path:'/login',
    name: "Login",
    icon: "pe-7s-graph",
    component: Login
  },
  logout: {
    path:'/logout',
    name: "Logout",
    icon: "pe-7s-graph",
    component: Logout
  },
  products: {
    path:'/products',
    name: "Products",
    icon: "pe-7s-graph",
    component: Products
  },
  repairs: {
    path:'/repairs',
    name: "Repairs",
    icon: "pe-7s-graph",
    component: Repairs
  },
  users: {
    path:'/users',
    name: "Users",
    icon: "pe-7s-graph",
    component: Users
  },
  user: {
    path:'/user',
    name: "User Detail",
    icon: "pe-7s-graph",
    component: UserDetail
  },
  dashboard: {
    path:'/dashboard',
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  error404: {
    path:'/error404',
    name: "Error 404",
    icon: "pe-7s-graph",
    component: Error404
  }
}
