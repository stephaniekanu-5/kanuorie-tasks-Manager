import { useNavigate, Link } from "react-router-dom";
import { FaTasks, FaLock, FaRocket, FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

export default function LandingPage() {
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
      <motion.section
        className="hero premium-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="hero-left">
          <h2>Organize Your Tasks Like a Pro</h2>
          <p>
            A powerful Kanban task manager with drag & drop, authentication,
            and a sleek modern interface.
          </p>

          <div className="hero-buttons">
            <button onClick={handleDashboard}>Get Started</button>
            <Link to="/register" className="secondary-btn">
              Create Account
            </Link>
          </div>
        </div>

        {/* HERO VISUAL */}
        <div className="hero-right">
          <div className="mock-card">📋 Todo</div>
          <div className="mock-card">🚀 In Progress</div>
          <div className="mock-card">✅ Done</div>
        </div>
      </motion.section>

      {/* FEATURES */}
      <h2 className="section-title">Built for Productivity</h2>
      <section className="features"> 
        <motion.div className="card glass" whileHover={{ scale: 1.05 }}>
          <FaTasks className="icon" />
          <h3>Drag & Drop</h3>
          <p>Seamlessly move tasks across your workflow.</p>
        </motion.div>

        <motion.div className="card glass" whileHover={{ scale: 1.05 }}>
          <FaLock className="icon" />
          <h3>Secure Auth</h3>
          <p>Authentication built with security in mind.</p>
        </motion.div>

        <motion.div className="card glass" whileHover={{ scale: 1.05 }}>
          <FaRocket className="icon" />
          <h3>Fast Performance</h3>
          <p>Optimized UI for speed and responsiveness.</p>
        </motion.div>
        <motion.div className="card glass" whileHover={{ scale: 1.05 }}>
          <FaBars className="icon" />
          <h3>Intuitive Design</h3>
          <p>A clean, modern interface that’s easy to use.</p>
        </motion.div>

      </section>
      {/* TESTIMONIALS */}
<motion.section
  className="testimonials"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="section-title">What Users Say</h2>

  <div className="testimonial-grid">

    <motion.div className="testimonial-card glass" whileHover={{ scale: 1.05 }}>
      <p>
        “This app completely changed how I manage my daily tasks. Super clean and fast!”
      </p>
      <h4>- Sarah K.</h4>
    </motion.div>

    <motion.div className="testimonial-card glass" whileHover={{ scale: 1.05 }}>
      <p>
        “The drag and drop feature is so smooth. Feels like a premium product.”
      </p>
      <h4>- David M.</h4>
    </motion.div>

    <motion.div className="testimonial-card glass" whileHover={{ scale: 1.05 }}>
      <p>
        “Finally a task manager that is simple AND powerful. Love it!”
      </p>
      <h4>- Anita O.</h4>
    </motion.div>

  </div>
</motion.section>
      {/* CTA */}
      <motion.section className="cta premium-cta">
        <h3>Ready to boost productivity?</h3>
        <p>Start managing tasks the smart way today.</p>
        <button onClick={handleDashboard}>Start Now</button>
      </motion.section>

    </div>
  );
}