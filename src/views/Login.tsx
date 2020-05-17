import React from "react";
import { useHistory } from "react-router-dom";
import { routes } from "../routes";

export const Login: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <h1>Login</h1>
      <form action="/auth/login" method="POST">
        <div className="col-md-4 mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className="form-control" id="email" placeholder="Email" value="d@d.com" required />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="password">Password</label>
          <div className="input-group">
            <input type="password" name="password" className="form-control" id="password" placeholder="Password" aria-describedby="inputGroupPrepend2" required />
          </div>
        </div>
        <button
          onClick={() => {
            localStorage.setItem('access_token', 'foo')
            history.push(routes.protected.path)
          }}
          className="btn btn-primary" type="submit">Enviar</button>
      </form>

      {/*<button*/}
      {/*  onClick={() => {*/}
      {/*    localStorage.setItem('access_token', 'foo')*/}
      {/*    history.push(routes.protected.path)*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Login*/}
      {/*</button>*/}
    </>
  )
}