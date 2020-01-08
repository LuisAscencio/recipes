import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "./firebase";
import { FaHamburger } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";

export default function UserRecipeCardDetail({ location }) {
  /////Modal///////
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleModalShow = () => {
    setShow(true);
  };
  ////////

  //// Delete item///////

  const deleteDocument = () => {
    firebase
      .firestore()
      .collection("recipes")
      .doc(location.state.id)
      .delete()
      .then(() => {});
  };

  async function deletePhoto() {
    if (location.state.fileName === undefined) {
      return null;
    } else {
      var picToDelete = firebase
        .storage()
        .ref(`images/${location.state.fileName}`);
      picToDelete.delete().then(() => {
        console.log("pic removed");
      });
    }
  }

  ////////

  /////Function for removing pic, data and go to my recipe////
  const deleteFileAndBack = () => {
    deletePhoto()
      .then(handleClose())
      .then(deleteDocument());
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FaHamburger size="40px" color="#cb444a" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Link to={{ pathname: "/myrecipes" }}>
            <Button variant="danger" onClick={deleteFileAndBack}>
              Yes
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
      <div className="card mb-1">
        <img src={location.state.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{location.state.title}</h3>
          <h5 className="card-title">Directions:</h5>

          <ol className="card-text">
            {location.state.directions.map((direction, i) => (
              <li key={i}>{direction}.</li>
            ))}
          </ol>
          <br />
          <h6 className="card-title">Ingredients:</h6>

          <ul className="card-text">
            {location.state.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}.</li>
            ))}
          </ul>

          <p className="card-text">
            <small className="text-muted">
              Calories: {location.state.calories}
            </small>
            <br />
            <small className="text-muted">
              Serves: {location.state.serves}
            </small>
          </p>
          <button
            onClick={handleModalShow}
            type="button"
            className="btn btn-danger"
          >
            Delete recipe
          </button>
        </div>
      </div>
    </div>
  );
}
