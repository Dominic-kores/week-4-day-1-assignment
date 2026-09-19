const NavBar = ({ brand, links }) => {
  return (
    <nav className="navbar">
      <h2 className="navbar-brand">
        {brand}
      </h2>

      <div className="nav-links">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;