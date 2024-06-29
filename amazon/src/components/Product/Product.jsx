import './Product.css'
import { FaShoppingCart } from "react-icons/fa";
const Product = ({ product,handleButton }) => {
    console.log(product)
    const { img, name, price, shipping, seller } = product;


    return (
      <div className="shadow-lg p-4 productItem">
        <img src={img} alt="" />
        <h3>{name.length > 20 ? name.slice(0, 30) + "..." : name}</h3>
        <h4 className="text-xl">Price : $ {price}</h4>
        <p>Shipping Cost:$ {shipping}</p>
        <p className="font-bold">Seller : {seller}</p>

        <button
          className="btn bg-purple-600 py-2 px-5 text-white rounded-lg cart-button"
          onClick={() => handleButton(product)}
        >
          <FaShoppingCart />
          Add To Cart
        </button>
      </div>
    );
};

export default Product;