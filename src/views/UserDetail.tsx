import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Role } from "../features/permissions/role";
import { RoleContext } from "../features/role-context";
import { ProductCreate } from "../features/product/product-create";
import { Repositories } from "../features/repos/Repositories";
import { Product } from "../features/product";
import { ProductsList } from "../features/lists/products-list";

export const  UserDetail: React.FC = () => {

  let { id } = useParams()

  const [products, setProducts] = useState<Product[]>([])

  async function createProduct(name: string, description: string, image: string, quantity:number, userAssoc:string ) {
    const newProduct: Product = { id: Math.random() * 1000, name:name, description:description, image:image, quantity:quantity, state:true, userAssoc:userAssoc}
    setProducts([...products, newProduct])
  }

  useEffect(() => {
    fetchUserDetail();
  }, [])

  async function fetchUserDetail() {
    const userRepository = new Repositories()
    const products = await userRepository.findUserDetail(id)
    setProducts(products)
  }

  const [role, setRole] = useState<Role>('user')

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      <>
        <div>
          <h2 className="title-section">Productos asociados al usuario: {id}</h2>
          <ProductsList products={products}></ProductsList>
          <h2 className="title-section">Crear tarea</h2>
          <ProductCreate onCreate={createProduct} products={products} isUser={true} userEmail={id} />
        </div>
      </>
    </RoleContext.Provider>
  )
}