import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearAllFromCart } from "../../actions";

export default function CartDisplay() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.store);
  const totalPrice = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  return (
    <>
      {cart.length > 0 && (
        <div className="row">
          <div className="col-md-5 offset-md-3 ">
            <h5 className="font3 mt-2 mb-0">Cart:</h5>
            <hr className="mt-0" />
            <ol>
              {cart.map((item) => {
                return (
                  <li>
                    <div className="d-flex justify-content-between">
                      <span style={{ minWidth: "40%" }}> {item.prodName} </span>
                      <span>${item.price.toFixed(2)}</span>
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="btn btn-outline-dark btn-sm"
                      >
                        X
                      </button>
                    </div>
                    <hr />
                  </li>
                );
              })}
            </ol>
            <h5>Total: ${totalPrice.toFixed(2)} </h5>
            <button
              onClick={() => dispatch(clearAllFromCart())}
              className="btn btn-info"
            >
              Clear
            </button>
            <hr className="mt-0" />
          </div>
        </div>
      )}
    </>
  );
}
