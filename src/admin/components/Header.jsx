import { useState } from "react";
import { Link } from "react-router-dom";

import "../style/Components.scss";

const Header = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="header-admin">
      {!show ? (
        <div className="navigationMobile-admin">
          <div className="box-nav-mob">
            <Link className="menu-nav-adm" to="/admin">
              <p>
                <svg viewBox="0 0 512 512">
                  <g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <path
                      d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0"
                      data-original="#bfc9d1"
                    />
                  </g>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M192 192h128v128H192zm0 0"
                    fill="currentColor"
                    data-original="#82b1ff"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0"
                    fill="currentColor"
                    data-original="#bfc9d1"
                  />
                </svg>
                Dashboard
              </p>
            </Link>
            <Link className="menu-nav-adm" to="/admin/customer">
              <p>Customer</p>
            </Link>
            <Link className="menu-nav-adm">
              <p>Broadcast</p>
            </Link>
            <div className="close-btn">
              <svg
                version="1.2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="20"
                height="20"
                onClick={() => setShow((s) => !s)}
              >
                <path
                  id="Path 0"
                  className="s0"
                  d="m32.5 0.1c1.6-0.1 5.3 0.5 8 1.3 2.8 0.7 6.6 2.1 8.5 3 1.9 1 49.3 47.5 207 205.1l101.8-101.7c65.8-65.7 103.1-102.3 105.7-103.6 2.2-1.1 6.7-2.6 10-3.3 5.2-1.1 6.9-1 12.5 0.4 3.6 0.9 8.6 3.2 11.2 5 2.5 1.7 6 5 7.8 7.2 1.7 2.2 4 6.5 5.1 9.5 1.6 4.2 2 7.1 1.6 12-0.2 3.6-1.4 9-2.7 12-2.1 5-12.5 15.7-206 209.5l101 101c91.6 91.6 101.4 101.6 104.3 107.5 2.8 5.7 3.2 7.4 3.2 14.5 0 5.8-0.6 9.2-2.1 12.5-1.1 2.5-4 6.7-6.5 9.4-2.7 3-6.8 6-10.4 7.7-5 2.4-7.3 2.9-13.7 2.9-6.3 0-8.9-0.5-13.5-2.6-5.2-2.4-17.2-14-209.3-205.9l-101.7 101.7c-91.7 91.6-102.4 102-107.5 104.3-4.6 2-7.4 2.5-13.5 2.5-6.5 0-8.8-0.5-13.8-2.8-4-1.9-7.6-4.7-10.8-8.3-2.7-3-5.7-7.8-6.9-10.9-1.6-4.3-1.9-7.1-1.5-12.5 0.3-5.3 1.2-8.5 3.6-13 2.6-5.1 18.7-21.6 205.1-208l-101.4-101.5c-84.3-84.4-101.9-102.4-104.1-107-1.7-3.4-3-7.8-3.3-11.5-0.3-3.9 0.1-8 1.1-11.5 0.9-3 2.9-7.5 4.6-10 1.6-2.5 5.1-6.1 7.8-8 2.6-1.9 7.3-4.2 10.3-5.2 3-0.9 6.9-1.7 8.5-1.7z"
                />
              </svg>
            </div>
          </div>
        </div>
      ) : null}
      <div className="menu-circle"></div>
      <div className="menu-humburger">
        <svg
          viewBox="0 0 512 512"
          width="50"
          height="50"
          onClick={() => setShow((s) => !s)}
        >
          <path
            className="humburger"
            d="m431.5 106.5l4 2.2c2.2 1.1 5.2 3.4 6.7 5 1.5 1.5 3.4 4.5 4.2 6.5 0.9 2.1 1.6 5.6 1.6 7.8 0 2.2-0.7 5.7-1.6 7.8-0.8 2-2.7 5-4.2 6.5-1.5 1.6-4.4 3.7-6.5 4.8-3.6 1.8-8.5 1.9-179.7 1.9-171.2 0-176.1-0.1-179.8-1.9-2-1.1-4.9-3.2-6.4-4.8-1.5-1.5-3.4-4.5-4.2-6.5-0.9-2.1-1.6-5.6-1.6-7.8 0-2.2 0.7-5.7 1.6-7.8 0.8-2 2.7-5 4.2-6.5 1.5-1.6 4-3.6 5.7-4.5 1.7-0.8 4.3-1.9 6-2.3 1.7-0.4 81.1-0.6 350-0.4zm-239.8 128.5c108.6 0 112.4 0.1 116.1 1.9 2 1.1 4.9 3.2 6.4 4.8 1.5 1.5 3.4 4.5 4.2 6.5 0.9 2.1 1.6 5.6 1.6 7.8 0 2.2-0.7 5.7-1.6 7.8-0.8 2-2.7 5-4.2 6.5-1.5 1.6-4.4 3.7-6.4 4.8-3.7 1.8-7.6 1.9-115.8 1.9-108.2 0-112.1-0.1-115.7-1.9-2.1-1.1-5-3.2-6.5-4.8-1.5-1.5-3.4-4.5-4.2-6.5-0.9-2.1-1.6-5.7-1.6-8 0-2.4 0.9-6.1 1.9-8.3 1-2.2 3.1-5.2 4.7-6.6 1.6-1.5 4.3-3.4 5.9-4.2 2.7-1.5 15-1.6 115.3-1.7zm5.7 128l4.5 2.3c2.5 1.3 5.8 4.2 7.5 6.6 2.7 3.9 3 5 3 12.1 0 7.1-0.3 8.2-3 12.1-1.8 2.6-5 5.3-12.9 9.4h-58.1c-57.5 0-58 0-62-2.2-2.2-1.1-5.2-3.4-6.7-5-1.5-1.5-3.4-4.5-4.2-6.5-0.9-2.1-1.6-5.7-1.6-8 0-2.4 0.9-6.1 1.9-8.3 1-2.2 3.1-5.2 4.7-6.6 1.6-1.5 4.3-3.4 5.9-4.2 2.6-1.4 10.3-1.6 121-1.7z"
          />
        </svg>
      </div>
      <div className="header-profile">
        <p>Log out</p>
      </div>
    </div>
  );
};

export default Header;