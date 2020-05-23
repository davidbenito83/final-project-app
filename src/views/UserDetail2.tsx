import React, { useEffect, useState } from "react";
import { RepoGetApi } from "../features/repos/RepoGetApi";
import { useParams } from "react-router-dom";
import { Role } from "../features/permissions/role";
import { RoleContext } from "../features/role-context";
import { ProductCreate } from "../features/product/product-create";
import { Repositories } from "../features/repos/Repositories";
import { Product } from "../features/product";
import { CoinsList } from "../features/lists/coins-list";

export const  User: React.FC = () => {


  const [products, setProducts] = useState<Product[]>([])

  async function createProduct(name: string, description: string, image: string, quantity:number, userAssoc:string ) {
    const newProduct: Product = { id: Math.random() * 1000, name:name, description:description, image:image, quantity:quantity, state:true, userAssoc:userAssoc}
    setProducts([...products, newProduct])
  }

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

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      <>
        <div>
          <h3>Detalles del usuario: {id}</h3>
          <p>Productos asociados</p>
          <ProductCreate onCreate={createProduct} products={products} />


          {/*<ul>*/}
          {/*  {listItems}*/}
          {/*</ul>*/}

          <p>Listado de coins</p>
          <CoinsList coins={coins}></CoinsList>
        </div>
      </>
    </RoleContext.Provider>
  )
}