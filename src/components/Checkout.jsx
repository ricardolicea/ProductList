import Modal from "../UI/Modal";
import ConfirmOrderContext from "../store/ConfirmOrderContext";
import { useContext, useEffect } from "react";

export function Checkout() {
  const confirmCtx = useContext(ConfirmOrderContext);

  useEffect(() => {
    console.log(confirmCtx);
  }, [confirmCtx.confirmOrder]);


  function handleHideCheckout() {
    confirmCtx.hideCheckout();
    console.log(confirmCtx);
  }

  return (
    <Modal className={confirmCtx.confirmOrder && "checkout"} open={confirmCtx.confirmOrder}>
      <h1> Order Submitted</h1>
      {/*       <p>Thank you for buying with us! Your order is ready to pick-up.</p>
       */}{" "}
      <button onClick={handleHideCheckout}>Continue Shopping</button>
    </Modal>
  );
}
