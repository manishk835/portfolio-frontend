import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon github" />
        </a>
        <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href="https://www.instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon instagram" />
        </a>
      </div>
      <p className="copyright">© 2025 Manish Kumar | All Rights Reserved</p>
      <a href="https://api.whatsapp.com/send?phone=8302958489&amp;text=Inquiry Regarding Admission for My Daughter/Son in [Upcoming Session]" class="btn-whatsapp-pulse">
        <i class="fa fa-phone" aria-hidden="true"></i>  
    </a>
    </footer>
  );
}

export default Footer;
