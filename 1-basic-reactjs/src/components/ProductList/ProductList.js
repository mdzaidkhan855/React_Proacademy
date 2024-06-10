import { useState } from "react";
import Products from "./Products";

function ProductList(props) {
  // let [newProductList, updateProductList] = useState(products);
  // if(props.newProduct){
  //     updateProductList([props.newProduct, ...products]);
  //     props.newProduct = null
  // }
  if(props.newProductList === null || props.newProductList.length === 0){
    return <h1>There is no product</h1>
  }
  return props.newProductList.length === 0 ? <h1>There is no product</h1> :
  (
    <ul className="list-group shadow">
      {props.newProductList.map((product) => {
        return (
          <Products
            key={product?.pID}
            id={product?.pID}
            name={product?.pName}
            description={product?.desc}
            isAvailable={product?.isAvailable}
            imageUrl={product?.image}
            price={product?.price}
          />
        );
      })}
    </ul>
  );
}

export default ProductList;
