import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
export default function Modal({ children, open, className = "" }) {
  const dialog = useRef();
  
  
  useEffect(() => {
    console.log(open)
    const modal = dialog.current;
    console.log(modal)
    if (open) {
        console.log("open on render")
      modal.showModal();
    }

     return () => modal.close();
   }, [open]);
  return ( createPortal(

    <dialog ref={dialog} className={`${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  ))
}
