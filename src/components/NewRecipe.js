import React, { useState } from "react";
import firebase from "../firebase";
import { FaHamburger } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";

const NewRecipe = () => {
  const [title, setTitle] = useState("");
  const [recipeLink, setRecipeLink] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [imageLink, setImageLink] = useState("");
  const [serves, setServes] = useState(Number);
  const [vegan, setVegan] = useState("No");
  const [calories, setCalories] = useState("");
  const [directions, setDirections] = useState([]);
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Choose file");
  const [modalText, setModalText] = useState(
    "Please add ingredients and directions before saving recipe"
  );

  const [inputColorTitle, setInputColorTitle] = useState("form-control");
  const [inputColorIngredients, setInputColorIngredients] = useState(
    "form-control"
  );
  const [inputColorDirections, setInputColorDirections] = useState(
    "form-control"
  );
  // Modal::
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleModalShow = text => {
    setModalText(text);
    setShow(true);
    validInputs();
  };

  //////

  /// Modal 2:::
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleModalShow2 = text => {
    setModalText(text);
    setShow2(true);
  };
  //////

  const validInputs = () => {
    if (
      recipeIngredients.length === 0 &&
      directions.length === 0 &&
      title === ""
    ) {
      setInputColorTitle("form-control is-invalid");
      setInputColorIngredients("form-control is-invalid");
      setInputColorDirections("form-control is-invalid");
    } else if (recipeIngredients.length === 0 && directions.length === 0) {
      setInputColorIngredients("form-control is-invalid");
      setInputColorDirections("form-control is-invalid");
    } else if (recipeIngredients.length === 0 && title === "") {
      setInputColorIngredients("form-control is-invalid");
      setInputColorTitle("form-control is-invalid");
    } else if (directions.length === 0 && title === "") {
      setInputColorDirections("form-control is-invalid");
      setInputColorTitle("form-control is-invalid");
    } else if (title === "") {
      setInputColorTitle("form-control is-invalid");
    } else if (recipeIngredients.length === 0) {
      setInputColorIngredients("form-control is-invalid");
    } else if (directions.length === 0) {
      setInputColorDirections("form-control is-invalid");
    }
  };

  const storeToDataBase = e => {
    e.preventDefault();
    recipeIngredients.length === 0 || directions.length === 0 || title === ""
      ? handleModalShow(
          "Please add a title, ingredients and directions before saving recipe"
        )
      : file === ""
      ? dataUpload()
      : fileUpload();
  };

  const dataUpload = () => {
    firebase
      .firestore()
      .collection("recipes")
      .add({
        title,
        recipeLink,
        imageLink,
        serves: serves === 0 ? "No info" : serves,
        vegan,
        directions: directions.split(/\n/),
        calories: calories ? parseInt(calories) : "No info",
        recipeIngredients: recipeIngredients.split(/\n/)
      })
      .then(() => {
        setTitle("");
        setImageLink("");
        setRecipeIngredients([]);
        setDirections([]);
        setRecipeLink("");
        setServes(0);
        setVegan(false);
        setCalories("");
        setDirections("");
      })

      .then(handleModalShow("Recipe saved!"));
  };

  const fileUpload = () => {
    handleModalShow2("Saving recipe...");
    firebase
      .storage()
      .ref(`images/${fileName}`)
      .put(file)
      .then(uploadTaskSnapshot => {
        return uploadTaskSnapshot.ref.getDownloadURL();
      })
      .then(url => {
        firebase
          .firestore()
          .collection("recipes")
          .add({
            fileName,
            title,
            recipeLink,
            imageLink: url ? url : imageLink,
            serves: serves === 0 ? "No Info" : serves,
            vegan,
            directions: directions.split(/\n/),
            calories: calories ? parseInt(calories) : "No info",
            recipeIngredients: recipeIngredients.split(/\n/)
          })
          .then(handleClose2())
          .then(() => {
            setTitle("");
            setImageLink("");
            setFileName("Choose file");
            setFile("");
            setRecipeIngredients([]);
            setDirections([]);
            setRecipeLink("");
            setServes(0);
            setVegan(false);
            setCalories("");
            setDirections("");
          })
          .then(handleModalShow("Recipe saved!"));
      });
  };

  return (
    <div
      style={{
        flexBasis: "10em",
        marginLeft: "10px",
        marginRight: "10px"
      }}
    >
      <Modal show={show2}>
        <div
          style={{
            margin: "auto",
            color: "#cb444a",
            fontSize: "24px",
            fontWeight: "bold"
          }}
        >
          {modalText}
        </div>
        <br />

        <FaHamburger className="rotate" size="100px" color="#cb444a" />
        <Modal.Body></Modal.Body>
      </Modal>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FaHamburger size="40px" color="#cb444a" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalText}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
      <br />

      <form onSubmit={storeToDataBase}>
        <div className="form-row ">
          <div className="form-group col-md-6">
            <label htmlFor="recipeTitle">Recipe title</label>
            <input
              placeholder="Al pastor tacos"
              type="text"
              className={inputColorTitle}
              id="recipeTitle"
              value={title}
              onChange={e => {
                setTitle(e.currentTarget.value);
                setInputColorTitle("form-control");
              }}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="recipeLink">Recipe link</label>
            <input
              type="text"
              placeholder="www.lostacosnumberone.com"
              className="form-control"
              id="recipeLink"
              value={recipeLink}
              onChange={e => {
                setRecipeLink(e.currentTarget.value);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="recipeIngredients">Ingredients</label>
          <textarea
            className={inputColorIngredients}
            id="recipeIngredients"
            rows="5"
            placeholder="Enter one ingredient per line"
            value={recipeIngredients}
            onChange={e => {
              setRecipeIngredients(e.currentTarget.value);
              setInputColorIngredients("form-control");
            }}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="recipeDirections">Directions</label>
          <textarea
            className={inputColorDirections}
            id="recipeDirections"
            rows="5"
            placeholder="Enter one instruction per line"
            value={directions}
            onChange={e => {
              setDirections(e.currentTarget.value);
              setInputColorDirections("form-control");
            }}
          ></textarea>
        </div>

        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="imagelink">Image link</label>
            <input
              type="text"
              placeholder="www.myimage.com"
              className="form-control"
              id="imagelink"
              value={imageLink}
              onChange={e => {
                setImageLink(e.currentTarget.value);
              }}
            />
          </div>
          <div className="form-group col-md-5">
            <label htmlFor="browseImage">Browse image</label>
            <div className="input-group mb-3">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                  aria-describedby="inputGroupFileAddon01"
                  onChange={e => {
                    setFile(e.target.files[0]);
                    setFileName(e.target.files[0].name);
                  }}
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                  {fileName}
                </label>
              </div>
            </div>
          </div>

          <div className="form-group col-md-1">
            <label htmlFor="calories">Calories</label>
            <input
              type="number"
              className="form-control"
              id="calories"
              value={calories}
              onChange={e => {
                setCalories(e.currentTarget.value);
              }}
            />
          </div>

          <div className="form-group col-md-1">
            <label htmlFor="servings">Servings</label>
            <select
              id="servings"
              type="number"
              className="form-control"
              value={serves}
              onChange={e => {
                setServes(e.currentTarget.value);
              }}
            >
              <option defaultValue>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
          </div>
          <div className="form-group col-md-1">
            <label htmlFor="vegan">Vegan</label>
            <select
              id="vegan"
              className="form-control"
              value={vegan}
              onChange={e => {
                setVegan(e.currentTarget.value);
              }}
            >
              <option defaultValue>No</option>
              <option>Yes</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-danger">
          Save recipe
        </button>
      </form>
    </div>
  );
};

export default NewRecipe;
