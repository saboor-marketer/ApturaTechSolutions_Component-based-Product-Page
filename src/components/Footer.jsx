import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>ShopHub</h5>
            <p>Your one-stop destination for quality products at great prices.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">Products</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">FAQ</a></li>
              <li><a href="#" className="footer-link">Shipping Info</a></li>
              <li><a href="#" className="footer-link">Returns</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">&copy; 2026 ShopHub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
