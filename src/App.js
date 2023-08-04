import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Snacks from "./components/Snacks/Snacks";
import Snack from "./components/Snack/Snack";
import NewSnackForm from "./components/NewSnackForm/NewSnackForm";
import EditSnackForm from "./components/EditSnackForm/EditSnackForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/snacks/:id" element={<Snack />} />
          <Route path="/snacks/:id/edit" element={<EditSnackForm />} />
          <Route path="/snacks/new" element={<NewSnackForm />} />
          <Route path="/404" element={<h1>404: Page Not Found!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
