import { useState } from "react";
import logo from '../static/dish.svg';

export default function SearchBar({ query, setQuery }) {
  const [focused, setFocused] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "70px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2rem",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          color: "#2c3e50",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={logo} alt='logo' style={{width: '40px', height: '40px', marginRight: '10px'}} />
        RecipeFinder
      </div>

       <div
        style={{  
          marginRight: "70px",
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            padding: "10px 15px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: focused ? "2px solid #2ecc71" : "1px solid #ccc",
            outline: "none",
            width: "100%",
            maxWidth: "150px",
            transition: "all 0.2s ease-in-out",
          }}
        />
      </div>
    </header>
  );
}
