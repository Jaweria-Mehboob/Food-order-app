import { Fragment } from "react";
import ReactDOM from "react-dom";

function Backdrop({ onHideCart }) {
  return (
    <div
      onClick={onHideCart}
      className="fixed inset-0 w-full h-[100vh] z-20 bg-opacity-80 bg-black"
    />
  );
}

const ModalOverlay = (props) => {
  return (
    <div className={props.className}>
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(<ModalOverlay {...props} />, portalElement)}
    </Fragment>
  );
};

export default Modal;
