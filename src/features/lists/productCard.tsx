import React, { useState } from "react";
import { Product } from "../product";
import Icon from "@material-ui/core/Icon";
import { Button } from "../../core/components/button/button";
import { Modal } from "../../core/components/modal/modal";
import { Repositories } from "../repos/Repositories";

interface Props {
  product: Product
}
export const ProductCard: React.FunctionComponent<Props> = ({ product }) => {

  console.log(product)

const repo = new Repositories();

function productDelete(id: Object) {

  if(id !== 'null' && typeof id != 'undefined'){

    repo.deleteProducts(id)

    window.location.reload();

  }else{

    return console.log('No se ha podido borrar el producto')

  }

}

function modalEdit(product: Product) {
  if(typeof product.id != 'undefined'){
    showModal();
  }else{

    return console.log('No se ha podido editar el producto')

  }
}

  function editProduct(product: Product) {

    if(typeof product.id != 'undefined'){

      repo.updateProducts(product)

      hideModal();

      window.location.reload();

    }else{

      return console.log('No se ha podido modificar el producto')

    }

  }

const [state, setState] = useState({ show: false });

const showModal = () => {
  setState({ show: true })
};
const hideModal  = () => {
  setState({ show: false })
};

const modalHeader = "modal-header";

  const [updateProducts, setUpdateProducts] = useState<Product[]>([])
  const [productName, setproductName] = useState<string>(product.name)
  const [productDescription, setproductDescription] = useState<string>(product.description)
  const [productImage, setproductImage] = useState<string>(product.image)
  const [productQuantity, setproductQuantity] = useState<any>(product.quantity)
  const [productPrice, setproductPrice] = useState<any>(product.price)
  const [productSellPrice, setproductSellPrice] = useState<any>(product.sellPrice)
  const [productUserAssoc, setproductUserAssoc] = useState<string>(product.userAssoc)

  async function modifyproduct(id: Object, name: string, image: string, description: string, quantity:number, price:number, sellPrice:number, state:boolean, userAssoc: string ) {
    const updateProduct: Product = { id: product.id, name: name,  description: description, image: image, quantity: quantity, price:price, sellPrice:sellPrice, state: state, userAssoc: userAssoc}
    setUpdateProducts([...updateProducts, updateProduct])
    editProduct(updateProduct)
  }

return (
  <>
    <div className="box-product">
      <img src={product.image} className="img-box-product" alt={product.name}/>
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <table className="box-product-controls">
        <tbody>
        <tr>
          <td className="cell-table"><Icon>info</Icon> {product.state ? "Activa" : "Desactivada"}</td>
          <td className="cell-table f-right">Stock: {product.quantity}</td>
        </tr>
        <tr>
          <td className="cell-table"><Icon>shopping_cart</Icon> {product.price}</td>
          <td className="cell-table">{product.sellPrice} <Icon>euro_symbol</Icon></td>
          <td className="cell-table f-right padding-b-0"><Button className="f-right mx-1" onClick={() => productDelete(product.id)}><Icon>delete</Icon></Button>
            <Button className="f-right mx-1" onClick={() => modalEdit(product)}><Icon>edit</Icon></Button></td>
        </tr>
        <tr>
          <Modal show={state.show} handleClose={hideModal}>
            <div className={modalHeader}>
              <h3>Editando producto</h3>
              <Button onClick={hideModal}><Icon>close</Icon></Button>
            </div>
            <div>
              <form className="form-type-post">
                <label htmlFor="nombre">Nombre del producto</label><br/>
                <input type="text" name="name" className="form-control" id="nombre" placeholder="Nombre"
                       value={productName}
                       onChange={(event) => setproductName(event.target.value)}></input><br/>
                <label htmlFor="image">Imagen del producto (url)</label><br/>
                <input type="text" name="image" className="form-control" id="image" placeholder="Imagen del producto"
                       value={productImage} onChange={(event) => setproductImage(event.target.value)}></input><br/>
                <label htmlFor="quantity">Cantidad del producto</label><br/>
                <input type="number" name="quantity" className="form-control" id="quantity" placeholder="Cantidad"
                       value={productQuantity}
                       onChange={(event) => setproductQuantity(event.target.value)}></input><br/>
                <label htmlFor="price">Precio unitario del producto</label><br/>
                <input type="number" name="price" className="form-control" id="price" placeholder="Precio unitario"
                       value={productPrice}
                       onChange={(event) => setproductPrice(event.target.value)}></input><br/>
                <label htmlFor="sellPrice">Precio de venta del producto</label><br/>
                <input type="number" name="sellPrice" className="form-control" id="sellPrice" placeholder="Precio de venta"
                       value={productSellPrice}
                       onChange={(event) => setproductSellPrice(event.target.value)}></input><br/>
                <label htmlFor="userAssoc">Usuario asociado del producto</label><br/>
                <input type="text" name="userAssoc" className="form-control" id="userAssoc" placeholder="Descripción"
                       value={productUserAssoc}
                       onChange={(event) => setproductUserAssoc(event.target.value)}></input><br/>
                <label htmlFor="description">Descripción del producto</label><br/>
                <input type="text" name="description" className="form-control" id="description"
                       placeholder="Descripción"
                       value={productDescription}
                       onChange={(event) => setproductDescription(event.target.value)}></input><br/>
                <input type="hidden" name="id" className="form-control" value={product.id}></input>
                <input type="hidden" name="state" className="form-control" value="true"></input><br/>
                <Button
                  onClick={() => modifyproduct(product.id, productName, productImage, productDescription, productQuantity, productPrice, productSellPrice, product.state, productUserAssoc)}>Modificar
                  Producto</Button>
              </form>
            </div>
          </Modal>
        </tr>
        </tbody>
      </table>
    </div>
    </>
);
}
