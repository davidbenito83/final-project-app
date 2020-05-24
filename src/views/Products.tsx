import React, { useEffect, useState } from "react";
import { Role } from "../features/permissions/role";
import { RoleContext } from "../features/role-context";
import { Link } from "react-router-dom";
import { ProductsList } from "../features/lists/products-list";
import { Product } from "../features/product";
import { Repositories } from "../features/repos/Repositories";
// import { Modal } from "../core/components/modal/modal";
import { ProductCreate } from "../features/product/product-create";

export const Products: React.FC = () => {
  const [role, setRole] = useState<Role>('user')
  const [products, setProducts] = useState<Product[]>([])

  async function createProduct(name: string, description: string, image: string, quantity:number, userAssoc:string ) {
    const newProduct: Product = { id: Math.random() * 1000, name:name, description:description, image:image, quantity:quantity, state:true, userAssoc:userAssoc}
    setProducts([...products, newProduct])
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  async function fetchProducts() {
    const productsRepository = new Repositories()
    const products = await productsRepository.findAllProducts()
    setProducts(products)
  }

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      <>
        <h2 className="title-section">Crear nuevo producto</h2>
        <div className="wrapper">
          <div>
            <ProductCreate onCreate={createProduct} products={products} />
          </div>
        </div>
        <h2 className="title-section">Listado de productos</h2>
        <ProductsList products={products}></ProductsList>
      </>
    </RoleContext.Provider>
  )
}