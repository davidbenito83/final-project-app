import React from 'react'
import { RepoGetApi } from "../repos/RepoGetApi";
import { Card } from '../../core/components/card/card'

interface Props {
  coin: RepoGetApi
}

export const Coin: React.FunctionComponent<Props> = ({ coin }) => (
  <Card>
    <div>
      <span></span>
      <li>{coin.name}</li>
    </div>
  </Card>
)
