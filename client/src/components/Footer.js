import React from "react";

const Footer = () => {
  return (
    <footer className="footer-content text-center">
      <img
        className="footerImg"
        src={`${process.env.PUBLIC_URL}/images/footer.png`}
        alt="site mascot"
      />
    </footer>
  );
};

export default Footer;
