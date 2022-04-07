import React, { FC } from "react";

import { ReactComponent as FacebookIcon } from "../../assets/footer-facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/footer-instagram-icon.svg";
import { ReactComponent as TweeterIcon } from "../../assets/footer-tweeter-icon.svg";

import "./Footer.scss";

const Footer: FC = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-navigation">
        <div className="footer-navigation__logo">
          <h2>Hekto</h2>
        </div>
        <div className="footer-navigation__categories">
          <h3 className="footer-navigation__title">Categories</h3>
          <ul className="footer-navigation__list">
            <li className="footer-navigation__list-item">
              <a href="#">Laptops & Computers</a>
            </li>
            <li className="footer-navigation__list-item">
              <a href="#">Cameras & Photography</a>
            </li>
            <li className="footer-navigation__list-item">
              <a href="#">Smart Phones & Tablets</a>
            </li>
            <li className="footer-navigation__list-item">
              <a href="#">Video Games & Consoles</a>
            </li>
            <li className="footer-navigation__list-item">
              <a href="#">Waterproof Headphones</a>
            </li>
          </ul>
        </div>
        <div className="footer-navigation__custom-care">
          <h3 className="footer-navigation__title">Custom Care</h3>
          <ul className="footer-navigation__list">
            <li className="footer-navigation__list-item">
              <a href="#">My Account</a>
            </li>
            <li className="footer-navigation__list-item">
              <a href="#">Discount</a>
            </li>
            <li className="footer-navigation__list-item">
              <a href="#">Returns</a>
            </li>
            <li className="footer-navigation__list-item">
              <a href="#">Orders History</a>
            </li>
            <li className="footer-navigation__list-item">
              <a href="#">Order Tracking</a>
            </li>
          </ul>
        </div>
        <div className="footer-navigation__pages">
          <h3 className="footer-navigation__title">Pages</h3>
          <ul className="footer-navigation__list">
            <li className="footer-navigation__list-item">
              <a href="#">Blog</a>
            </li>
            <li className="footer-navigation__list-item">
              <a href="#">Browse the Shop</a>
            </li>
            <li className="footer-navigation__list-item">
              <a href="#">Category</a>
            </li>
            <li className="footer-navigation__list-item">
              <a href="#">Pre-Built Pages</a>
            </li>
            <li className="footer-navigation__list-item">
              <a href="#">Visual Composer Elements</a>
            </li>
            <li className="footer-navigation__list-item">
              <a href="#">WooCommerce Pages</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-inner">
        <h3 className="footer-inner__licence">©Webecy - All Rights Reserved</h3>
        <ul className="footer-inner__social">
          <li className="footer-inner__social-item">
            <a href="#">
              <FacebookIcon />
            </a>
          </li>
          <li className="footer-inner__social-item">
            <a href="#">
              <InstagramIcon />
            </a>
          </li>
          <li className="footer-inner__social-item">
            <a href="#">
              <TweeterIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
