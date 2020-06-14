import React, { useState } from 'react'
import { Button } from '../../core/components/button/button'
import { Product } from '../product'

interface Props {
  onCreate(
    productName: string,
    productDescription: string,
    productImage: string,
    quantity: number,
    price: number,
    sellPrice: number,
    userAssoc: string,
    state: boolean
  ): void
  products: Product[]
  isUser: boolean
  userEmail: string|undefined
}

export const ProductCreate: React.FunctionComponent<Props> = ({ onCreate, products, isUser, userEmail }) => {
  const [productName, setproductName] = useState('')
  const [productDescription, setproductDescription] = useState('')
  const [productImage, setproductImage] = useState('')
  const [quantity, setquantity] = useState('')
  const [productPrice, setproductPrice] = useState('')
  const [productSellPrice, setproductSellPrice] = useState('')

  return (
    <>
      <form action="/products/new" method="POST" className="form-type-post" role="form">
        <label htmlFor="nombre">Nombre del producto</label><br />
        <input type="text" name="name" className="form-control" id="nombre" placeholder="Nombre"
               value={productName} onChange={(event) => setproductName(event.target.value)} required></input><br />
        <label htmlFor="cantidad">Cantidad de producto en stock</label><br />
        <input type="number" name="quantity" className="form-control" id="cantidad" placeholder="Cantidad"
               value={quantity} onChange={(event) => setquantity(event.target.value)} required></input><br />
        <label htmlFor="price">Precio unitario del producto</label><br/>
        <input type="number" name="price" className="form-control" id="price" placeholder="Precio unitario"
               value={productPrice}
               onChange={(event) => setproductPrice(event.target.value)}></input><br/>
        <label htmlFor="sellPrice">Precio de venta del producto</label><br/>
        <input type="number" name="sellPrice" className="form-control" id="sellPrice" placeholder="Precio de venta"
               value={productSellPrice}
               onChange={(event) => setproductSellPrice(event.target.value)}></input><br/>
        <label htmlFor="urlimagen">Imagen del producto</label><br />
        <input type="text" name="image" className="form-control" id="urlimagen" placeholder="URL de la imagen"
               value={productImage} onChange={(event) => setproductImage(event.target.value)} required></input><br />
        <label htmlFor="descripcion">Descripción del producto</label><br />
        <textarea name="description" className="form-control" id="descripcion" placeholder="Descripción"
               value={productDescription} onChange={(event) => setproductDescription(event.target.value)}></textarea><br />
        <input type="hidden" name="state" className="form-control" id="validationDefault01"
               value="true"></input><br className={isUser ? "display-none" : "display-block"} />
        <Button  submit>Crear Producto</Button>
      </form>
    </>
  )
}
