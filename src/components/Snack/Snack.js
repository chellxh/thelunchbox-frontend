import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Snack.css";

function Snack() {
  const BASE_URL = process.env.REACT_APP_API_URL;
  const [singleSnack, setSingleSnack] = useState(null);

  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSnackById();
  }, [id]);

  async function fetchSnackById() {
    try {
      let result = await axios.get(`${BASE_URL}/snacks/${id}`);
      // console.log(result);
      setSingleSnack(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteSnack() {
    try {
      let result = await axios.delete(`${BASE_URL}/snacks/${id}`);
      const { name } = result.data;
      alert(`${name} Has Been Deleted!`);
      navigate("/snacks");
    } catch (e) {
      console.log(e);
    }
  }

  function handleNextButton(id) {
    if (!singleSnack) {
    }
    id++;
    navigate(`/snacks/${id}`);
  }
  function getYearOfRelease() {
    let year = singleSnack.released_date.slice(0, 4);
    return year;
  }
  return (
    <div className="SnackContainer">
      <h2 className="snackH2">Snack</h2>
      {singleSnack && (
        <div className="snack">
          <div className="snackButtons">
            <button onClick={() => navigate(`/snacks/${id - 1}`)}>
              Previous
            </button>
            <button onClick={() => navigate("/snacks")}>All Snacks</button>
            <button onClick={() => handleNextButton(id)}>Next</button>
          </div>
          <div className="snackDiv">
            <div className="snackImage">
              <img
                src={singleSnack.url}
                alt={singleSnack.name}
                height="300px"
              />
            </div>
            <div className="snackInfo">
              <p>Name</p> <span>{singleSnack.name}</span>
              <br />
              <p>Release Year</p> <span>{getYearOfRelease()}</span>
              <br />
              <p>Type</p> <span>{singleSnack.type}</span>
              <br />
              <p>Rating</p> <span>{singleSnack.rating}</span>
              <br />
              <p>Favorite</p>{" "}
              <span>{singleSnack.is_favorite ? "💜" : "❌"}</span>
              <br />
              <br />
            </div>
          </div>
          <div className="snackButtonsLast">
            <Link to={`/snacks/${id}/edit`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => deleteSnack()}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Snack;
