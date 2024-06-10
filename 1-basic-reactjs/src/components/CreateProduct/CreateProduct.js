import { useState } from "react";
import ProductForm from "./ProductForm";

function CreateProduct(props) {
  let [showForm, updateShowForm] = useState(false);

  function onCreateProduct(product) {
    props.createProduct(product);
  }
  function onCreateNewproduct(){
    updateShowForm(true)
  }

  function onProductSubmittedOrCanvelled(){
    updateShowForm(false)
  }
  return (
    <div style={{ backgroundColor: "white", padding: "10px 20px" }}>
         {! showForm && <button onClick={onCreateNewproduct}> Create Product</button>}
          {showForm && <ProductForm createProduct={onCreateProduct} 
             onCancel={onProductSubmittedOrCanvelled}
             ></ProductForm> }
            
            
         
    </div>
  );
}

export default CreateProduct;
