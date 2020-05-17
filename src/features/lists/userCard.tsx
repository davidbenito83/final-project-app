import React from 'react'
import { RepoGetApi } from "../repos/RepoGetApi";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

interface Props {
  user: RepoGetApi
}

export const UserCard: React.FunctionComponent<Props> = ({ user }) => (
  <tr className="row-table">
    <td className="cell-table">{user.name}</td>
    <td className="cell-table">{user.email}</td>
    <td className="cell-table">{user.role}</td>
    <td className="cell-table">{user.state ? "SI" : "NO"}</td>
    <td className="cell-table"><Link to={'/user/'+user.email}><Icon>visibility</Icon></Link></td>
  </tr>
);
