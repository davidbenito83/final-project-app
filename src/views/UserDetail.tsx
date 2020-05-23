import React, { useEffect, useState } from "react";
import { RepoGetApi } from "../features/repos/RepoGetApi";
import { Link, useParams } from "react-router-dom";
import { Role } from "../features/permissions/role";
import { RoleContext } from "../features/role-context";
import { TodoTaskApp } from "../features/todoTaskApp";
import { Repositories } from "../features/repos/Repositories";
import { CoinsList } from "../features/lists/coins-list";
// import { UsersList } from "../features/lists/users-list";

export const  User: React.FC = () => {

  const [coins, setCoins] = useState<RepoGetApi[]>([])


  useEffect(() => {
    fetchCoins();
  }, [])

  async function fetchCoins() {
    const coinsRepository = new Repositories()
    const coins = await coinsRepository.findAll()
    setCoins(coins)
  }

  let { id } = useParams()
  const [role, setRole] = useState<Role>('user')
  const tasks = [1, 2, 3, 4, 5];

  const listItems = tasks.map((task) =>
    <li key={task.toString()}>
      <Link to={`/user/${id}/repair/${task}`} key={task}>
        {task}
      </Link>
    </li>
  );

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      <>
        <div>
          <h3>Detalles del usuario: {id}</h3>
          <p>Reparaciones pendientes</p>
          <ul>
            {listItems}
          </ul>
          <TodoTaskApp />

          <p>Listado de coins</p>
          <CoinsList coins={coins}></CoinsList>
        </div>
      </>
    </RoleContext.Provider>
  )
}