import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../core/components/button/button";

export const Login: React.FC = () => {

    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < charactersLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

  function validacion() {
    localStorage.setItem('access_token', result)
  }

  const history = useHistory()

  return (
    <>
      <h3>Garage APP - Gestiona tu taller</h3>
      <form action="/auth/login" method="POST" className="form-type-post">
        <div className="col-md-4 mb-3">
          <label htmlFor="email">Email</label><br />
          <input type="email" name="email" className="form-control" id="email" placeholder="Email" required />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="password">Password</label><br />
          <div className="input-group">
            <input type="password" name="password" className="form-control" id="password" placeholder="Password" aria-describedby="inputGroupPrepend2" required />
          </div>
        </div>
        <Button onClick={() => validacion()} submit>Acceder</Button>
      </form>
    </>
  )
}