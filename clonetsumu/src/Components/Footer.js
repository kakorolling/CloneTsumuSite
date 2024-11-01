import React from "react";
import { Link } from "react-router-dom";
import './Components.css'


function Footer(props) {
    return (
      <div>
        <footer>
          <div className="footerTxt">@2024 | tsumutsumu</div>
          <div className="LinkPage">
            <Link className="LinkTxt" to="/">Home</Link>
            <Link className="LinkTxt" to="/signup">회원가입</Link>
            <Link className="LinkTxt" to="/searchAccount">계정 찾기</Link>
          </div>
        </footer>
      </div>
    );
};

export default Footer;
