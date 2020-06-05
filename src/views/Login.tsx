import React from "react";
import { useHistory } from "react-router-dom";
import { routes } from "../routes";
import { Button } from "../core/components/button/button";

export const Login: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <h3>Garage APP - Gestiona tu taller</h3>
      <form action="/auth/login" method="POST" className="form-type-post">
        <div className="col-md-4 mb-3">
          <label htmlFor="email">Email</label><br />
          <input type="email" name="email" className="form-control" id="email" placeholder="Email" value="d@d.com" required />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="password">Password</label><br />
          <div className="input-group">
            <input type="password" name="password" className="form-control" id="password" placeholder="Password" aria-describedby="inputGroupPrepend2" required />
          </div>
        </div>
        <Button
          onClick={() => {
            localStorage.setItem('access_token', 'foo')
            history.push(routes.protected.path)
          }}
          type="submit">Acceder</Button>
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