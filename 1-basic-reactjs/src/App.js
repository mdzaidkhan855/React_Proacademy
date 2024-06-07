import React from 'react';
import './App.css'
import ProductList from './components/ProductList/ProductList';
import ProductForm from './components/CreateProduct/ProductForm';



function App(){

  
  return (
    <div>
      <ProductForm></ProductForm>
      <ProductList></ProductList>
    </div>
    
  )
}

export default App;