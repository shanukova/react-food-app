import { Fragment } from "react/cjs/react.production.min";
import ReactDom from "react-dom";

import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>
};

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  );
};

const portalEl = document.getElementById('overlays');

const Modal = props => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onClick={props.onClose} />, portalEl)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEl
      )}
    </Fragment>
  );
};

export default Modal;
