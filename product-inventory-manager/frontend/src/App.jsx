import React, { useEffect, useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductTable from './components/ProductTable';
import axios from 'axios';
import './index.css';

function App() {
  const[products, setProducts] = useState([]);
  const[editingProduct, setEditingProduct] = useState(null);
  const API_BASE = 'http://localhost:8081/products';

  useEffect(()=>{
    axios.get(API_BASE)
    .then((res) => setProducts(res.data))
    .catch((err)=> console.log(err));
  }, []);

  const addProduct = (product) => {
    if (editingProduct) {
      axios.put(`${API_BASE}/${editingProduct.id}`, product)
        .then(res => {
          setProducts(products.map(p => p.id === editingProduct.id ? res.data : p));
          setEditingProduct(null);
        });
    } else {
      axios.post(API_BASE, product)
        .then(res => setProducts([...products, res.data]));
    }
  };

  
  const deleteProduct = (id) => {
    axios.delete(`${API_BASE}/${id}`)
      .then(() => setProducts(products.filter(p => p.id !== id)));
  };

  const editProduct = (product) => {
    setEditingProduct(product);
  };

    return (
    <div className="container">
      <h1>🛒 Product Inventory Manager</h1>
      <ProductForm addProduct={addProduct} editingProduct={editingProduct} />
      <ProductTable
        products={products}
        deleteProduct={deleteProduct}
        editProduct={editProduct}
      />
    </div>
  );
}

export default App