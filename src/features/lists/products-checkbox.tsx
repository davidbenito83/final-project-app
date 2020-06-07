import React from 'react'
import { Product } from "../product";

export const ProductsCheckbox: React.FunctionComponent<{
  products: Product[]
}> = ({ products }) => {
  return (
    <select id="chkproducts" name="productsAssoc" multiple={true}>
      {products.map(product => (
        <option key={product.name} value={product.id}>{product.name}</option>
      ))}
    </select>
  )
}
