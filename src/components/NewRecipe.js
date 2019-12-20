import React from "react";

const NewRecipe = () => {
  return (
    <div
      style={{
        flexBasis: "10em",
        marginLeft: "10px",
        marginRight: "10px"
      }}
    >
      <br />

      <form>
        <div class="form-row ">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Recipe title</label>
            <input
              placeholder="Al pastor tacos"
              type="email"
              class="form-control"
              id="inputEmail4"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Recipe link</label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Recipe ingredients</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="Enter ingredients separated with a comma"
          ></textarea>
        </div>

        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="inputState">Serves</label>
            <select id="inputState" class="form-control">
              <option selected>1</option>
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
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Vegan?
            </label>
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
