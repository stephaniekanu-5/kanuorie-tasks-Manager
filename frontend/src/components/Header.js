import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ onSearch }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const menuRef = useRef();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
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

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="header">
      <h2 className="logo">Task Todo</h2>

      <input
        type="text"
        placeholder="Search tasks..."
        value={query}
        onChange={handleChange}
        className="search"
      />

      {/* Hamburger */}
      <div className="menu-container" ref={menuRef}>
        <button
          className={`menu-btn ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div className={`dropdown ${open ? "show" : ""}`}>
          {!token ? (
                
            <div className="user-info">👤 Guest</div>
            ) : null}
            <>
              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link to="/login" onClick={() => setOpen(false)}>
                Login
              </Link>
              <Link to="/register" onClick={() => setOpen(false)}>
                Register
              </Link>
            </>
          {token && user && (
            <>
              <div className="user-info">
                👤 {user?.email}
              </div>
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
    </div>
  );
}