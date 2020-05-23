import React from 'react'
import { Product } from "../product";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import { Button } from "../../core/components/button/button";
import { Repositories } from "../repos/Repositories";

interface Props {
  product: Product
}

const repo = new Repositories();

function productDelete(id: Object) {

  if(id !== 'null' && typeof id != 'undefined'){

    const removeProduct = repo.deleteProducts(id)

  }else{

    return console.log('No se ha podido borrar el usuario')

  }

}

export const ProductCard: React.FunctionComponent<Props> = ({ product }) => (
  <div className="box-product">
    <img src={product.image} className="img-box-product" alt={product.name}/>
    <h4>{product.name}</h4>
    <p>{product.description}</p>
    <table className="box-product-controls">
      <tbody>
        <tr>
          <td className="cell-table"><Icon>info</Icon> {product.state ? "Activa" : "Desactivada"}</td>
          <td className="cell-table"><Icon>euro_symbol</Icon> {product.quantity}</td>
          <td className="cell-table"><Button className="f-right mx-1" onClick={() => productDelete(product.id)}><Icon>delete</Icon></Button> <Link className="f-right mx-1" to={'/user/'+product.userAssoc}><Icon>visibility</Icon></Link> <Link className="f-right mx-1" to={'/user/'+product.userAssoc}><Icon>edit</Icon></Link></td>
        </tr>
      </tbody>
    </table>
  </div>
);
