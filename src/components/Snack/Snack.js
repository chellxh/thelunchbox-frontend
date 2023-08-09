import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Snack.css";
import Overlay from "../common/Overlay/Overlay";

function Snack() {
  const BASE_URL = process.env.REACT_APP_API_URL;
  const [singleSnack, setSingleSnack] = useState(null);

  let { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchSnackById();
  }, [id]);

  async function fetchSnackById() {
    try {
      setIsLoading(true);
      let result = await axios.get(`${BASE_URL}/snacks/${id}`);

      setSingleSnack(result.data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }

  async function deleteSnack() {
    const confirmation = window.confirm(
      "Are you sure you want to delete this snack?"
    );

    if (confirmation) {
      try {
        let result = await axios.delete(`${BASE_URL}/snacks/${id}`);
        const { name } = result.data;
        alert(`${name} Has Been Deleted!`);
        navigate("/snacks");
      } catch (e) {
        console.log(e);
      }
    }
  }

  function getYearOfRelease() {
    let year = singleSnack.released_date.slice(0, 4);
    return year;
  }

  return (
    <Overlay isLoading={isLoading}>
      <div className="SnackContainer">
        <h2 className="snackH2">Snack</h2>
        {singleSnack && (
          <div className="snack">
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
                <p>Release Year</p> <span>{getYearOfRelease()}</span>
                <p>Type</p> <span>{singleSnack.type}</span>
                <p>Rating</p> <span>{singleSnack.rating}</span>
                <p>Favorite</p>
                <span className="heart">
                  {singleSnack.is_favorite ? "💜" : "❌"}
                </span>
                <br />
                <br />
              </div>
            </div>
            <div className="snackButtons">
              <button onClick={() => navigate("/snacks")}>
                Back To All Snacks
              </button>
              <Link to={`/snacks/${id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => deleteSnack()}>Delete</button>
            </div>
          </div>
        )}
      </div>
    </Overlay>
  );
}
export default Snack;
