import { useState} from "react";

export default function Header({ onSearch }) {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
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
    </div>
  );
}