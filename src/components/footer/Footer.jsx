import React from "react";
import logo from "../../assets/logo-svg.svg";
import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

function FooterT() {
  return (
    <>
      {/* <div className="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div> */}
      <footer className="bg-[#1c100c]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 flex-col justify-center">
          <div className="md:flex md:justify-between justify-center">
            <div className="mb-6 md:mb-0 flex-col justify-center items-center">
              <a href="/" className="flex items-center justify-center">
                <img src={logo} className="md:h-20 h-[50px] me-3" alt="#" />
              </a>
              <div className="text-[#f2f1ef] font-medium text-sm md:text-base py-5 px-10 md:pr-10 flex justify-center items-center text-center">
                PARAKRAM '24 <br />
                Defy odds, define legacy EAST INDIA'S LARGEST SPORTS FESTIVAL,
                IIT (ISM), DHANBAD
              </div>
              <div className="scale-90 sm:flex sm:justify-end">
                <a
                  href="https://drive.google.com/file/d/1qxDJm5xyqs8TySYLM2pBd0GWTS0zOk1i/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center"
                >
                  <button
                    whileHover={{ y: -5 }}
                    type="button"
                    className="  backdrop-blur-lg bg-[#dad3a5] hover:bg-transparent font-medium rounded-lg text-sm px-3 text-center inline-flex items-center  text-[#090d06] hover:text-[#c9bc57] me-2 my-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      className="bi bi-cloud-arrow-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z" />
                    </svg>
                    <p className="p-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.1)]">
                      Events Brochure
                    </p>
                  </button>
                </a>
                <a
                  href="https://drive.google.com/file/d/1ST66nTiMW_pwpS4uiiP6Oiq5hqWm4GuB/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center"
                >
                  <button
                    whileHover={{ y: -5 }}
                    type="button"
                    className="  backdrop-blur-lg bg-[#dad3a5] hover:bg-transparent font-medium rounded-lg text-sm px-3 text-center inline-flex items-center  text-[#090d06] hover:text-[#c9bc57] me-2 my-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      className="bi bi-cloud-arrow-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z" />
                    </svg>
                    <p className="p-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.1)]">
                      Rulebook
                    </p>
                  </button>
                </a>
                <a
                  href="https://drive.google.com/file/d/1zhVgGgWp5wOWLTPSqcK748Pwh-Z5ipYg/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center"
                >
                  <button
                    whileHover={{ y: -5 }}
                    type="button"
                    className="  backdrop-blur-lg bg-[#dad3a5] hover:bg-transparent font-medium rounded-lg text-sm px-3 text-center inline-flex items-center  text-[#090d06] hover:text-[#c9bc57] me-2 my-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      className="bi bi-cloud-arrow-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z" />
                    </svg>
                    <p className="p-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.1)]">
                      NOC'24
                    </p>
                  </button>
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-2 gap-8 sm:gap-6 text-[#efede0]">
                <div className=" flex-col justify-center gap-y-3">
                  <div>For any queries:</div>
                  <ul className="font-medium flex-col gap-y-6">
                    <li className="my-4">
                      <a
                        href="mailto:parakram@iitism.ac.in"
                        className="hover:underline text-xs sm:text-sm md:text-base text-[#e6aa1e] flex items-center justify-start gap-x-3 sm:gap-x-4"
                      >
                        <IoMdMail className="text-[#e6aa1e] text-xl sm:text-2xl" />
                        parakram@iitism.ac.in
                      </a>
                    </li>
                    <li className="my-4">
                      <a
                        href="mailto:parakram@iitism.ac.in"
                        className="hover:underline text-xs sm:text-sm md:text-base text-[#e6aa1e] flex items-center justify-start gap-x-3 sm:gap-x-5"
                      >
                        <FaPhoneAlt className="text-[#e6aa1e] text-lg sm:text-xl" />
                        9637111550
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="https://www.iitism.ac.in/"
                        className="hover:underline text-xs sm:text-sm md:text-base flex items-center justify-start gap-x-2 sm:gap-x-4"
                      >
                        <FaMapMarkerAlt className="text-[#e6aa1e] text-5xl sm:text-4xl" />
                        Indian Institute of Technology (ISM) Dhanbad - 826004,
                        Jharkhand, India
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center items-center">
                  <ul className="font-medium">
                    <li className="mb-4">
                      <Link to="/" className="hover:underline">
                        Home
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link to="/events" className="hover:underline">
                        Events
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link to="/merchandise" className="hover:underline">
                        Merchandise
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link to="/sponsors" className="hover:underline">
                        Sponsors
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link to="/accomodation" className="hover:underline">
                        Accomodation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between text-[#ffc946]">
            <div className="flex mt-4 justify-around sm:mt-0 text-3xl gap-x-5">
              <a
                href="https://www.facebook.com/parakram.iitism/about/"
                className=" hover:text-[#e6aa1e]"
              >
                <FaFacebookF />
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="https://www.instagram.com/parakram.iitism/"
                className=" hover:text-[#e6aa1e] ms-5"
              >
                <FaInstagram />
                <span className="sr-only">Instagram page</span>
              </a>
              {/* <a
                href="https://www.linkedin.com/company/srijaniitismdhn/"
                className=" hover:text-[#c9bc57] ms-5"
              >
                <FaLinkedin />
                <span className="sr-only">LinkedIn page</span>
              </a> */}
            </div>
            {/* <div>
              <Link to="/privacy-policy" className="hover:underline mx-5">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="hover:underline mx-5">
                Terms & Conditions
              </Link>
              <Link
                to="/returns-and-refunds-policy"
                className="hover:underline mx-5"
              >
                Returns & Refunds Policy
              </Link>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterT;
