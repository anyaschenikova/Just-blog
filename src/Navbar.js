import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: "#c8e0f7" }}>
      <h1>Just blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#1360a8",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
