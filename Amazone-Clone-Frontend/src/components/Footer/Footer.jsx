import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Back to top button */}
      <div className={styles.backToTop}>Back to top</div>

      {/* Top Links */}
      <div className={styles.topLinks}>
        <div className={styles.column}>
          <h4>Get to Know Us</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Cares</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Connect with Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Make Money with Us</h4>
          <ul>
            <li>Sell on Amazon</li>
            <li>Affiliate Program</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Let Us Help You</h4>
          <ul>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottom}>
        <div className={styles.logo}>Amazon</div>
        <p>© 2025, Amazon Clone. All Rights Reserved.</p>
        <select className={styles.language}>
          <option>English</option>
          <option>Amharic</option>
          <option>Spanish</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
