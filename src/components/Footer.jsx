import { Icon } from "@iconify/react";
import { useState } from "react";
const Footer = () => {
  const [socile, setSociol] = useState([
    "ri:twitter-fill",
    "ri:facebook-fill",
    "ri:instagram-fill",
    "bxl:skype",
    "ri:linkedin-box-fill"
  ]);
  return (
    <>
      <footer id="footer">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h4>Join Our Newsletter</h4>
                <p>Our Team Will Update You.</p>
                <form action="">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>ZSIcon</h3>
                <p>
                  Gulshan-e-Iqbal Block 6 <br />
                  St-5 row 2, Office#2 Amjad view
                  <br />
                  Karachi.
                  <br />
                  <br />
                  <strong>Mobile#:</strong>+92-343-8063996 or +92-316-2867017
                  <br />
                  <strong>Email:</strong>Support@zsicon.com
                  <br />
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>

                <ul>
                  <li>
                    <Icon icon="bx:chevron-right" className="icon" />
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <Icon icon="bx:chevron-right" className="icon" />
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <Icon icon="bx:chevron-right" className="icon" />
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <Icon icon="bx:chevron-right" className="icon" />
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <Icon icon="bx:chevron-right" className="icon" />
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <Icon icon="bx:chevron-right" className="icon" />
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <Icon icon="bx:chevron-right" className="icon" />
                    <a href="#">Web Designing</a>
                  </li>
                  <li>
                    <Icon icon="bx:chevron-right" className="icon" />
                    <a href="#">CMS (Content Management System)</a>
                  </li>
                  <li>
                    <Icon icon="bx:chevron-right" className="icon" />
                    <a href="#">SEO</a>
                  </li>
                  <li>
                    <Icon icon="bx:chevron-right" className="icon" />
                    <a href="#">Graphic Designing</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>
                  You Can Follow us on Social Network, We Also Update on Social
                  Network of Our Privacy Policies and Terms and Conditions.
                </p>
                <div className="social-links mt-3">
                  {socile.map((item, i) => {
                    return (
                      <a href="https://www.facebook.com/wasiq.khan.IT/">
                        <Icon icon={item} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container footer-bottom clearfix">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>ZSIcon</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="">ZSIcon</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
