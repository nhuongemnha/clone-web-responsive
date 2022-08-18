import React from "react";

const Footer = () => {
  return (
    <div className="footer md:bg-white md:text-black md:pt-0 pt-40">
      <div className="footer__contain flex h-24 m-auto md:justify-between md:items-center container text-xl text-center  flex-col-reverse  md:flex-row ">
        <div className="footer__left text-xs md:text-xl md:pt-0 pt-6 pb-5 md:pb:0">
          <h3>2022 Creatives</h3>
        </div>
        <div className="footer__right flex justify-start md:text-xl md:font-normal text-xs font-extralight flex-col md:flex-row">
          <h3>Privacy Policy</h3>
          <h3 className="md:pl-14">Terms and Conditions</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
