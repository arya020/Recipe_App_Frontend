import { useState, useEffect } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import logo from "../static/dish.svg";

export default function SearchBar({ query, setQuery }) {
  const [focused, setFocused] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    setShowSearch((prev) => !prev);
    setFocused(false);
  };

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
        padding: "0 1rem",
        zIndex: 1000,
        transition: "all 0.3s ease",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
    
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          color: "#2c3e50",
          display: isMobile && showSearch ? "none" : "flex",
          alignItems: "center",
          transition: "opacity 0.3s ease",
          whiteSpace: "nowrap",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            width: "40px",
            height: "40px",
            marginRight: "10px",
          }}
        />
        RecipeFinder
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          flex: 1,
          overflow: "hidden",
        }}
      >
        <input
          type="text"
          placeholder="Search recipes..."
          value={query}
          pattern="[^0-9]+"
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            padding: "10px 15px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: focused ? "2px solid #2ecc71" : "1px solid #ccc",
            outline: "none",
            width: showSearch
              ? isMobile
                ? "calc(100vw - 80px)"
                : "250px"
              : "0px",
            opacity: showSearch ? 1 : 0,
            transition: "all 0.3s ease",
            backgroundColor: showSearch ? "#fff" : "transparent",
            pointerEvents: showSearch ? "auto" : "none",
            marginRight: showSearch ? "10px" : "0",
          }}
        />

        <button
          onClick={handleToggle}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.7rem",
            color: "#2c3e50",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {showSearch ? <FiX /> : <FiSearch />}
        </button>
      </div>
    </header>
  );
}
