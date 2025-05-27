import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/manishk835" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon github" />
        </a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href="https://www.instagram.com/manish.k_8_3_5/?next=%2F" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon instagram" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=918302958489&text=Hello Manish"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp-bottom-right"
        >
          <FaWhatsapp />
        </a>


      </div>
      <p className="copyright">© 2025 Manish Kumar | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
