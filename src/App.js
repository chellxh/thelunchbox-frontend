import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Spinner from "./components/common/SpinDaBlock/Spinner";

const Home = React.lazy(() => import("./components/Home/Home"));
const NavBar = React.lazy(() => import("./components/NavBar/NavBar"));
const Snacks = React.lazy(() => import("./components/Snacks/Snacks"));
const Snack = React.lazy(() => import("./components/Snack/Snack"));
const NewSnackForm = React.lazy(() =>
  import("./components/NewSnackForm/NewSnackForm")
);
const EditSnackForm = React.lazy(() =>
  import("./components/EditSnackForm/EditSnackForm")
);

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<Spinner />}>
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
      </React.Suspense>
    </div>
  );
}

export default App;
