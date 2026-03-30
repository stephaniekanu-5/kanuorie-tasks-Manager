const express = require("express");
const router = express.Router();
const db = require("../db");
const authMiddleware = require("../middleware/authMiddleware");

/* ================= GET TODOS ================= */
router.get("/", authMiddleware, (req, res) => {
  db.all(
    "SELECT * FROM todos WHERE user_id = ?",
    [req.user.id],
    (err, rows) => {
      if (err) return res.status(500).json(err);
      res.json(rows);
    }
  );
});

/* ================= CREATE TODO ================= */
router.post("/", authMiddleware, (req, res) => {
  const { text, status } = req.body;

  db.run(
    "INSERT INTO todos (text, status, user_id) VALUES (?, ?, ?)",
    [text, status || "backlog", req.user.id],
    function (err) {
      if (err) return res.status(500).json(err);

      res.json({
        id: this.lastID,
        text,
        status: status || "backlog",
      });
    }
  );
});

/* ================= UPDATE TODO ================= */
router.put("/:id", authMiddleware, (req, res) => {
  const { text } = req.body;

  db.run(
    "UPDATE todos SET text = ? WHERE id = ? AND user_id = ?",
    [text, req.params.id, req.user.id],
    function (err) {
      if (err) return res.status(500).json(err);

      res.json({ message: "Updated" });
    }
  );
});

/* ================= MOVE TODO ================= */
router.put("/:id/move", authMiddleware, (req, res) => {
  const { status } = req.body;

  db.run(
    "UPDATE todos SET status = ? WHERE id = ? AND user_id = ?",
    [status, req.params.id, req.user.id],
    function (err) {
      if (err) return res.status(500).json(err);

      res.json({ message: "Updated" });
    }
  );
});

/* ================= DELETE TODO ================= */
router.delete("/:id", authMiddleware, (req, res) => {
  db.run(
    "DELETE FROM todos WHERE id = ? AND user_id = ?",
    [req.params.id, req.user.id],
    function (err) {
      if (err) return res.status(500).json(err);

      res.json({ message: "Deleted" });
    }
  );
});

module.exports = router;