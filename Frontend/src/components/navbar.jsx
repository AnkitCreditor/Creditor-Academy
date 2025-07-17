import logo from '../assets/creditorlogo.png'; 
const Navbar = () => {
  return (
    <header style={{
      background: "linear-gradient(to right, #f2f4f7, #e5eaef)",
      padding: "20px 5%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "'Poppins', sans-serif",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)"
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={logo}
          alt="Creditor Academy"
          style={{ height: "40px" }}
        />
        <div>
         
        
        </div>
      </div>

      {/* Nav Links */}
      <nav style={{ display: "flex", alignItems: "center", gap: "40px" }}>
        <a href="#" style={linkStyle}>Private merchant</a>
        <a href="#" style={linkStyle}>Membership</a>
        <a href="#" style={linkStyle}>Contact</a>
        <a href="#" style={linkStyle}>I want Remedy NOW</a>
        <a href="#" style={{
          background: "#0D88C2",
          color: "#fff",
          padding: "10px 25px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "1rem",
          transition: "background 0.3s ease"
        }}
        onMouseOver={e => e.target.style.background = "#0b7ab0"}
        onMouseOut={e => e.target.style.background = "#0D88C2"}
        >
          Admin
        </a>
      </nav>
    </header>
  );
};

const linkStyle = {
  color: "#000",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "1.05rem"
};

export default Navbar;