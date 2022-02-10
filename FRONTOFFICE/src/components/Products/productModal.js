import React from "react";
import { Modal } from "react-bootstrap";

function ProductModal(props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Body>
        <img
          src={props.image}
          style={{ width: "100%", paddingBottom: "10px" }}
          alt="modal"
        />
        <br />
        <p
          style={{
            marginBottom: "0",
            fontFamily: "Dancing Script, cursive",
            textAlign: "center",
            fontSize: "20px"
          }}
        >
          Prezzo: 
          {props.price}{" "}
          <span role="img" aria-label="core">
            €🍰
          </span>
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default ProductModal;
