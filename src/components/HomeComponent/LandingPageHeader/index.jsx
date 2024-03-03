import React from "react";
import { Button, Text } from "components";
import { Link } from "react-router-dom";

const LandingPageHeader = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="header-row my-px">
            <div className="flex flex-row gap-[11px] items-center justify-start">
              {/* <Img className="h-10 w-10" src="images/img_home.svg" alt="home" /> */}
              <Text
                className="text-orange-A700 capitalize text-2xl w-auto"
                size="txtMarkoOneRegular20"
              >
                Krishi setu
              </Text>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          {/* <div className="flex sm:flex-1 sm:flex-col flex-row sm:hidden items-center justify-between w-[492px] sm:w-full">
            <List
              className="sm:flex-col flex-row gap-10 grid grid-cols-3"
              orientation="horizontal"
            >
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtManropeSemiBold16"
                >
                  Home
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown_gray_600.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtManropeSemiBold16"
                >
                  Listing
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown_gray_600.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtManropeSemiBold16"
                >
                  Agents
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown_gray_600.svg"
                  alt="arrowdown"
                />
              </div>
            </List>
            <Text
              className="text-base text-center text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              About
            </Text>
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              Contact
            </Text>
          </div> */}
          <div className="flex flex-row gap-10 h-[42px] md:h-auto sm:hidden items-center justify-start w-auto">
            <Text
              className="text-lg text-center text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              About
            </Text>
            <Text
              className="text-lg text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              Contact
            </Text>

            <Button className="bg-transparent cursor-pointer border-b border-b-black font-manrope font-semibold py-[2px] text-lg text-center text-zinc-700 capitalize w-full">
              Log in
            </Button>
            <Button
              onClick={() => setShowForm(true)}
              className="bg-gray-900 cursor-pointer font-manrope font-semibold px-5 py-3 whitespace-nowrap rounded-[10px] text-base text-center text-white-A700 w-full"
            >
              <Link to={"/Signup"}>Sign up</Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

LandingPageHeader.defaultProps = {};

export default LandingPageHeader;
