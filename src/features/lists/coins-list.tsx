import React from 'react'
import { RepoGetApi } from "../repos/RepoGetApi";
import { Coin } from "./coin";

export const CoinsList: React.FunctionComponent<{
  coins: RepoGetApi[]
}> = ({ coins }) => {
  return (
    <ul>
      {coins.map(coin => (
        <Coin key={coin.name} coin={coin} />
      ))}
    </ul>
  )
}
