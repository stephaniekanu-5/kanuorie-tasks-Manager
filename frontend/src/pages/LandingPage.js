import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

export default function LandingPage() {
  // const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleDashboard = () => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="landing">
      {/* HERO */}
      <section className="hero">
        <h2>Organize Your Tasks Like a Pro</h2>
        <p>
          A modern Kanban board with drag & drop, authentication, and task editing.
        </p>
        <button onClick={handleDashboard}>Get Started</button>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="card">
          <h3>📌 Drag & Drop</h3>
          <p>Move tasks easily between columns.</p>
        </div>
        <div className="card">
          <h3>🔐 Secure Auth</h3>
          <p>Login and register safely.</p>
        </div>
        <div className="card">
          <h3>⚡ Fast UI</h3>
          <p>Clean and responsive design.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h3>Ready to boost productivity?</h3>
        <button onClick={handleDashboard}>Start Now</button>
      </section>
   </div>
  );
}