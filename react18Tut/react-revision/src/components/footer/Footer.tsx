import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="footer-links">
          <div className="footer-links-container">
            <h4>For Buisness</h4>
            <p>
              <a href="/">Employee</a>
            </p>
            <p>
              <a href="/">Health plan</a>
            </p>
            <p>
              <a href="/">Indivisual</a>
            </p>
          </div>
          <div className="footer-links-container">
            <h4>Resources</h4>
            <p>
              <a href="/">Employee</a>
            </p>
            <p>
              <a href="/">Health plan</a>
            </p>
            <p>
              <a href="/">Indivisual</a>
            </p>
          </div>
          <div className="footer-links-container">
            <h4>Company</h4>
            <p>
              <a href="/">Employee</a>
            </p>
            <p>
              <a href="/">Health plan</a>
            </p>
            <p>
              <a href="/">Indivisual</a>
            </p>
          </div>
          <div className="footer-links-container">
            <h4>Demo</h4>
            <div className="socialmedia">
              <p>
                <FaFacebook />
              </p>
              <p>
                <FaInstagramSquare />{" "}
              </p>
              <p>
                <FaSquareXTwitter />
              </p>
              <p>
                <FaLinkedin />
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <div className="footer-bottom-copyright">
            <p>copyright All right reserved.</p>
          </div>
          <div className="footer-bottom-links">
            <a href="/">Terms & conditions</a>
            <a href="/">Privacy</a>
            <a href="/">Security</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
