import React from 'react'
import { Repair } from "../repair";
import { RepairCard } from "./repairCard";

export const RepairsList: React.FunctionComponent<{
  repairs: Repair[]
}> = ({ repairs }) => {
  return (
    <div className="wrapper-content">
        {repairs.map(repair => (
          <RepairCard key={repair.name} repair={repair} />
        ))}
    </div>
  )
}
