import "./Cart.css";

const Cart = ({ cart }) => {
  const total = cart.reduce((prev, current) => prev + current.price, 0);

  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }

    let tax = Math.round(total / 10).toFixed(2);

    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

  return (
    <div className="single-cart">
      <h1 className="text-2xl ">Order Summary</h1>

      <h2 className="mt-5 text-lg font-medium">Cart Item : {cart.length}</h2>

      <p>Total Price : $ {grandTotal}</p>
      <p>Shipping Cost : {shipping}</p>
      <p>Government Tax : {tax}</p>

      <button className="bg-yellow-600 py-2 px-5 rounded-lg text-white font-medium">
        Review Your Order
      </button>
    </div>
  );
};

export default Cart;
