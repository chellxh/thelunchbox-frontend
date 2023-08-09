import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Snacks.css";

function Snacks() {
  const [snacks, setSnacks] = useState([]);
  let url = process.env.REACT_APP_API_URL;

  async function fetchSnacksData() {
    try {
      let result = await axios.get(`${url}/snacks`);

      setSnacks(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSnacksData();
  }, []);
  return (
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
                    <td>{snack.rating}</td>
                    <td>{snack.is_favorite ? "🍘" : ""}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Snacks;
