import React from 'react';

function ProductTable({ products, deleteProduct, editProduct }) {
  return (
    <table>
      <thead>
        <tr>
          <th>📦 Name</th>
          <th>💰 Price</th>
          <th>📊 Quantity</th>
          <th>📅 Added Date</th>
          <th>✏️ Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.price}</td>
            <td>{p.quantity}</td>
            <td>{p.addedDate}</td>
            <td>
              <button onClick={() => editProduct(p)}>Edit</button>
              <button onClick={() => deleteProduct(p.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
