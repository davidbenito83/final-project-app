import React from 'react'
import { Repair } from "../repair";
import { RepairCard } from "./repairCard";
import { Product } from "../product";

export const RepairsList: React.FunctionComponent<{
  repairs: Repair[]
  products: Product[]
}> = ({ repairs , products}) => {
  return (
    <div className="wrapper-content">
        {repairs.map(repair => (
          <RepairCard key={repair.name} repair={repair} products={products} />
        ))}
    </div>
  )
}
