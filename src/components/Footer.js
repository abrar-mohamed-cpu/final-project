import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2>Lamiva</h2>
      <p>pharmacy delivery</p>
      <div className="footer-icons">
        <FaFacebook />
        <FaInstagram />
        <FaWhatsapp />
        <FaLinkedin />
        <FaTiktok />
      </div>
    </footer>
  );
}

export default Footer;