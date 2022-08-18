import React from "react";

const Work = () => {
  return (
    <section className="work container mt-12 mx-auto">
      <div className="work__content">
        <div className="work__item mb-28 ">
          <div className="work__item__title top-0 tracking-widest left-0 font-medium text-center">
            <div className="">
              <h1
                style={{ lineHeight: "0.8" }}
                className="md:text-9xl text-5xl"
              >
                Creative
              </h1>
              <h1
                style={{ lineHeight: "0.8" }}
                className="md:text-9xl text-5xl "
              >
                Innovative
              </h1>
              <h1
                style={{ lineHeight: "0.8" }}
                className="md:text-9xl text-5xl "
              >
                Design Agency
              </h1>
            </div>
            <br />
          </div>
          <div className="mt-6">
            <span
              style={{ color: "#BABABA" }}
              className="work__item__description flex md:p-0 tracking-wider justify-center text-center md:text-3xl leading-4 md:block container text-base font-normal "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </span>
          </div>
        </div>
        <div className="pt-24 font-medium pb-24 text-center text-4xl md:text-7xl">
          <h1>Work</h1>
        </div>
      </div>
    </section>
  );
};

export default Work;
