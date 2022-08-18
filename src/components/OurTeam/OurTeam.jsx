import React from "react";
import img1 from "../../assets/img/Team1.png";
import img2 from "../../assets/img/Team2.png";
import img3 from "../../assets/img/Team3.png";
import img4 from "../../assets/img/Team4.png";

const aboutTeam = [
  { img: img1, name: "Jhon Doe", desc: "Digital Marketing Manager" },
  { img: img2, name: "Jhon Doe", desc: "Digital Marketing Manager" },
  { img: img3, name: "Jhon Doe", desc: "Digital Marketing Manager" },
  { img: img4, name: "Jhon Doe", desc: "Digital Marketing Manager" },
];

const OurTeam = () => {
  return (
    <div className="OurTeam md:pb-80 pb-36">
      <div className=" OurTeam__title font-medium md:pb-20 text-4xl text-center md:text-7xl">
        <h1>Our Team</h1>
        <div className="md:pt-14 pt-3 pb-14 container m-auto flex items-center">
          <span
            style={{ color: "#BABABA" }}
            className="font-bold md:text-2xl md:leading-7 text-base text-center"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </span>
        </div>
      </div>
      <div className="OurTeam__content">
        <div className="OurTeam__content__description md:grid md:grid-cols-4 ">
          {aboutTeam.map((item, index) => {
            return (
              <div key={index} className="relative md:h-107 h-80">
                {index % 2 === 0 ? (
                  <>
                    <div className="OurTeam__content__description__image h-full">
                      <img
                        className="w-full h-full md:object-cover"
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <div className="md:h-24 p-2 md:p-4 text-black bg-white md:w-full w-8/12 OurTeam__content__description__introduce absolute bottom-0 md:opacity-0 md:hover:!opacity-100">
                      <h1 className="font-bold text-xl md:text-3xl leading-10">
                        {item.name}
                      </h1>
                      <span
                        style={{ color: "#5E5E5E" }}
                        className="font-semibold text-sm md:text-xl"
                      >
                        {item.desc}
                      </span>
                    </div>
                  </>
                ) : (
                    <>
                    <div className="OurTeam__content__description__image h-full">
                      <img
                        className="w-full h-full md:object-cover"
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <div className="md:h-24 p-2 md:p-4 text-black bg-white md:w-full w-8/12 OurTeam__content__description__introduce absolute bottom-0 right-0 md:opacity-0 md:hover:!opacity-100">
                      <h1 className="font-bold text-xl md:text-3xl leading-10">
                        {item.name}
                      </h1>
                      <span
                        style={{ color: "#5E5E5E" }}
                        className="font-semibold text-sm md:text-xl"
                      >
                        {item.desc}
                      </span>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
