import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Kanuorie Task Manager</h2>

      <div className="nav-links">
        {token && user && (
          <span className="user-email">👤 {user.email}</span>
        )}

        <Link to="/dashboard">Dashboard</Link>
        {!token && <Link to="/login">Login</Link>}
        {!token && <Link to="/register">Register</Link>}

        {token && (
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}