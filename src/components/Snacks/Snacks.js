import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Snacks.css";
import API from "../common/Api/Api";
import Overlay from "../common/Overlay/Overlay";

function Snacks() {
  const [snacks, setSnacks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchSnacksData() {
    try {
      setIsLoading(true);
      let result = await axios.get(`${API}`);

      setSnacks(result.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchSnacksData();
  }, []);

  function calculateRatingEmogi(rating) {
    if (rating === 5 || rating >= 4) {
      return "🤤";
    } else if (rating === "3") {
      return "😑";
    } else if (rating <= 2) {
      return "🤮";
    }
  }

  return (
    <Overlay isLoading={isLoading}>
      <div className="snacksDiv">
        <h1 className="snacks-container-index">Index</h1>
        <div className="snacks-container">
          <div className="snacks-container-table">
            <table id="snacks">
              <tbody>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Rating</th>
                  <th>Favorite</th>
                </tr>

                {snacks.map((snack) => {
                  const releaseDate = new Date(snack.released_date);

                  const formattedDate = releaseDate.toLocaleDateString();

                  return (
                    <tr key={snack.id}>
                      <td>{formattedDate}</td>

                      <td id="snacks-name">
                        <Link to={`/snacks/${snack.id}`}>{snack.name}</Link>
                      </td>
                      <td>{calculateRatingEmogi(snack.rating)}</td>
                      <td>{snack.is_favorite ? "🍘" : ""}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Overlay>
  );
}

export default Snacks;
