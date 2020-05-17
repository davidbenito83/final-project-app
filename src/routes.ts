import { Dashboard } from './views/Dashboard'
import { Users } from './views/Users'
import { User } from "./views/UserDetail";
import { Repair } from "./views/Repairs";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { Products } from "./views/Products";

export const routes = {

  login: {
    path:'/login',
    name: "Login",
    icon: "pe-7s-graph",
    component: Login
  },
  protected: {
    path:'/protected',
    name: "Protected",
    icon: "pe-7s-graph",
    component: Home
  },
  home: {
    path:'/home',
    name: "Home",
    icon: "pe-7s-graph",
    component: ProtectedRoute
  },
  products: {
    path:'/products',
    name: "Products",
    icon: "pe-7s-graph",
    component: Products
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
    component: User
  },
  dashboard: {
    path:'/dashboard',
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  repairs: {
    path:'/repair',
    name: "Repair",
    icon: "pe-7s-graph",
    component: Repair
  }
}
