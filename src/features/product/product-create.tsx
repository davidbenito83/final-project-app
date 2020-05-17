import React, { useState } from 'react'
import { Button } from '../../core/components/button/button'
import { Product } from '../product'

interface Props {
  onCreate(
    productName: string,
    productDescription: string,
    productImage: string,
    quantity: number,
    userAssoc: string,
    state: boolean
  ): void
  products: Product[]
}

export const ProductCreate: React.FunctionComponent<Props> = ({ onCreate, products }) => {
  const [productName, setproductName] = useState('')
  const [productDescription, setproductDescription] = useState('')
  const [productImage, setproductImage] = useState('')
  const [quantity, setquantity] = useState('')
  const [userAssoc, setuserAssoc] = useState('')


  return (
    <>
      <form action="/products/new" method="POST" className="form-type-post">
        <label htmlFor="nombre">Nombre del producto</label><br />
        <input type="text" name="name" className="form-control" id="nombre" placeholder="Nombre"
               value={productName} onChange={(event) => setproductName(event.target.value)} required></input><br />
        <label htmlFor="cantidad">Cantidad que desea pujar</label><br />
        <input type="number" name="quantity" className="form-control" id="cantidad" placeholder="Cantidad"
               value={quantity} onChange={(event) => setquantity(event.target.value)} required></input><br />
        <label htmlFor="urlimagen">Imagen del producto</label><br />
        <input type="text" name="image" className="form-control" id="urlimagen" placeholder="URL de la imagen"
               value={productImage} onChange={(event) => setproductImage(event.target.value)} required></input><br />
        <label htmlFor="user">Usuario del producto</label><br />
        <input type="text" name="userAssoc" className="form-control" id="user" placeholder="Usuario del producto"
               value={userAssoc} onChange={(event) => setuserAssoc(event.target.value)} required></input><br />
        <label htmlFor="descripcion">Descripción del producto</label><br />
        <textarea name="description" className="form-control" id="descripcion" placeholder="Descrición"
               value={productDescription} onChange={(event) => setproductDescription(event.target.value)} required></textarea><br />
        <input type="hidden" name="state" className="form-control" id="validationDefault01"
               value="true"></input><br />
        <Button submit>Crear Producto</Button>
      </form>
    </>
  )
}
