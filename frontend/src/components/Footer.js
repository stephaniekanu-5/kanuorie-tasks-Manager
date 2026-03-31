import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* BRAND */}
        <div className="footer-brand">
          <h3>🚀 Kanuorie Tasks</h3>
          <p>Organize your workflow and boost productivity.</p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Product</h4>
          <Link to="/">Home</Link>
          <Link to="/board">Dashboard</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

        {/* COMPANY */}
        <div className="footer-links">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>

        {/* SOCIAL */}
        <div className="footer-links">
          <h4>Connect</h4>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kanuorie Tasks. All rights reserved.</p>
      </div>
    </footer>
  );
}