import React, { Fragment } from "react";
import img1 from "../../assets/img/Rectangle1.png";
import img2 from "../../assets/img/Rectangle2.png";
import img3 from "../../assets/img/Rectangle3.png";
import img4 from "../../assets/img/Rectangle4.png";
import img5 from "../../assets/img/Rectangle5.png";
import img6 from "../../assets/img/Rectangle6.png";
import rectangle from "../../assets/img/Rectangle26.png";

const mainDesign = [
  {
    title: "Abstract Design",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: img1,
  },
  {
    title: "Abstract Design",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: img2,
  },
  {
    title: "Abstract Design",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: img3,
  },
  {
    title: "Abstract Design",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: img4,
  },
  {
    title: "Abstract Design",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: img5,
  },
  {
    title: "Abstract Design",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: img6,
  },
];
const Design = () => {
  return (
    <div className="design md:grid md:grid-cols-2">
      {mainDesign.map((item, index) => {
        return (
          <Fragment key={index}>
            <div className="design__content relative">
              <div className="design__image w-full md:min-h-600">
                <img className="w-full h-full" srcSet={item.img} alt="" />
              </div>
              {index % 2 === 0 ? (
                <div className="design__description absolute md:opacity-0 md:design-hover:opacity-50 md:hover:!opacity-100 right-0 bottom-0">
                  <div className="md:w-full w-6/12 md:h-72 h-16 bg-white container md:p-9 p-2 text-black">
                    <h1 className="md:text-5xl text-xs leading-0 md:pb-3 font-bold">
                      {item.title}
                    </h1>
                    <span className=" md:text-xl text-xss font-light md:inline flex ">
                      {item.des}
                    </span>
                    <button className="flex pt-7">
                      See Project
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
                </div>
              ) : (
                <div className="design__description absolute md:opacity-0 md:design-hover:opacity-50 md:hover:!opacity-100 bottom-0">
                  <div className="md:w-full w-6/12 md:translate-x-0 translate-x-full md:h-72 h-16 bg-white container md:p-9 p-2 text-black">
                    <h1 className="md:text-5xl text-xs leading-0 md:pb-3 font-bold">
                      {item.title}
                    </h1>
                    <span className=" md:text-xl text-xss font-light md:inline flex">
                      {item.des}
                    </span>
                    <button className="flex pt-7">
                      See Project
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
                </div>
              )}
            </div>
            {index < 5 ? (
              <div className="md:hidden text-white flex justify-center p-2">
                <button>
                  <img className="w-20 h-1" src={rectangle} alt="" />
                </button>
              </div>
            ) : (
              <div className="md:hidden text-white z-50 border-2 mt-9 w-6/12 text-center m-auto justify-center p-2">
                <button>SEE ALL</button>
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Design;
