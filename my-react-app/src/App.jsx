import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import "./App.css"; // Import the CSS file

function App() {
  return (
    <div className="app-background">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={
            <section className="section-spacing">
              <Login />
            </section>
          } />
          <Route path="/signup" element={
            <section className="section-spacing">
              <SignUp />
            </section>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;