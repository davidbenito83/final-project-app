import React from 'react'
import { Product } from "../product";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

interface Props {
  product: Product
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
          <td className="cell-table"><Link className="f-right mx-1" to={'/user/'+product.userAssoc}><Icon>visibility</Icon></Link> <Link className="f-right mx-1" to={'/user/'+product.userAssoc}><Icon>edit</Icon></Link></td>
        </tr>
      </tbody>
    </table>
    {/*<div id="popup1" className="overlay">*/}
    {/*  <div className="popup">*/}
    {/*    <h2>Here i am</h2>*/}
    {/*    <a className="close" href="#">&times;</a>*/}
    {/*    <div className="content">*/}
    {/*      Thank to pop me out of that button, but now i'm done so you can close this window.*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*</div>*/}
  </div>
);
