import React from "react";

const Contact = () => {
  return (
    <div className="contact text-center md:pb-52">
      <div className="contact__title pb-9 md:pb-0">
        <h1 className="font-medium md:pb-20 text-4xl text-center md:text-7xl">
          Contact
        </h1>
        <h2 className="font-light md:text-5xl text-xl pt-9">
          contact@website.com
        </h2>
        <h2 className="font-light md:text-5xl text-xl md:pt-3">+0 0000 0000</h2>
      </div>
      <div
        style={{ color: "#D6D6D6" }}
        className="contact__social text-base md:pt-14 container m-auto font-light md:text-3xl md:flex md:justify-around md:items-center grid grid-cols-3"
      >
        <span>Twitter</span>
        <span>LinkedIn</span>
        <span>Dribbble</span>
        <span>YouTube</span>
        <span>Instagram</span>
        <span>Facebook</span>
      </div>
    </div>
  );
};

export default Contact;
