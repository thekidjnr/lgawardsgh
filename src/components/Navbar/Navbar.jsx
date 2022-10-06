import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  console.log(openNav);
  const handleToggle = () => {
    setOpenNav(!openNav);
  };
  const navigate = useNavigate();
  const lottery = () => {
    navigate("/lottery");
  };
  const gaming = () => {
    navigate("/gaming");
  };
  const home = () => {
    navigate("/");
  };
  const contact = () => {
    navigate("/contact");
  };
  return (
    <div className="sticky top-0 left-0 right-0 z-50 bg-black/75 py-6">
      <div className="flex items-center justify-between mr-4 lg:hidden">
        <h1 className="text-white ml-4 text-[20px] ">LOGO</h1>
        <button onClick={handleToggle} className="z-10">
          {openNav ? (
            <IoMdClose className="text-white" size={30} color="white" />
          ) : (
            <GiHamburgerMenu className="text-white " size={30} />
          )}
        </button>
      </div>
      {openNav && (
        <div className="text-white bg-black/90 bg-cover top-0 left-0 right-0 bottom-0 absolute z-2 h-screen">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-4xl font-bold mb-10">LOGO</h1>
            <div className="flex flex-col gap-5 text-center font-light text-2xl">
              <Link to="/gaming" className="active:font-bold transition">
                GAMING
              </Link>
              <Link className="active:font-bold transition">LOTTERY</Link>
              <Link className="active:font-bold transition">HONOREES</Link>
              <Link className="active:font-bold transition">MEDIA</Link>
              <Link className="active:font-bold transition">ABOUT</Link>
              <Link className="mt-4 text-xl font-medium rounded-[30px] border-2 py-6 px-8 active:font-bold transition">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className=" lg:flex lg:items-center lg:justify-between section lg:block hidden ">
        <ul className=" ml-[35px] font-light text-[20px] flex justify-between gap-10 text-[#FFFFFF] font-Open Sans cursor-pointer  ">
          <li className=" " onClick={gaming}>
            GAMING
          </li>
          <li className="" onClick={lottery}>
            LOTTERY
          </li>
          <li className="">HONOREES</li>
        </ul>
        <div
          className=" font-semibold text-[30px] font-Open Sans text-[#FFFFFF] "
          onClick={home}
        >
          LOGO
        </div>
        <ul className=" font-Open Sans text-[#FFFFFF] mr-[35px] font-light text-[20px] flex gap-10 justify-between cursor-pointer">
          <li className="">MEDIA</li>
          <li className=" ">ABOUT</li>
          <li className=" " onClick={contact}>
            CONTACT US
          </li>
        </ul>
      </div>
    </div>
  );
};
