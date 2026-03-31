import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const menuRef = useRef();

  const token = localStorage.getItem("token");
  let user = null;
  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch {
    user = null;
  }
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  // ✅ Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <h2 className="logo">Kanuorie Task Manager</h2>

      {/* DESKTOP NAV */}
      <div className="nav-links">
        {token && user && (
          <span className="user-email">👤 {user.email}</span>
        )}

        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      {/* MOBILE MENU */}
      <div className="menu-container" ref={menuRef}>
        <button
          className={`menu-btn ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div className={`dropdown ${open ? "show" : ""}`}>
          
          {/* USER INFO */}
          <div className="user-info">
            👤 {token && user ? user.email : "Guest"}
          </div>

          <div className="divider" />

          {/* LINKS */}
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/dashboard" onClick={() => setOpen(false)}>
            Dashboard
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <Link to="/privacy-policy" onClick={() => setOpen(false)}>
            Privacy Policy
          </Link>

          <Link to="/terms" onClick={() => setOpen(false)}>
            Terms of Service
          </Link>

          <Link to="/cookies" onClick={() => setOpen(false)}>
            Cookie Policy
          </Link>

          {!token && (
            <>
              <Link to="/login" onClick={() => setOpen(false)}>
                Login
              </Link>
              <Link to="/register" onClick={() => setOpen(false)}>
                Register
              </Link>
            </>
          )}

          {token && (
            <>
              <div className="divider" />
              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}