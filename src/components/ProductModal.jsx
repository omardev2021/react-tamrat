import React, { useState } from 'react';

function ProductModal({ product }) {
  const [quantity, setQuantity] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const incrementValue1 = () => {
    setQuantity(quantity + 1);
  };

  const minus1 = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const addToCartFirst = () => {
    // Your logic to add the product to the cart goes here
    console.log(`Adding product with ID ${product.id} to cart with quantity ${quantity}`);
    // You can send an API request to add the product to the cart
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close2" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h4>{product.name_en}</h4>
            <span className="mb-2">{product.origin_en}</span>
            <h4>{product.price} SAR</h4>
            <h4 hidden>{product.price}</h4>

            <div className="d-flex m-auto align-middle my-3">
              <div className="count-qick mt-2 mr-3 mx-3">
                <i className="bi bi-plus-lg" onClick={incrementValue1}></i>
                <span className="m-1">
                  <input type="text" value={quantity} disabled />
                </span>
                <i className="bi bi-dash-lg" onClick={minus1}></i>
              </div>

              <button className="btn btn-qickshop" onClick={addToCartFirst}>
                Add to Cart
              </button>
            </div>

            <input type="number" value={product.id} hidden />
          </div>
        </div>
      )}
    </div>
  );
}


export default ProductModal;
