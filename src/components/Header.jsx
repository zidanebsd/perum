import { useState } from "react";

import { Link } from "react-router-dom";
import "../style/Components.scss";

const Header = () => {
  const [showm, setShowm] = useState(true);

  return (
    <div className="container-header">
      {!showm ? (
        <div className="container-header-mobile">
          <div className="box-header-mobile">
            <svg
              version="1.2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="25"
              height="25"
              onClick={() => setShowm((s) => !s)}
            >
              <path
                id="Path 0"
                className="s0"
                d="m32.5 0.1c1.6-0.1 5.3 0.5 8 1.3 2.8 0.7 6.6 2.1 8.5 3 1.9 1 49.3 47.5 207 205.1l101.8-101.7c65.8-65.7 103.1-102.3 105.7-103.6 2.2-1.1 6.7-2.6 10-3.3 5.2-1.1 6.9-1 12.5 0.4 3.6 0.9 8.6 3.2 11.2 5 2.5 1.7 6 5 7.8 7.2 1.7 2.2 4 6.5 5.1 9.5 1.6 4.2 2 7.1 1.6 12-0.2 3.6-1.4 9-2.7 12-2.1 5-12.5 15.7-206 209.5l101 101c91.6 91.6 101.4 101.6 104.3 107.5 2.8 5.7 3.2 7.4 3.2 14.5 0 5.8-0.6 9.2-2.1 12.5-1.1 2.5-4 6.7-6.5 9.4-2.7 3-6.8 6-10.4 7.7-5 2.4-7.3 2.9-13.7 2.9-6.3 0-8.9-0.5-13.5-2.6-5.2-2.4-17.2-14-209.3-205.9l-101.7 101.7c-91.7 91.6-102.4 102-107.5 104.3-4.6 2-7.4 2.5-13.5 2.5-6.5 0-8.8-0.5-13.8-2.8-4-1.9-7.6-4.7-10.8-8.3-2.7-3-5.7-7.8-6.9-10.9-1.6-4.3-1.9-7.1-1.5-12.5 0.3-5.3 1.2-8.5 3.6-13 2.6-5.1 18.7-21.6 205.1-208l-101.4-101.5c-84.3-84.4-101.9-102.4-104.1-107-1.7-3.4-3-7.8-3.3-11.5-0.3-3.9 0.1-8 1.1-11.5 0.9-3 2.9-7.5 4.6-10 1.6-2.5 5.1-6.1 7.8-8 2.6-1.9 7.3-4.2 10.3-5.2 3-0.9 6.9-1.7 8.5-1.7z"
              />
            </svg>
            <div>
              <Link className="link-header-m" to="/">
                <p>Home</p>
              </Link>
              <Link className="link-header-m" to="/about">
                <p>About</p>
              </Link>
              <Link className="link-header-m" to="/discover">
                <p>Discover</p>
              </Link>
              <Link className="link-header-m" to="/information">
                <p>Information</p>
              </Link>
              <Link className="link-header-m" to="/contact">
                <p>Contant Us</p>
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      <div className="box-header">
        <Link className="link-header" to="/">
          <p className="name-header">Home</p>
        </Link>
        <Link className="link-header" to="/about">
          <p className="name-header">About us</p>
        </Link>
        <Link className="link-header" to="/discover">
          <p className="name-header">Discover</p>
        </Link>
        <Link className="link-header" to="/information">
          <p className="name-header">Information</p>
        </Link>
        <Link className="link-header" to="/contact">
          <p className="name-header">Contact us</p>
          {/* <a href="asu" className="name-header">Contact us</a> */}
        </Link>
      </div>
      <div className="box-header-mobile">
        <svg
          version="1.2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="35"
          height="35"
          onClick={() => setShowm((s) => !s)}
        >
          <path
            id="Path 0"
            className="s0"
            d="m321.5 77.3c162.6 0.2 173.2 0.3 176.3 2 1.7 0.9 5 3.6 7.2 6 2.5 2.5 4.7 6.2 5.7 9.2 1 3.2 1.4 6.8 1.1 10-0.3 2.8-1.3 6.6-2.3 8.5-0.9 1.9-3.1 5-4.9 6.8-1.7 1.9-4.9 4.3-11.1 7.7h-347l-4-2.2c-2.2-1.2-5.4-3.6-7.1-5.5-1.8-1.8-4-4.9-4.9-6.8-1-1.9-2-5.7-2.3-8.5-0.2-2.7 0.1-6.8 0.8-9 0.7-2.2 2.4-5.7 3.9-7.9 1.4-2.1 3.9-4.8 5.6-5.9 1.6-1.2 4.6-2.7 6.5-3.4 2.7-1 40.9-1.2 176.5-1zm-63.5 153c211.4 0.2 234.8 0.4 238 1.8 1.9 0.9 5.2 3.1 7.3 5 2.1 1.9 5 5.9 6.4 8.9 2.2 4.7 2.5 6.4 2 12-0.4 4.7-1.4 7.7-3.4 10.9-1.5 2.5-4.6 5.9-6.8 7.6-2.4 1.9-6.2 3.6-9.5 4.3-4.2 0.9-61.6 1.2-239 1-210.4-0.3-233.8-0.5-237-1.9-1.9-0.9-5.3-3.1-7.4-5-2.2-1.9-5-5.7-6.3-8.4-1.3-2.9-2.3-6.9-2.3-9.5 0-2.5 0.4-6.1 1-8 0.5-1.9 1.9-5 3.2-6.9 1.3-1.9 4-4.8 6.2-6.5 2.1-1.7 5.9-3.6 8.5-4.3 3.5-0.9 60.8-1.1 239.1-1zm235.5 154.2l4 2.2c2.2 1.2 5.4 3.6 7.1 5.5 1.8 1.8 4 4.9 5 6.8 1.2 2.4 1.8 5.7 1.9 10.5 0 5.1-0.6 8.1-2 11-1.1 2.2-3.5 5.4-5.2 7.2-1.8 1.8-4.8 4.1-6.5 5.1-3.1 1.6-11.3 1.7-124.8 2-113.3 0.2-121.8 0.1-126-1.5-2.5-0.9-6-3.1-7.9-4.8-1.8-1.6-4.1-4.4-5.1-6-1-1.6-2.4-5.2-3-8-0.8-3.8-0.8-6.4 0.1-10.5 0.7-3.2 2.5-7.1 4.3-9.4 1.7-2.2 4.2-4.8 5.6-5.8 1.4-1 4.3-2.5 6.5-3.3 3.4-1.2 21.7-1.4 246-1z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
