import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Yash Gupta.</div>
      <div>
        <Link to={"https://www.facebook.com/profile.php?id=100014354708728"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/channel/UCm1D7U5fq7miCVs8uOD8Wyg"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/yash-gupta-4901bb228"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/yash_gupta.02/?igshid=ZDdkNTZiNTM%3D"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;