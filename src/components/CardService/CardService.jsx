import React from "react";

const infoCard = [
  {
    title: "Graphic Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur",
    price: "400",
  },
  {
    title: "Product Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur",
    price: "350",
  },
  {
    title: "Web Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur",
    price: "800",
  },
  {
    title: "Video Editing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur",
    price: "500",
  },
];

const CardService = () => {
  return (
    <div className="CardService md:mt-96 mt-24 md:pb-60 pb-36">
      <div className=" font-medium md:pb-24 pb-9 text-center text-4xl md:text-7xl">
        <h1>Services</h1>
      </div>

      <div className="CardService__content relative xl:grid xl:grid-cols-2 xl:justify-between xl:gap-20 container m-auto">
        {infoCard.map((item, index) => {
          return (
            <div key={index} className="relative  bg-white mb-14">
              <div className=" CardService__content__card md:p-14 pt-8  md:h-105 m-auto sm:w-106 w-72 h-72 text-black">
                <h3 className="font-semibold pb-3 leading-7 md:text-4xl text-2xl md:pb-5 md:leading-6">
                  {item.title}
                </h3>
                <span className="md:text-1xl  text-0xl flex md:inline md:leading-6 font-normal">
                  {item.desc}
                </span>
                <button className="flex md:mb-0  md:pt-9 pt-4 font-semibold">
                  See Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    style={{
                      fill: "rgba(0, 0, 0, 1)",
                      transform: "",
                      msfilter: "",
                    }}
                  >
                    <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
                  </svg>
                </button>
              </div>
              <div
                style={{
                  backgroundColor: "#00CF2E",
                  position: "absolute",
                }}
                className="h-14 md:pl-14 pl-8 flex items-center w-full text-xl leading-6 font-semibold bottom-0 CardService__content__description"
              >
                <span>Starting at $400</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardService;
