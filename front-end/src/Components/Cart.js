function Cart({ cartItems }) {
    console.log(cartItems);
    return (
      <div className="cart-items">
        {cartItems.map((product) => {
          return (
            <div key={product.id}>

              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
          <span>${product.price}</span>
            </div>
          );
        })}
      </div>
    );
  }
  



export default Cart;



