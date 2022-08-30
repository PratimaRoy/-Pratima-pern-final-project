// function Cart({ cartItems }) {
//     console.log(cartItems);
//     return (
//       <div className="cart-items">
//         {cartItems.map((product) => {
//           return (
//             <div key={product.id}>
//               <img src={product.image} alt={product.name} />
//               <h3>{product.name}</h3>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
  
//   export default Cart;


import React from 'react';

class Cart extends React.Component {
  totalPrice = (cartOfProducts) => {
    return cartOfProducts.reduce((total, product) => {
      return (total += product.amount);
    }, 0);
  };

  displaycartOfProducts = (cartOfProducts, remover) => {
    return cartOfProducts.map((chosenProduct, idx) => {
      return (
        <li key={idx}>
          {chosenProduct.name} ${chosenProduct.amount}
          <button
            onClick={() => {
              remover(chosenProduct.name);
            }}
          >
            Delete this Product
          </button>
        </li>
      );
    });
  };


  discounter = (cartOfProducts) => {
    let discount = 0;
    if (cartOfProducts.length >= 3) {
      discount = 10;
    } else {
      discount = 0;
    }
    return discount;
  };

  render() {
    const { cartOfProducts, remover } = this.props;
    return (
      <div className="Cart">
        <h2>Cart</h2>
        <h5>Discount: {this.discounter(cartOfProducts)}%</h5>
        <h4>Total Price: ${this.totalPrice(cartOfProducts)}</h4>
        <ol>{this.displaycartOfProducts(cartOfProducts, remover)}</ol>
      </div>
    );
  }
}


export default Cart;



