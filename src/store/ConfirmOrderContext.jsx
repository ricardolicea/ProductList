import { createContext } from "react";

const ConfirmOrderContext = createContext({
    confirmOrder: false,
    showCheckout: () => {},
    hideCheckout: () => {}
})

export default ConfirmOrderContext;