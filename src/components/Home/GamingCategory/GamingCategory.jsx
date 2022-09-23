import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
export const GamingCategory = () => {
  // const navigate = useNavigate();
  // const gaming =()=>{
  //   navigate("/gaming");
  // }
  return (
    <div className="bg-black pb-[64px]">
      <div className=" bg-[#353535] h-[159px] text-center pt-[46px]">
        <h1 className=" font-semibold font-Open Sans text-[50px] leading-[68px] text-white ">
          TOP GAMING CATEGORY
        </h1>
      </div>
      <div className="section">
        <div className=" bg-black h-100vh items-center justify-center pt-[108px] flex flex-wrap">
          <div className="flex justify-around ml-[30px] mt-[29px]  ">
            <div className=" w-[558px] h-[503px] bg-game align-bottom ">
              <div className=" bg-item_bg h-[150px] mt-[356px] flex justify-center items-center ">
                <h1 className="text-center text-white font-Open Sans font-bold text-[35px] leading-[38px] ">
                  Sports Betting Application of <br />
                  the Year
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-around ml-[30px] mt-[29px] ">
            <div className=" w-[558px] h-[503px] bg-game align-bottom ">
              <div className=" bg-item_bg h-[150px] mt-[356px] flex justify-center items-center ">
                <h1 className="text-center text-white font-Open Sans font-bold text-[35px] leading-[38px] ">
                  Casino Operator of <br />
                  the Year
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-around ml-[30px] mt-[29px] ">
            <div className=" w-[558px] h-[503px] bg-game align-bottom ">
              <div className=" bg-item_bg h-[150px] mt-[356px] flex justify-center items-center ">
                <h1 className="text-center text-white font-Open Sans font-bold text-[35px] leading-[38px] ">
                  Best Customer Service <br />
                  Company of the Year
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-around ml-[30px] mt-[29px]  ">
            <div className=" w-[558px] h-[503px] bg-game align-bottom ">
              <div className=" bg-item_bg h-[150px] mt-[356px] flex justify-center items-center ">
                <h1 className="text-center text-white font-Open Sans font-bold text-[35px] leading-[38px] ">
                  Emerging Sports Betting <br />
                  Company
                </h1>
              </div>
            </div>
          </div>
        </div>

        <Link
          to="/gaming"
          className=" cursor-pointer mt-[39px] justify-end flex mr-[80px] "
        >
          <h1 className="text-white mr-[25px] font-semibold font-Open Sans text-[22px] leading-[30px] ">
            Explore all
          </h1>
          <BsArrowRight
            color="white"
            style={{ width: "28px", height: "38.88px" }}
          />
        </Link>
      </div>
    </div>
  );
};
