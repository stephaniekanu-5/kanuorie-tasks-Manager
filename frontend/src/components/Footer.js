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

          <Link to="/about" className="hover:text-white transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-white transition">
            Contact
          </Link>
          <Link to="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>

          <Link to="/terms" className="hover:text-white transition">
            Terms of Service
          </Link>
          <Link to="/cookies" className="hover:text-white transition">
            Cookie Policy
          </Link>
        </div>

        {/* SOCIAL */}
        {/* SOCIAL */}
        <div className="footer-links">
          <h4>Connect</h4>

          <a
            href="https://www.linkedin.com/in/orie-kanu-8b85683a6?"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/stephaniekanu_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://twitter.com/kanustephanie22"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>

          <a
            href="https://web.facebook.com/stephgirlsplace/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>

          <a
            href="https://github.com/stephaniekanu-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kanuorie Tasks. All rights reserved.</p>
      </div>
    </footer>
  );
}
