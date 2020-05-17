import React from 'react'
import { Product } from "../product";
import { ProductCard } from "./productCard";

export const ProductsList: React.FunctionComponent<{
  products: Product[]
}> = ({ products }) => {
  return (
    <div className="wrapper-content">
        {products.map(product => (
          <ProductCard key={product.name} product={product} />
        ))}
    </div>
  )
}
