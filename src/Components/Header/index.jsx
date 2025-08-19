import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';// Adjust the path as necessary


const Header = () => {
  return (
    <header>
      <div className="top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>
            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link to="/help-center" className="text-[13px] link font-[500] transition">
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link to="/order-tracking" className="text-[13px] link font-[500] transition">
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="container flex items-center justify-between">
          <div className="col1">
            <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', width: '50%', height: '50%', marginTop: '10px',  borderRadius:'50%', objectFit: 'cover' }}>
              <img src={logo} alt="logo" />

            </Link>
          </div>
          <div className="col2">{/* Add content here if needed */}</div>
          <div className="col3">{/* Add content here if needed */}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;