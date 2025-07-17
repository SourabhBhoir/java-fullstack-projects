import React, { useEffect ,useState} from 'react'

function ProductForm({ addProduct, editingProduct}) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [addedDate, setAddedDate] = useState('');

    useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(editingProduct.price);
      setQuantity(editingProduct.quantity);
      setAddedDate(editingProduct.addedDate);
    }
  }, [editingProduct]);

    const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name,
      price: parseFloat(price),
      quantity: parseInt(quantity),
      addedDate,
    };
    addProduct(product);
    setName('');
    setPrice('');
    setQuantity('');
    setAddedDate('');
  };

return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" placeholder="Product Name" value={name}
        onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Price" value={price}
        onChange={(e) => setPrice(e.target.value)} required />
      <input type="number" placeholder="Quantity" value={quantity}
        onChange={(e) => setQuantity(e.target.value)} required />
      <input type="date" value={addedDate}
        onChange={(e) => setAddedDate(e.target.value)} required />
      <button type="submit">{editingProduct ? 'Update' : 'Add'} Product</button>
    </form>
  );
}

export default ProductForm