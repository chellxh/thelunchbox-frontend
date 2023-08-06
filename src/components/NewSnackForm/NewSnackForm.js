import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewSnackForm.css";

function NewSnackForm() {
  const [snack, setSnack] = useState({
    name: "",
    url: "",
    type: "",
    released_date: "",
    rating: "",
    is_favorite: false,
  });
  const navigate = useNavigate();
  let api = process.env.REACT_APP_API_URL;

  function handleCheckBoxChange(event) {
    setSnack({ ...snack, [event.target.id]: event.target.checked });
    console.log(snack);
  }

  function handleTextChange(event) {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      let result = await axios.post(`${api}/snacks`, snack);
      console.log(result.data);

      alert("Snack is added!");
      navigate("/snacks");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1 className="snack-container-new">New</h1>
      <div className="snack-container-form">
        <form onSubmit={handleSubmit}>
          <div className="snack-new-input">
            <label htmlFor="name">
              <span style={{ fontWeight: "bold" }}>Name</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={snack.name}
              onChange={handleTextChange}
              required
            />
          </div>

          <div className="snack-new-input">
            <label htmlFor="url">
              <span style={{ fontWeight: "bold" }}>Url</span>
            </label>
            <input
              type="text"
              id="url"
              name="url"
              value={snack.url}
              onChange={handleTextChange}
              required
            />
          </div>

          <div className="snack-new-input">
            <label htmlFor="type">
              <span style={{ fontWeight: "bold" }}>Type</span>
            </label>
            <input
              type="text"
              id="type"
              name="type"
              value={snack.type}
              onChange={handleTextChange}
            />
          </div>

          <div className="snack-new-input">
            <label htmlFor="released_date">
              <span style={{ fontWeight: "bold" }}>Date</span>
            </label>
            <input
              type="date"
              id="released_date"
              name="released_date"
              value={snack.date}
              onChange={handleTextChange}
            />
          </div>

          <div className="snack-new-input">
            <label htmlFor="rating">
              <span style={{ fontWeight: "bold" }}>Rating</span>
            </label>
            <input
              type="number"
              min="0"
              max="5"
              id="rating"
              name="rating"
              value={snack.rating}
              onChange={handleTextChange}
            />
          </div>

          <div className="snack-new-checkbox">
            <label htmlFor="is_favorite">
              <span style={{ fontWeight: "bold" }}>Favorite</span>
            </label>
            <input
              type="checkbox"
              id="is_favorite"
              name="is_favorite"
              checked={snack.is_favorite}
              onChange={handleCheckBoxChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
        
      </div>
    </div>
  );
}

export default NewSnackForm;
