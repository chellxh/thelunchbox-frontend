import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditSnackForm() {
  let url = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();
  const { id } = useParams();

  const [snack, setSnack] = useState({
    name: "",
    url: "",
    type: "",
    released_date: "",
    rating: "",
    is_favorite: false,
  });

  //fetch snack data
  const getSnack = async () => {
    try {

      const result =  await axios.get(`${url}/snacks/${id}`)
      setSnack(result.data);
    } catch (error) {
      navigate("/404");
    }
  };

  useEffect(() => {
   getSnack();

  },[]);
  
  //text handler 
  function textChangeHandler(event) {
    console.log(event.target.value)
   setSnack({
    ...snack, [event.target.id]: event.target.value
    
   })

  };
  //checkbox handler 
  function checkBoxHandler(event) {
    setSnack({
      ...snack, is_favorite: !snack.is_favorite
    });
  }
//update snack = put
  // const updateSnack =  async (id) => {
  //   try {
  //     await axios.put(`${url}/snacks/${id}`, snack);
  //   } catch (error) {
  //     return error;
  //   }
  // };

  async function submitHandler(event) {
    event.preventDefault();
    try {
      await axios.put(`${url}/snacks/${id}`, snack);
      navigate(`/snacks/${id}`);
    } catch (error) {
      return error;
    }
  }


  return (
    <div>
      <h1 className="snack-container-edit">New</h1>
      <div className="snack-container-form">
        <form onSubmit={submitHandler}>
          <div className="snack-edit-input">
            <label htmlFor="name">
              <span style={{ fontWeight: "bold" }}>Name</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={snack.name}
              onChange={textChangeHandler}
              required
            />
          </div>

          <div className="snack-edit-input">
            <label htmlFor="Image">
              <span style={{ fontWeight: "bold" }}>Image</span>
            </label>
            <input
              type="text"
              id="url"
              name="url"
              value={snack.url}
              onChange={textChangeHandler}
              required
            />
          </div>

          <div className="snack-edit-input">
            <label htmlFor="type">
              <span style={{ fontWeight: "bold" }}>Type</span>
            </label>
            <input
              type="text"
              id="type"
              name="type"
              value={snack.type}
              onChange={textChangeHandler}
            />
          </div>

          <div className="snack-edit-input">
            <label htmlFor="released_date">
              <span style={{ fontWeight: "bold" }}>Date</span>
            </label>
            <input
              type="date"
              id="released_date"
              name="released_date"
              value={snack.date}
              onChange={textChangeHandler}
            />
          </div>

          <div className="snack-edit-input">
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
              onChange={textChangeHandler}
            />
          </div>

          <div className="snack-edit-checkbox">
            <label htmlFor="is_favorite">
              <span style={{ fontWeight: "bold" }}>Favorite</span>
            </label>
            <input
              type="checkbox"
              id="is_favorite"
              name="is_favorite"
              checked={snack.is_favorite}
              onChange={checkBoxHandler}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default EditSnackForm;
