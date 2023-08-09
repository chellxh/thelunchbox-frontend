const API =
  process.env.NODE_ENV === "production"
    ? `https://lunchbox.onrender.com/snacks`
    : `http://localhost:3001/snacks`;

export default API;
