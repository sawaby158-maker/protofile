import "./header.css";
import Logo from "../../assets/logo-icon.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 200); // تأخير بسيط كأنه loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary px-3 header-nav mx-auto ${
        show ? "show-nav" : ""
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="logo" title="sawaby" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link text-light" href="#home">
              Home
            </a>
            <a className="nav-link text-light" href="#skill">
              Features
            </a>
            <a className="nav-link text-light" href="#project">
              My Pprojects
            </a>
            <a className="nav-link text-light" href="#about">
              contact us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
